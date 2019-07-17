import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel, SendSmsModel, SendEmailModel, ActionsList } from './client-position.model';
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
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { ActionModel } from '../modals/action';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-position',
  templateUrl: './client-position.component.html',
  styleUrls: ['./client-position.component.scss'],
  animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
  public model: ClientPositionModel = <ClientPositionModel>{};
  public clientPositionList: Array<ClientPositionModel> = [];

  public pagedCPList: Array<ClientPositionModel> = [];
  public consultantCreateList: Array<any> = [];
  public consultantList: Array<any> = [];
  public smsList: Array<MessageTemplateModel> = [];
  public clientPositionStatusList: Array<any> = [];
  public clientList: Array<any> = [];
  public recruiterList: Array<any> = [];
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
  public actionModel: ActionModel = <ActionModel>{};
  public invalidAppCode = false;
  public closedByEnable = false;
  private selectedRecrd = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public urlConstants = new URLConstants();
  public currSearchTxt: string;
  public readOnlyForm = '';
  public enableButtonType = '';
  public shortList = 'shortList';
  public sms = 'sms';
  public email = 'email';
  public numberOfPositions = 0;
  public screenHeight: any;
  public creator = 0;
  public apName = '';
  public apValue = '';
  public loggedInRole = '';
  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string;
  public isCreate: boolean = false;
  public page: number;
  public cpListLength: number;
  public pageSize: number = 20;
  public sendTo: any;
  public getAllCPS = this.http.get(this.urlConstants.CPSGetAll);
  public getAllR = this.http.get(this.urlConstants.RDropdown);
  public getAllC = this.http.get(this.urlConstants.ClientDropdown);
  public getAllCon = this.http.get(this.urlConstants.CDropdown);
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no'
  };
  constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal, private router: Router) {
    // tslint:disable-next-line:no-unused-expression
    this.actionModel.sendMail;
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  private getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
  }

  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()){
      this.router.navigate(['/login']);
    }
    this.getAllDropdowns();
    this.loggedInRole = sessionStorage.getItem('role');
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
  private init() {
    this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
      this.clientPositionList = resp as any;
      this.pagedCPList = resp as any;
      this.cpListLength = this.clientPositionList.length;
      this.pageChange(this.page);
    });
    this.model.properties = [];
    this.model.cpstatus = 'Open';
    this.model.requiredPositions ='1';
    this.page = 1;
  }
  private getAllDropdowns() {
    forkJoin(
      this.getAllCPS,
      this.getAllR,
      this.getAllC,
      this.getAllCon
      // forkJoin on works for observables that complete
    ).subscribe(listofrecords => {
      this.clientPositionStatusList = listofrecords[0] as any;
      this.recruiterList = listofrecords[1] as any;
      this.clientList = listofrecords[2] as any;
      this.consultantList = listofrecords[3] as any;
    });
  }
  public dblSetModel() {
    this.readOnlyForm = 'U';
    this.config.editable = true;
    this.enableButtonType = 'U';
    this.closedByEnable = true;
    this.showAction = true;
    this.action = null;
  }
  private enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.config.editable = true;
    this.closedByEnable = true;
  }
  public setModel(id: number) {
    this.getCPById(id);
    this.config.editable = false;
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;

  }
  private getCPById(id: number) {
    const temp = this.http.get(this.urlConstants.CPGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      // tslint:disable-next-line:no-shadowed-variable
      if (this.model.properties == null) {
        this.model.properties = [];
      }
    });
  }
  private mapToUpdateModel(response): ClientPositionModel {
    const temp = response;
    this.model = temp;
    this.model['clientId'] = temp.client.id;
    this.model['cpstatus'] = temp.status.code;
    this.model['assignedTo'] = temp.assignedTo ? temp.assignedTo.id : 0;
    this.model['closedBy'] = temp.closedBy ? temp.closedBy.id : 0;
    return this.model;
  }
  public propertiesListIncrement(event, i) {
    switch (event.id) {
      case 'decrease': {
        this.model.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.model.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
        this.apName = '';
        this.apValue = '';
        break;
      }
    }
  }
  public actions(value,sendMailContent, trashContent, shortListContent, form) {
    switch (value) {
      case 'Delete': {
        this.open(this.model.id, trashContent);
        break;
      }
      case 'Send JD':{
        for (let i = 0; i < this.consultantList.length; i++) {
          const temp = { item_id: this.consultantList[i].id, item_text: this.consultantList[i].fullname, notes: '' };
          this.mailIdForMails.push(temp);
        }
        this.open(this.model.id, sendMailContent);
        break;
      }
      case 'Create Application': {
        for (let i = 0; i < this.consultantList.length; i++) {
          const temp = { item_id: this.consultantList[i].id, item_text: this.consultantList[i].fullname, notes: '' };
          this.consultantNames.push(temp);
        }
        this.open(this.model.id, shortListContent);
        break;
      }
      case 'Edit': {
        this.enableFormEditable();
        break;
      }
      case 'Close': {
        this.cancelForm(form);
        break;
      }
      case 'Clone' : {
        this.cloneData(this.model);
        break;
      }
    }
  }
  private cloneData(data: any){
    data.id = null;
    data.assignedTo = null;
    data.role = null;
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.closedByEnable = false;
  }
  private formReset() {
    this.model = <ClientPositionModel>{};
    this.model.properties = [];
    this.model.cpstatus = 'Open';
    this.model.requiredPositions ='1';
  }
  public create(clientPositionForm: NgForm): void {
    this.isCreate = true;
    // tslint:disable-next-line:max-line-length
    this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
    const temp = this.http.post(this.model, this.urlConstants.CPCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Client Position');
        this.init();
        this.formReset();
        clientPositionForm.resetForm();
        this.isCreate= false;
        if(this.showAction){
          this.showAction = false;
        }
      },
      err => {
        this.toastr.error(err.error.message, 'Client Position');
        this.isCreate= false;
      }
    );
  }
  private generateCPCode(cnt, role, loc): string {
    if (loc == null || loc === undefined) {
      return this.getClientNameById(cnt) + role;
    } else {
      return this.getClientNameById(cnt) + '-' + role + '-' + loc;
    }
  }
  private getClientNameById(clientId: number) {
    const temp = this.clientList.filter(c => c.id === clientId);
    return temp[0].name;
  }
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
  public update(clientPositionForm: NgForm) {
    // tslint:disable-next-line:max-line-length
    this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
    const temp = this.http.update(this.model, this.urlConstants.CPUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.UpdateMsg, 'Client Position');
        this.formReset();
        this.init();
        clientPositionForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.closedByEnable = false;
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Client Position');
      }
    );
  }
  public cancelForm(clientPositionForm: NgForm) {
    clientPositionForm.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.closedByEnable = false;
    this.showAction = false;
  }
  public trash(): void {
    const temp = this.http.delete(this.urlConstants.CPDelete + this.selectedRecrd);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Client Position');
        this.init();
        this.close();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(this.urlConstants.DeleteMsg, 'Client Position');
        }
        this.toastr.error(err.error.message, 'Client Position');
      }
    );
  }
  public selectSms(sms) {
    const temp = { cpId: this.selectedRecrd };
    this.http.post(temp, this.urlConstants.SMSTemplateBuildContent + sms.value).subscribe(resp => {
      // tslint:disable-next-line:no-shadowed-variable
      const temp = resp as any;
      this.sendSmsModel.message = temp.message;
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
    const temp = this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend);
    temp.subscribe(resp => {
      this.sendEmailModel = <SendEmailModel>{};
      this.toastr.success('Email/Emails sent successfully', 'Sent!');
      this.close();
    });
  }
  public createClientApplication(data: any,clientPositionForm: NgForm) {
    // TODO:Need to check the code
    // tslint:disable-next-line:max-line-length
    const dataToCreate = {
      cpId: this.selectedRecrd,
      consultantId: data.item_id,
      caStatus: 'NEW',
      description: data.notes,
      creatorId: this.creator
    };
    const temp = this.http.post(dataToCreate, this.urlConstants.CACreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application');
        this.init();
        this.formReset();
        clientPositionForm.resetForm();
        this.isCreate= false;
        if(this.showAction){
          this.showAction = false;
        }
        this.shortListConsultants = [];
      },
      err => {
        this.toastr.error(err.statusText, 'Client Application');
      }
    );
  }
  public onItemSelect(event){
    let temp={"cpId":this.model.id,"cId":event.id};
    this.http.post(temp,this.urlConstants.EmailTemplateBuildContent+'Job Description').subscribe(resp => {
      this.sendEmailModel = resp as any;
      this.sendEmailModel.toEmails = event.email;
    });
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  public open(event: any, content) {
    // content, selected: number, type: string
    if (event) {
      this.selectedRecrd = event;
    }
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    if (content) {
      if (content.type === this.email) {
        for (let i = 0; i < this.consultantList.length; i++) {
          const temp = { item_id: this.consultantList[i].id, item_text: this.consultantList[i].fullname, notes: '' };
          this.mailIdForMails.push(this.consultantList[i].email);
        }
      }
      if (content.type === this.sms) {
        this.http.get(this.urlConstants.SMSTemplateGetAll).subscribe(resp => {
          this.smsList = resp as any;
        });
        for (let i = 0; i < this.consultantList.length; i++) {
          const temp = { item_id: this.consultantList[i].phone, item_text: this.consultantList[i].fullname, notes: '' };
          this.numbersForSmsDropdown.push(temp);
        }
      }
      if (content.type === this.shortList) {
        for (let i = 0; i < this.consultantList.length; i++) {
          const temp = { item_id: this.consultantList[i].id, item_text: this.consultantList[i].fullname, notes: '' };
          this.consultantNames.push(temp);
        }
      }
    }
  }
  public close() {
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
  public pageChange(event) {
    const from = ((event - 1) * this.pageSize);
    const lst = this.clientPositionList;
    const uplst = lst.slice(from, from + this.pageSize);
    this.pagedCPList = uplst;
  }
}
