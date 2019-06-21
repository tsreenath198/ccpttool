import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientPositionModel } from '../client-position/client-position.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { forkJoin } from 'rxjs';


@Component({
    selector: 'app-consultant-call-history',
    templateUrl: './consultant-call-history.component.html',
    styleUrls: ['./consultant-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
    public consultantCallHistoryModel: ConsultantCallHistoryModel = <any>{};
    public consultantCallHistoryList: Array<any> = [];
    public currSearchTxt = '';
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public consultantList: Array<any> = [];
    public clientPositionList: Array<any> = [];
    public recruiterList: Array<any> = [];
    public urlConstants = new URLConstants();

    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public trash = 'trash';
    protected screenHeight: any;
    public readOnlyForm = '';
    public enableButtonType = '';
    
    protected apName = '';
    protected apValue = '';

    protected getCplPromise = this.http.get(this.urlConstants.CPDropdown);
    protected getClPromise = this.http.get(this.urlConstants.CDropdown);
    protected getRlPromise = this.http.get(this.urlConstants.RDropdown);
    protected cochGetAllPromise = this.http.get(this.urlConstants.CoCHGetAll);

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
     }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        this.joins();
        this.init();
        // this.http.get(this.urlConstants.CGetAll).subscribe(resp => {
        //     this.consultantList = resp as Array<ConsultantModel>;
        // });
        // this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
        //     this.clientPositionList = resp as Array<ClientPositionModel>;
        // });
        // this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
        //     this.recruiterList = resp as any;
        // });
    }
    joins() {
        forkJoin(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(listofrecords => {
          this.clientPositionList = listofrecords[0] as any;
          this.consultantList = listofrecords[1] as any;
          this.recruiterList = listofrecords[2] as any;
          this.getRecruiterId();
          this.getTodaysDate();
        });
      }
    init() {
        
        this.cochGetAllPromise.subscribe(resp => {
            this.consultantCallHistoryList = resp as Array<ConsultantCallHistoryModel>;
        });
        this.consultantCallHistoryModel.properties = [];
    }
    getRecruiterId() {
        const temp = sessionStorage.getItem('username');
        this.recruiterList.forEach(rl => {
          if (rl.email === temp) {
            this.consultantCallHistoryModel.calledBy = rl.id;
          }
          
      if(this.consultantCallHistoryModel.properties == null){
        this.consultantCallHistoryModel.properties = [];
      }
        });
      }
      getTodaysDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        const temp = yyyy+'-'+mm+'-'+dd ;
        this.consultantCallHistoryModel.calledDate = temp;
      }
    consultantCallHistoryEdit(data) {
        this.consultantCallHistoryModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getConsultantById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getConsultantById(id: number) {
        const temp = this.http.get(this.urlConstants.CoCHGetById + id);
        temp.subscribe(resp => {
            this.consultantCallHistoryModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            const temp = resp as any;
        });
    }
    mapToUpdateModel(response): ConsultantCallHistoryModel {
        const temp = response;
        this.consultantCallHistoryModel = temp;
        this.consultantCallHistoryModel['consultantId'] = temp.consultant.id;
        this.consultantCallHistoryModel['calledBy'] = temp.calledBy.id;
        this.consultantCallHistoryModel['cpId'] = temp.clientPosition.id;
        return this.consultantCallHistoryModel;
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.consultantCallHistoryModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.consultantCallHistoryModel.properties.push(<AdditionalPropertiesModel>{ "name": this.apName, "value": this.apValue });
                this.apName = '';
                this.apValue = '';
                break;
            }
        }
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    formReset() {
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
    createConsultantCallHistory(consultantCallHistory: NgForm): void {
        const temp = this.http.post(this.consultantCallHistoryModel, this.urlConstants.CoCHCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant Call History');
            this.init();
            this.formReset();
            consultantCallHistory.resetForm();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
        });

    }
    updateConsultantCallHistory(consultantCallHistory: NgForm) {
        const temp = this.http.update(this.consultantCallHistoryModel, this.urlConstants.CoCHUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant Call History');
            this.init();
            consultantCallHistory.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';  
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
        });
    }
    cancelForm(consultantCallHistory: NgForm) {
        this.formReset();
        this.init();
        consultantCallHistory.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    deleteCoCHRecord(): void {
        const temp = this.http.delete(this.urlConstants.CoCHDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Call History');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
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
