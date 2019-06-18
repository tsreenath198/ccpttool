import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { ConsultantStatusModel } from './consultant-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-consultant-status',
    templateUrl: './consultant-status.component.html',
    styleUrls: ['./consultant-status.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantStatusComponent implements OnInit {
    public consultantStatusModel: ConsultantStatusModel = <ConsultantStatusModel>{};
    public consultantStatusList: Array<ConsultantStatusModel> = [];
    private urlConstants = new URLConstants();
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public currSearchTxt = '';
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;

    public readOnlyForm = '';
    public enableButtonType = '';
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    ngOnInit() {
        this.init();
    }
    public init() {
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as Array<any>;
        });
    }
    editClientApplicationStatus(data) {
        this.consultantStatusModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getById(id){
        this.http.get(this.urlConstants.CSGetById + id).subscribe(resp => {
            this.consultantStatusModel = this.mapToUpdateModel(resp);
            });
    }
    mapToUpdateModel(response){
        let temp=response;
        this.consultantStatusModel=temp;
        return this.consultantStatusModel   
    }
    public formReset() {
        this.consultantStatusModel = <ConsultantStatusModel>{};
    }
    public createConsultantStatus(consultantStatusForm: NgForm): void {
        this.http.post(this.consultantStatusModel, this.urlConstants.CSCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant Status');
            this.init();
            this.formReset();
            consultantStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Status');
        });
    }
    public updateConsultantStatus(consultantStatusForm: NgForm) {
        this.http.update(this.consultantStatusModel, this.urlConstants.CSUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant Status');
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            consultantStatusForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Status');
        });
    }

    public cancelForm(consultantStatusForm: NgForm) {
        this.formReset();
        consultantStatusForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    deleteCSRecord(): void {
        this.http.delete(this.urlConstants.CSDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Status');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Status');
            }
            this.toastr.error(err.error.message, 'Consultant Status');
        });
    }
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
