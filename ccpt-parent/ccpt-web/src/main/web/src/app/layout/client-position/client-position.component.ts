import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel, SendSmsModel, SendEmailModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';
import { forkJoin } from 'rxjs';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { MessageTemplateModel } from '../message-template/message-template.model';
import { ConsultantModel } from '../consultant/consultant.model';
import { EmailTemplateModel } from '../email-template/email-template.model';


@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel: ClientPositionModel = <ClientPositionModel>{};
    public clientPositionList: Array<ClientPositionModel> = [];
    public consultantCreateList: Array<any> = [];
    public consultantList: Array<ConsultantModel> = [];
    public smsList: Array<MessageTemplateModel> = [];
    public clientPositionStatusList: Array<ClientpositionStatusModel> = [];
    public clientList: Array<ClientModel> = [];
    public recruiterList: Array<RecruiterModel> = [];
    public messageTemplateModel: MessageTemplateModel = <MessageTemplateModel>{};
    public emailTemplateModel: EmailTemplateModel = <EmailTemplateModel>{};
    public sendSmsModel: SendSmsModel = <SendSmsModel>{};
    public sendEmailModel: SendEmailModel = <SendEmailModel>{};
    public numbersForSmsDropdown: Array<any> = [];
    public numbersToSend: Array<any> = [];
    public mailIdForMails: Array<any> = [];
    public shortListConsultants: Array<any> = [];
    public consultantNames: Array<any> = [];
    public dropdownSettings: any;
    public invalidAppCode = false;
    public closedByEnable = false;
    private selectedRecrd = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public urlConstants = new URLConstants();
    public currSearchTxt: string;
    public readOnlyForm = '';
    public enableButtonType = '';
    public numberOfPositions = 0;
    public getAllCPS = this.http.get(this.urlConstants.CPSGetAll);
    public getAllR = this.http.get(this.urlConstants.RGetAll);
    public getAllC = this.http.get(this.urlConstants.ClientGetAll);
    public getAllCon = this.http.get(this.urlConstants.CGetAll);
    // public getAllSms = this.http.get(this.urlConstants.SMSTemplateGetAll);
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }

    ngOnInit() {
        this.getAllDropdowns();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.init();

    }
    init() {
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as any;
        });
    }
    getAllDropdowns() {
        forkJoin(
            this.getAllCPS,
            this.getAllR,
            this.getAllC,
            this.getAllCon,
            // this.getAllSms
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.clientPositionStatusList = listofrecords[0] as any;
            this.recruiterList = listofrecords[1] as any;
            this.clientList = listofrecords[2] as any;
            this.consultantList = listofrecords[3] as any;
            // this.smsList = listofrecords[4] as any;
        });
    }
    editClientPosition(data) {
        this.clientPositionModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.closedByEnable = true;
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.closedByEnable = true;
    }
    readOnlyEnable(id: number) {
        this.getCPById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getCPById(id: number) {
        this.http.get(this.urlConstants.CPGetById + id).subscribe(resp => {
            this.clientPositionModel = this.mapToUpdateModel(resp);
        });
    }
    mapToUpdateModel(response): ClientPositionModel {
        const temp = response;
        this.clientPositionModel = temp;
        this.clientPositionModel['clientId'] = temp.client.id;
        this.clientPositionModel['assignedTo'] = temp.assignedTo.id;
        this.clientPositionModel['cpstatus'] = temp.status.code;
        this.clientPositionModel['closedBy'] = (temp.closedBy) ? temp.closedBy.id : 0;
        return this.clientPositionModel;
    }
    formReset() {
        this.clientPositionModel = <ClientPositionModel>{};
    }
    createClientPosition(clientPositionForm: NgForm): void {
        this.clientPositionModel.generatedCode = this.generateCPCode(this.clientPositionModel.jobCode, this.clientPositionModel.clientId, this.clientPositionModel.location);
        if (this.clientPositionModel.generatedCode) {
            if (!this.invalidAppCode) {
                let i = 0;
                while (i < this.numberOfPositions) {
                    const temp = this.clientPositionModel.generatedCode; // Storing Original value
                    this.clientPositionModel.generatedCode += ('-' + i); // Updating with the count
                    // this.createCP(clientPositionForm);
                    this.getTranslations().then(success => {
                        this.toastr.success(this.urlConstants.SuccessMsg, 'Client Position');
                        this.init();
                        this.formReset();
                        clientPositionForm.resetForm();

                    }, err => {
                        this.toastr.error(err.error.message, 'Client Position');
                    });
                    i++;
                    this.clientPositionModel.generatedCode = temp; // replacing with original value
                }
            }
        }
    }
    private generateCPCode(code, cnt, loc): string {
        return code + "-" + this.getClientNameById(cnt) + "-" + loc;
    }
    private getTranslations(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.clientPositionModel, this.urlConstants.CPCreate).subscribe(resp => {
                resolve(resp);
            });
        });
    }

    private getClientNameById(clientId: number) {
        const temp = this.clientList.filter(c => c.id === clientId);
        return temp[0].name;
    }
    /** Validate Client Position Code */
    /* private validateCPCode(code: string): void {
         const arr = code.split('-');
         if (arr.length === 4 && this.containsOnlyDigits(arr[0]) && arr[3].length === 3) {
             for (let i = 1; i < arr.length - 1; i++) {
                 if (!this.containsOnlyAlphabets(arr[i])) {
                     this.invalidAppCode = true;
                     return;
                 } else {
                     this.invalidAppCode = false;
                 }
             }
         } else {
             this.invalidAppCode = true;
         }
     }*/

    /** Check contains Only Digits */
    private containsOnlyDigits(code): boolean {
        const isnum = /^\d+$/.test(code);
        return isnum;
    }
    /** Check contains Only alphabets */
    private containsOnlyAlphabets(code): boolean {
        const isStr = /^[a-zA-Z]+$/.test(code);
        if (isStr === false) {
            return false;
        }
        return isStr;
    }
    updateClientPosition(clientPositionForm: NgForm) {
        this.clientPositionModel.generatedCode = this.generateCPCode(this.clientPositionModel.jobCode, this.clientPositionModel.clientId, this.clientPositionModel.location);
        this.http.update(this.clientPositionModel, this.urlConstants.CPUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Position');
            this.formReset();
            this.init();
            clientPositionForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.closedByEnable = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client Position');
        });
    }
    cancelForm(clientPositionForm: NgForm) {
        this.formReset();
        clientPositionForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.closedByEnable = false;
    }
    deleteCPRecord(): void {
        this.http.delete(this.urlConstants.CPDelete + this.selectedRecrd).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client Position');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Client Position');
        });
    }
    public sendSmsReq(): void {
        for (let i = 0; i <= this.numbersToSend.length; i++) {
            const temp = this.numbersToSend[i].item_id;
            this.sendSmsModel.contactNumbers.push(temp);
        }
        // this.http.post(this.sendSmsModel, this.urlConstants.SMSTemplateSend ).subscribe(resp => {
        //     this.sendSmsModel = <SendSmsModel>{};
        //     this.toastr.success('Message/Messages sent successfully', 'Sent!');
        //     this.close();
        // });
        console.log(this.sendSmsModel);
    }
    public sendEmailReq(): void {
        this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend).subscribe(resp => {
            this.sendEmailModel = <SendEmailModel>{};
            this.toastr.success('Email/Emails sent successfully', 'Sent!');
            this.close();
        });
    }
    createClientApplication(data: any) {
        const dataToCreate = { 'cpId': this.selectedRecrd, 'consultantId': data.item_id, 'caStatus': 'ACT', 'description': data.notes };
        this.http.post(dataToCreate, this.urlConstants.CACreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application');
            this.init();
            this.formReset();
            this.close();
            this.shortListConsultants = [];
        }, err => {
            this.toastr.error(err.statusText, 'Client Application');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number, type: string) {
        if (selected) {
            this.selectedRecrd = selected;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log(content);
        if (content) {
            if (type === 'email') {
                this.http.get(this.urlConstants.EmailTemplateGetById + selected).subscribe(resp => {
                    this.emailTemplateModel = resp as any;
                    this.sendEmailModel.subject = this.emailTemplateModel.subject;
                    this.sendEmailModel.body = this.emailTemplateModel.body;
                });
                for (let i = 0; i < this.consultantList.length; i++) {
                    this.mailIdForMails.push(this.consultantList[i].email);
                }
            }
            if (type === 'sms') {
                for (let i = 0; i < this.consultantList.length; i++) {
                    const temp = { 'item_id': this.consultantList[i].phone, 'item_text': this.consultantList[i].fullname, 'notes': '' };
                    this.numbersForSmsDropdown.push(temp);
                }
            }
            if (type === 'shortlist') {
                for (let i = 0; i < this.consultantList.length; i++) {
                    const temp = { 'item_id': this.consultantList[i].id, 'item_text': this.consultantList[i].fullname, 'notes': '' };
                    this.consultantNames.push(temp);
                }
            }
        }
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
