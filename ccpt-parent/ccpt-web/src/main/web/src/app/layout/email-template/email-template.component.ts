import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { EmailTemplateModel } from './email-template.model';

@Component({
    selector: 'app-email-template',
    templateUrl: './email-template.component.html',
    styleUrls: ['./email-template.component.scss'],
    animations: [routerTransition()]
})
export class EmailTemplateComponent implements OnInit {
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    public emailTemplateModel: EmailTemplateModel = <EmailTemplateModel>{};
    public emailTemplateList: any = [];
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';

    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.EmailTemplateGetAll).subscribe(resp => {
            this.emailTemplateList = resp as any;
        });
    }
    editEmailTemplate(data) {
        this.emailTemplateModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id) {
        this.getEmailById(id)
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getEmailById(id: number) {
        this.http.get(this.urlConstants.SMSTemplateGetById + id).subscribe(resp => {
            this.emailTemplateModel = this.mapToUpdateModel(resp);
        });
    }
    mapToUpdateModel(response): EmailTemplateModel {
        const temp = response;
        this.emailTemplateModel = temp;
        return this.emailTemplateModel;
    }
    formReset() {
        this.emailTemplateModel = <EmailTemplateModel>{};
    }
    emailTemplateCreate(emailTemplateForm: NgForm): void {
        this.http.post(this.emailTemplateModel, this.urlConstants.EmailTemplateCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
            this.init();
            this.formReset();
            emailTemplateForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, 'Contact');
        });
    }
    updateEmailTemplate(emailTemplateForm: NgForm) {
        this.http.update(this.emailTemplateModel, this.urlConstants.EmailTemplateUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Email Template ');
            this.init();
            emailTemplateForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.statusText, 'Email Template ');
        });
    }
    cancelForm(emailTemplateForm: NgForm) {
        this.formReset();
        emailTemplateForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    deleteClientRecord(): void {
        this.http.delete(this.urlConstants.EmailTemplateDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            }
            this.toastr.error(err.error.message, 'Client');
        });
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
