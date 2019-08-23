import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { Properties } from '../components/constants/properties';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel, SendSmsModel, SendEmailModel, ActionsList } from './client-position.model';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { MessageTemplateModel } from '../message-template/message-template.model';
import { EmailTemplateModel } from '../email-template/email-template.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { ActionModel } from '../modals/action';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StorageService, HttpClientService, ToastrCustomService } from '../../shared/services';
import { ClientCallHistoryModel } from '../client-call-history/client-call-history.model';

@Component({
  selector: 'app-client-position',
  templateUrl: './client-position.component.html',
  styleUrls: ['./client-position.component.scss'],
  animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
  public model: ClientPositionModel = <ClientPositionModel>{};
  public clchModel: ClientCallHistoryModel = <ClientCallHistoryModel>{};
  public clientPositionList: any = [];

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
  public properties = new Properties();
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
  public listReturned: boolean;
  public pageSize: number = 20;
  public sendTo: any = null;
  public consultantsToCreate: Array<any> = []
  public getAllCPS = this.http.get(this.urlConstants.CPSGetAll);
  public getAllR = this.http.get(this.urlConstants.RDropdown);
  public getAllC = this.http.get(this.urlConstants.ClientDropdown);
  public getAllCon = this.http.get(this.urlConstants.CDropdown);
  public creating:boolean = false;
  public cpForm:NgForm;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no'
  };
  public paginateConfig :any={
    itemsPerPage: this.properties.ITEMSPERPAGE,
    currentPage: 1,
    totalItems: 0
  }
  constructor(
    private http: HttpClientService,
    private toastr: ToastrCustomService,
    private elRef: ElementRef,
    private modalService: NgbModal,
    private router: Router,
    private titleService: Title,
    private storageService: StorageService
  ) {
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
    if (!this.http.isAuthenticate()) {
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
    this.initialGetAll(); 
    this.spinner(true);
    this.checkStorage();
  }
  private checkStorage() {
    if (this.storageService.clientId) {
      this.model.clientId = this.storageService.clientId;
    }
  }
  private init() {
    // this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
    //   this.clientPositionList = resp as any;
    //   this.pagedCPList = resp as any;
    //   this.spinner(true);
    //   this.cpListLength = this.clientPositionList.length;
    //   this.pageChange(this.page);
    // });
    this.model.properties = [];
    this.model.cpstatus = 'Open';
    this.model.requiredPositions = '1';
    this.page = 1;
  }
  public initialGetAll(){
    let pageNumber = this.paginateConfig.currentPage-1
    let temp=this.http.get(this.urlConstants.CPGetAll+ pageNumber + "&pageSize=20&sortBy=id");
    temp.subscribe(resp => {
      this.clientPositionList = resp as any;
      //this.pageChange(this.page);
      this.paginateConfig.totalItems = this.clientPositionList.noOfRecords
    });
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
  private enableFormEditable(): void {
    this.readOnlyForm = '';
    this.enableButtonType = 'U';
    this.config.editable = true;
    this.closedByEnable = true;
  }
  public setModel(id: number) {
    this.getCPById(id);
    this.config.editable = false;
    this.readOnlyForm = 'U';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getCPById(id: number) {
    this.spinner(false);
    const temp = this.http.get(this.urlConstants.CPGetById + id);
    temp.subscribe(resp => {
      if (resp) {
        this.model = this.mapToUpdateModel(resp);
      }
      if (this.model.properties == null) {
        this.model.properties = [];
      }
      this.spinner(true);
    });
  }
  private mapToUpdateModel(response): ClientPositionModel {
    const temp = response;
    this.model = temp;
    this.model['clientId'] = temp.client.id;
    this.model['cpstatus'] = temp.status.code;
    this.model['assignedTo'] = temp.assignedTo ? temp.assignedTo.id : 0;
    this.model['closedBy'] = temp.closedBy ? temp.closedBy.id : 0;
    this.titleService.setTitle('CCPT-' + temp.client.name + '-' + temp.role);
    return this.model;
  }
  public propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.model.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        if (this.model.properties.length == 0) {
          this.model.properties.push(<AdditionalPropertiesModel>{ name: this.apName, value: this.apValue });
          this.apName = '';
          this.apValue = '';
        } else {
          let propertyExist: boolean;
          for (let i = 0; i < this.model.properties.length; i++) {
            if (this.model.properties[i].name == this.apName && this.model.properties[i].value == this.apValue) {
              propertyExist = true;
            } else {
              propertyExist = false;
            }
          }
          if (propertyExist) {
            this.toastr.error(this.properties.PROPERTY_EXIST, this.properties.PROPERTIES);
          } else {
            this.model.properties.push(<AdditionalPropertiesModel>{ name: this.apName, value: this.apValue });
            this.apName = '';
            this.apValue = '';
          }
        }
        break;
      }
    }
  }
  public createApplication(shortListContent) {
    for (let i = 0; i < this.consultantList.length; i++) {
      const temp = { item_id: this.consultantList[i].id, item_text: this.consultantList[i].name, notes: '' };
      this.consultantNames.push(temp);
    }
    this.open(this.model.id, shortListContent);
  }
  public onItemSelect(cl,type) {
    if(type == "email"){
      if (this.sendEmailModel.toEmails.length > 0) {
        this.sendEmailModel.toEmails += ',';
      }
      this.sendEmailModel.toEmails += cl.email;
      this.sendTo = null;
    }
    else if(type=="sms"){
      if (this.sendSmsModel.contactNumbers.length > 0) {
        this.sendSmsModel.contactNumbers += ',';
      }
      this.sendSmsModel.contactNumbers += cl.phone;
      this.sendTo = null;
    }
  }
  public emailJd(sendMailContent) {
    let temp = { cpId: this.model.id };
    this.http.post(temp, this.urlConstants.EmailTemplateBuildContent + 'Job Description').subscribe(resp => {
      this.sendEmailModel = resp as any;
      this.sendEmailModel.target = '';
      this.sendEmailModel.toEmails = '';
    });
    this.open(this.model.id, sendMailContent);
  }
  public smsJd(sendSMSContent) {
    let temp = { cpId: this.model.id };
    this.http.post(temp, this.urlConstants.SMSTemplateBuildContent + 'JobDescription').subscribe(resp => {
      this.sendSmsModel = resp as any;
      this.sendSmsModel.target = '';
      this.sendSmsModel.contactNumbers = '';
    });
    this.open(this.model.id, sendSMSContent);
  }
  public cloneData(data: any) {
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
    this.model.requiredPositions = '1';
  }
  private getRecruiterId() : any{
    const temp = sessionStorage.getItem('username');
    let id;
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        id = rl.id;
      }
    });
    return id;
  }
  public createReqClch(clientCall , resp){
    let decision = confirm(this.properties.CONFIRM_ClCH_NEW);
        if(decision== true){
          this.clchModel.cpId = resp.id
          this.open(this.model.id,clientCall)
        }
  }
  private setTodaysDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy+'-'+ mm + '-' +dd;
    return temp;
  }
  public createClientCallHistory(){
    this.creating = true;
    this.clchModel.calledBy = this.getRecruiterId()
    this.clchModel.calledDate = this.setTodaysDate();
    const temp = this.http.post(this.clchModel, this.urlConstants.CCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.CON_C_H);
        //this.create(this.cpForm);
        this.clchModel=<ClientCallHistoryModel>{};
        this.creating = false;
        this.close();
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CON_C_H);
        this.creating = false;
      }
    );
  }
  public create(clientPositionForm: NgForm ,clientCall:any): void {
    this.isCreate = true;
    this.spinner(false);
    // tslint:disable-next-line:max-line-length
    this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
    const temp = this.http.post(this.model, this.urlConstants.CPCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.CP);
        this.init();
        this.formReset();
        this.spinner(true);
        clientPositionForm.resetForm();
        this.isCreate = false;
        this.paginateConfig.currentPage=1;
        this.initialGetAll();
        this.emptyStorage();
        if (this.showAction) {
          this.showAction = false;
        }
        this.createReqClch(clientCall , resp);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CP);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  private emptyStorage() {
    this.storageService.clientId = 0;
    this.model.clientId = 0;
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
    this.spinner(false);
    this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
    const temp = this.http.update(this.model, this.urlConstants.CPUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.UPDATE, this.properties.CP);
        this.formReset();
        this.init();
        this.spinner(true);
        clientPositionForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.closedByEnable = false;
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CP);
        this.spinner(true);
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
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.CPDelete + this.selectedRecrd);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.CP);
        this.init();
        this.close();
        this.formReset();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(this.properties.DELETE, this.properties.CP);
        }
        this.spinner(true);
        this.toastr.error(err.error.message, this.properties.CP);
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
    this.spinner(false);
    this.creating = true;
    const temp = this.http.post(this.sendSmsModel, this.urlConstants.SMSTemplateSend);
    temp.subscribe(resp => {
      /**Check if any new consultants exists in emails to which send  */
      this.close();
      this.creating = false;
      this.sendSmsModel = <SendSmsModel>{};
      this.toastr.success('Sms sent successfully', 'Sent!');
      this.spinner(true);
    },
      err => {
        this.creating = false;
        this.toastr.error(err.error.message, this.properties.CP);
        this.spinner(true);
      });
  }
  public sendEmailReq(createConsultants: any): void {
    this.spinner(false);
    this.creating = true;
    const temp = this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend);
    temp.subscribe(resp => {
      /**Check if any new consultants exists in emails to which send  */
      this.close();
      this.creating = false;
      this.quickAddConsultants(createConsultants);
      this.sendEmailModel = <SendEmailModel>{};
      this.toastr.success('Email/Emails sent successfully', 'Sent!');
      this.spinner(true);
    },
      err => {
        this.creating = false;
        this.toastr.error(err.error.message, this.properties.CP);
        this.spinner(true);
      });
  }
  private quickAddConsultants(createConsultants: any) {
    this.consultantsToCreate=[];
    let newConEmails: any = [];
    let selectedEmails = this.sendEmailModel.toEmails.split(',');
    let conEmails = this.consultantList.map(cl => {
      return cl.email;
    });
    selectedEmails.forEach(ets => {
      if (conEmails.indexOf(ets) == -1 && newConEmails.indexOf(ets) == -1) {
        newConEmails.push(ets);
      }
    });
    newConEmails.forEach(element => {
      let temp = { "email": element, "gender": "", "fullname": "", "phone": "+91","conStatus":"Active" }
      this.consultantsToCreate.push(temp)
    });
    if(this.consultantsToCreate.length>0){
      this.open(this.model.id, createConsultants);
    }
  }
  public createConsultant() {
    this.spinner(false);
    this.creating = true;
    this.consultantsToCreate.forEach(consultant => {
      const temp = this.http.post(consultant, this.urlConstants.CCreate);
      temp.subscribe(
        resp => {
          this.spinner(true);
          this.creating = false;
          this.toastr.success(this.properties.CREATE, this.properties.CON);
          this.close();
        },
        err => {
          this.creating = false;
          this.toastr.error(err.error.message, this.properties.CON);
          this.spinner(true);
        }
      );
    });
  }
  public createClientApplication(data: any, clientPositionForm: NgForm) {
    // TODO:Need to check the code
    const dataToCreate = {
      cpId: this.selectedRecrd,
      consultantId: data.item_id,
      caStatus: 'NEW',
      description: data.notes,
      creatorId: this.creator
    };
    this.spinner(false);
    const temp = this.http.post(dataToCreate, this.urlConstants.CACreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.CA);
        this.init();
        this.formReset();
        clientPositionForm.resetForm();
        this.isCreate = false;
        if (this.showAction) {
          this.showAction = false;
        }
        this.shortListConsultants = [];
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.statusText, this.properties.CA);
        this.spinner(true);
      }
    );
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
    this.modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    this.modalRef.result.then(
      result => {
        this.action = null;
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.action = null;
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
  // public pageChange(event) {
  //   const from = (event - 1) * this.pageSize;
  //   const lst = this.clientPositionList;
  //   const uplst = lst.slice(from, from + this.pageSize);
  //   this.pagedCPList = uplst;
  // }
  pageChanged(event){
    this.paginateConfig.currentPage = event
    this.initialGetAll();
  }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
}
