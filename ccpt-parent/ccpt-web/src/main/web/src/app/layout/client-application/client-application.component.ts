import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { forkJoin } from 'rxjs';
import { URLConstants } from '../components/constants/url-constants';
import { map } from 'rxjs/operators';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { ConsultantModel } from '../consultant/consultant.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';


@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public CAModel: ClientApplicationModel = <ClientApplicationModel>{};
    public clientApplicationList: Array<ClientApplicationModel> = [];
    public consultantList: Array<ConsultantModel> = [];
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    public clientPositionList: Array<ClientPositionModel> = [];
    public recruiterList: Array<RecruiterModel> = [];
    private urlConstants = new URLConstants();
    public currSearchTxt = '';
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public isInterviewScheduled = false;
    public showProperties = false;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    protected screenHeight: any;
    public readOnlyForm = '';
    public enableButtonType = '';
    public trash = 'trash';

    private getAllCAS = this.http.get(this.urlConstants.CASGetAll);
    private getAllC = this.http.get(this.urlConstants.CGetAll);
    private getAllCP = this.http.get(this.urlConstants.CPGetAll);
    private getAllR = this.http.get(this.urlConstants.RGetAll);

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
    }

    ngOnInit() {
        this.init();
        this.getAllDropdowns();
        this.additionalPropertiesDeclare();
    }
    init() {
        this.http.get(this.urlConstants.CAGetAll).subscribe(resp => {
            this.clientApplicationList = resp as any;
        });
    }
    getAllDropdowns() {
        forkJoin(
            this.getAllCAS,
            this.getAllC,
            this.getAllCP,
            this.getAllR
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.clientApplicationStatusList = listofrecords[0] as any;
            this.consultantList = listofrecords[1] as any;
            this.clientPositionList = listofrecords[2] as any;
            this.recruiterList = listofrecords[3] as any;
        });
    }

    formReset() {
        this.CAModel = <ClientApplicationModel>{};
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.isInterviewScheduled = true;
        this.getCCHById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getCCHById(id: number) {
        const temp = this.http.get(this.urlConstants.CAGetById + id);
        temp.subscribe(resp => {
            this.CAModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            const temp = resp as any;
            if (temp.properties == null) {
                this.additionalPropertiesDeclare();
            }
        });
    }
    mapToUpdateModel(response): ClientApplicationModel {
        const temp = response;
        this.CAModel = temp;
        this.CAModel['cpId'] = temp.clientPosition.id;
        this.CAModel['consultantId'] = temp.consultant.id;
        this.CAModel['caStatus'] = temp.status.code;
        this.CAModel['creatorId'] = temp.creator.id;
        return this.CAModel;
    }
    additionalPropertiesDeclare() {
        this.CAModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.CAModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.CAModel.properties.push(<AdditionalPropertiesModel>{});
                break;
            }
        }
    }
    createClientApplication(clientApplicationForm: NgForm): void {
        const temp = this.http.post(this.CAModel, this.urlConstants.CACreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application');
            this.init();
            this.formReset();
            this.additionalPropertiesDeclare();
            clientApplicationForm.resetForm();

        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
        });

    }
    editClientApplication(data) {
        this.isInterviewScheduled = true;
        this.CAModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    updateClientApplication(clientApplicationForm: NgForm) {
        const temp = this.http.update(this.CAModel, this.urlConstants.CAUpdate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Application');
            this.formReset();
            this.init();
            this.additionalPropertiesDeclare();
            clientApplicationForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
        });
        this.formReset();
    }

    cancelForm(clientApplicationForm: NgForm) {
        this.formReset();
        clientApplicationForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();

    }
    deleteCARecord(): void {
        const temp = this.http.delete(this.urlConstants.CADelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application');
            }
            this.toastr.error(err.error.message, 'Client Application');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any) {
        if (event.id) {
            this.selectedRecrdToDel = event.id;
        }
        this.modalRef = this.modalService.open(event.content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    close() {
        this.modalRef.close();
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
