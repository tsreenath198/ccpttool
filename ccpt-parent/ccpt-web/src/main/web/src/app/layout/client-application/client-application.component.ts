import { Component, OnInit } from '@angular/core';
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
import { NgbModalRef,ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    private urlConstants = new URLConstants();
    public currSearchTxt:string = "";
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public isInterviewScheduled:boolean = false;
    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    public readOnlyForm: string = '';
    public enableButtonType: string = '';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.CAModel['caStatus'] = <ClientApplicationStatusModel>{};
        this.CAModel['clientPosition'] = <ClientPositionModel>{};
        this.CAModel['consultant'] = <ConsultantModel>{};
    }
    private getAllCAS = this.http.get(this.urlConstants.CASGetAll);
    private getAllC = this.http.get(this.urlConstants.CGetAll);
    private getAllCP = this.http.get(this.urlConstants.CPGetAll);

    ngOnInit() {
        this.init();
        this.getAllDropdowns();
    }
    init() {
        this.http.get(this.urlConstants.CAGetAll).subscribe(resp => {
            this.clientApplicationList = resp as any;
        })
    }
    getAllDropdowns() {
        forkJoin(
            this.getAllCAS,
            this.getAllC,
            this.getAllCP
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.clientApplicationStatusList = listofrecords[0] as any;
            this.consultantList = listofrecords[1] as any;
            this.clientPositionList = listofrecords[2] as any;
        });
    }

    formReset() {
        this.CAModel = <ClientApplicationModel>{};
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(data) {
        this.isInterviewScheduled = true;
        this.CAModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    createClientApplication(clientApplicationForm:NgForm): void {
        this.http.post(this.CAModel, this.urlConstants.CACreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Client Application");
            this.init();
            this.formReset()
            clientApplicationForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Application");
        })

    }
    editClientApplication(data) {
        this.isInterviewScheduled = true;
        this.CAModel = JSON.parse(JSON.stringify(data));;
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    updateClientApplication(clientApplicationForm:NgForm) {
        this.http.update(this.CAModel, this.urlConstants.CAUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, "Client Application");
            this.formReset();
            this.init();
            clientApplicationForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.statusText, "Client Application");
        })
        this.formReset();
    }
    
    cancelForm(clientApplicationForm:NgForm) {
        this.formReset();
        clientApplicationForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';   

    }
    deleteCARecord(): void {
        this.http.delete(this.urlConstants.CADelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, "Client Application");
            this.init();
            this.close();
            this.formReset();
        })
    }
    /**
     * @param 
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number) {
        if (selected) {
            this.selectedRecrdToDel = selected;
        }
        this.modalRef = this.modalService.open(content);
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
