import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { MessageTemplateModel } from './message-template.model';

@Component({
    selector: 'app-message-template',
    templateUrl: './message-template.component.html',
    styleUrls: ['./message-template.component.scss'],
    animations: [routerTransition()]
})
export class MessageTemplateComponent implements OnInit {
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    public messageTemplateModel: MessageTemplateModel = <MessageTemplateModel>{};
    public messageTemplateList: any = [];
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
            this.messageTemplateList = resp as any;
        });
    }
    editMessageTemplate(data) {
        this.messageTemplateModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(data) {
        this.messageTemplateModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    formReset() {
        this.messageTemplateModel = <MessageTemplateModel>{};
    }
    // otherContactCreate(messageTemplateForm: NgForm): void {
    //     this.http.create(this.emailTemplateModel, this.urlConstants.OCCreate).subscribe(resp => {
    //         this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
    //         this.init();
    //         this.formReset();
    //         messageTemplateForm.resetForm();
    //     }, err => {
    //         this.toastr.error(err.statusText, 'Contact');
    //     });
    // }
    updateMessageTemplate(messageTemplateForm: NgForm) {
        this.http.update(this.messageTemplateModel, this.urlConstants.EmailTemplateUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Message Template ');
            this.init();
            messageTemplateForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.statusText, 'Message Template ');
        });
    }
    cancelForm(messageTemplateForm: NgForm) {
        this.formReset();
        messageTemplateForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    // deleteClientRecord(): void {
    //     this.http.delete(this.urlConstants.OCDelete + this.selectedRecrdToDel).subscribe(resp => {
    //         this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
    //         this.init();
    //         this.close();
    //         this.formReset();
    //     });
    // }
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
