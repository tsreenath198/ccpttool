import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { forkJoin } from 'rxjs';
import { Properties } from '../components/constants/properties';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationModel, ActionsList, SendEmailModel, SendSmsModel } from './client-application.model';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { NgForm } from '@angular/forms';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { PaymentsModel } from '../payments/payments.model';
import { StorageService, HttpClientService, ToastrCustomService } from '../../shared/services';
import { ConsultantCallHistoryModel } from '../consultant-call-history/consultant-call-history.model';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-client-application',
  templateUrl: './client-application.component.html',
  styleUrls: ['./client-application.component.scss'],
  animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
  public model: ClientApplicationModel = <ClientApplicationModel>{};
  public conchModel: ConsultantCallHistoryModel = <ConsultantCallHistoryModel>{};
  public paymentModel: PaymentsModel = <PaymentsModel>{};

  public bodyMailModel: any = <any>{};
  public clientApplicationList: Array<any> = [];
  public pagedCAList: Array<any> = [];
  public consultantList: Array<any> = [];
  public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
  public clientPositionList: Array<any> = [];
  public recruiterList: Array<any> = [];
  public urlConstants = new URLConstants();
  public properties = new Properties();
  public creating:boolean = false;

  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string;

  public currSearchTxt = '';
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public isInterviewScheduled = false;
  public showProperties = false;
  private selectedRecrd = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public screenHeight: any;
  public readOnlyForm: any = '';
  public enableButtonType: any = '';
  public download = 'download';
  public upload = 'upload';
  public uploader: FileUploader = new FileUploader({});
  public apName = '';
  public apValue = '';
  public loggedInRole: any = '';
  public comments = '';
  public isCreate: boolean = false;
  public page: number;
  public caListLength: number;
  public pageSize: number = 20;
  public cpGeneratedCode: string = '';
  public fileList: Array<any> = [];
  public appIds: Array<any> = [];
  public listReturned: boolean;
  public isCRF: boolean;
  public refType = this.properties.CA;
  public crfFile: any;
  public setPaymentGst: boolean = false;
  public setPaymentWebsite: boolean = false;
  public setPaymentBA: boolean = false;
  public caForm: NgForm;

  public sendEmailModel: SendEmailModel = <SendEmailModel>{};
  public sendSmsModel: SendSmsModel = <SendSmsModel>{};
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no'
  };

  private getAllCAS = this.http.get(this.urlConstants.CASGetAll);
  private getAllC = this.http.get(this.urlConstants.CDropdown);
  private getAllCP = this.http.get(this.urlConstants.CPDropdown);
  private getAllR = this.http.get(this.urlConstants.RDropdown);

  constructor(
    private http: HttpClientService,
    private toastr: ToastrCustomService,
    private modalService: NgbModal,
    private router: Router,
    private storageService: StorageService
  ) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
  }

  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()) {
      this.router.navigate(['/login']);
    }
    this.loggedInRole = sessionStorage.getItem('role');
    this.getAllDropdowns();
    this.init();
    this.checkStorage();
  }
  private checkStorage() {
    if (this.storageService.consultantId) {
      this.model.consultantId = this.storageService.consultantId;
    }
  }
  private init() {
    this.model.properties = [];
    this.model.files = [];
    this.model.caStatus = 'New';
    this.page = 1;
    this.isCRF = false;
    this.spinner(false);
    this.http.get(this.urlConstants.CAGetAll).subscribe(resp => {
      this.clientApplicationList = resp as any;
      this.pagedCAList = resp as any;
      this.caListLength = this.clientPositionList.length;
      this.pageChange(this.page);
      this.spinner(true);
    });
  }
  private getAllDropdowns() {
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
      this.getRecruiterId();
    });
  }
  private getRecruiterId() {
    const temp = sessionStorage.getItem('username');
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.model.creatorId = rl.id;
      }
    });
  }
  private formReset() {
    this.model = <ClientApplicationModel>{};
    this.model.properties = [];
    this.model.caStatus = 'New';
  }
  public enableFormEditable(): void {
    this.readOnlyForm = '';
    this.enableButtonType = 'U';
  }
  public setModel(id: number) {
    // this.isInterviewScheduled = true;
    this.getCAById(id);
    this.readOnlyForm = 'U';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getCAById(id: number) {
    this.spinner(false);
    const temp = this.http.get(this.urlConstants.CAGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      // tslint:disable-next-line:no-shadowed-variable
      if (this.model.interviewDate != null) {
        this.isInterviewScheduled = true;
      } else {
        this.isInterviewScheduled = false;
      }
      const crf = this.http.get(this.urlConstants.getCRF + this.model.id);
      crf.subscribe(
        resp => {
          this.crfFile = resp as any;
          if (this.crfFile != null) {
            this.isCRF = true;
          } else {
            this.isCRF = false;
          }
          this.spinner(true);
        },
        err => {
          this.toastr.error(err.error.error, err.message);
          console.log(err);
        }
      );
    });
  }
  private mapToUpdateModel(response): ClientApplicationModel {
    const temp = response;
    this.model = temp;
    this.cpGeneratedCode = temp.clientPosition.generatedCode;
    this.model['cpId'] = temp.clientPosition.id;
    this.model['consultantId'] = temp.consultant.id;
    this.model['caStatus'] = temp.status.code;
    this.model['creatorId'] = temp.creator.id;
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
  selectApplications(event, id) {
    if (event.target.checked) {
      this.appIds.push(id);
    }
    else {
      for (let i = 0; i < this.appIds.length; i++) {
        if (id == this.appIds[i]) {
          this.appIds.splice(i, 1);
        }
      }
    }
  }
  private checkUser(){
    if(this.loggedInRole != "Admin"){
      this.http.get(this.urlConstants.RLeadGetById+this.model.creatorId).subscribe(resp =>{
        let temp = resp as any;
        this.sendEmailModel.toEmails = temp.toEmails;
        this.sendEmailModel.bcc = "";
      })
    }
  }
  sendIds(Ids: any, sendMailContent: any) {
    this.spinner(false);
    const temp = this.http.post(Ids, this.urlConstants.EmailGetClientApps);
    temp.subscribe(resp => {
      this.sendEmailModel = resp as any;
      this.spinner(true);
      this.appIds = [];
      this.checkUser();
      this.open(0, sendMailContent);
    },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      })
  }
  public getInterviewDetailsEmail(id, sendMailContent) {
    this.spinner(false);
    const temp = this.http.post(id, this.urlConstants.GetInterviewDetailsEmail);
    temp.subscribe(resp => {
      this.sendEmailModel = resp as any;
      this.spinner(true);
      this.appIds = [];
      this.open(0, sendMailContent);
    },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      })
  }
  public getInterviewDetailsSms(id, sendSmsContent) {
    this.spinner(false);
    let reqId = {"caId" : id}
    const temp = this.http.post(reqId, this.urlConstants.SMSTemplateBuildContent+"ClientInterviewConfirmation");
    temp.subscribe(resp => {
      this.sendSmsModel = resp as any;
      this.spinner(true);
      this.open(0, sendSmsContent);
    },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      })
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
  createAll(form,consultantCall){
    this.open(this.model.id,consultantCall);
    this.caForm = form
  }
  public createConCallHistory(){
    
    this.creating = true;
    this.conchModel.calledBy = this.model.creatorId;
    this.conchModel.consultantId = this.model.consultantId;
    this.conchModel.cpId = this.model.cpId;
    this.conchModel.calledDate = this.setTodaysDate();
    const temp = this.http.post(this.conchModel, this.urlConstants.CoCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.CON_C_H);
        this.create(this.caForm);
        this.conchModel=<ConsultantCallHistoryModel>{};
        this.creating = false;
        this.close();
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CON_C_H);
        this.creating = false;
      }
    );
  }
  public create(clientApplicationForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    const temp = this.http.post(this.model, this.urlConstants.CACreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.CA);
        this.init();
        this.formReset();
        clientApplicationForm.resetForm();
        this.spinner(true);
        this.isCreate = false;
        this.getRecruiterId();
        this.emptyStorage();
      },
      err => {
        this.toastr.error(err.error.message,  this.properties.CA);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  private emptyStorage() {
    this.storageService.consultantId = 0;
    this.model.consultantId = 0;
  }
  public dblSetModel(data) {
    this.isInterviewScheduled = true;
    this.model = JSON.parse(JSON.stringify(data));
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action = null;
  }
  public update(clientApplicationForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.CAUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.UPDATE, this.properties.CA);
        this.formReset();
        this.init();
        clientApplicationForm.resetForm();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.getRecruiterId();
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
      }
    );
    this.formReset();
  }

  public cancelForm(clientApplicationForm: NgForm) {
    clientApplicationForm.resetForm();
    this.init();
    this.formReset();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
    this.getRecruiterId();
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.CADelete + this.selectedRecrd);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.CA);
        this.init();
        this.close();
        this.formReset();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.getRecruiterId();
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(this.properties.DELETE, this.properties.CA);
        }
        this.spinner(true);
        this.toastr.error(err.error.message, this.properties.CA);
      }
    );
  }
  public sendEmailReq(): void {
    this.spinner(false);
    this.sendEmailModel.target = "";
    const temp = this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend);
    temp.subscribe(resp => {
      this.sendEmailModel = <SendEmailModel>{};
      this.toastr.success('Email/Emails sent successfully', this.properties.CA);
      this.close();
      this.spinner(true);
    },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
      });
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  public open(event: any, content) {
    this.selectedRecrd = 0;
    if (event) {
      this.selectedRecrd = event;
    }
    this.modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  /**Download file */
  public downloadFile(id: number) {
    this.http.get(this.urlConstants.FileDownload + id).subscribe(
      resp => { },
      err => {
        if (err.status == 200) window.open(err.url);
      }
    );
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
  /** Get Uploaded files */
  private getFiles(): FileLikeObject[] {
    return this.uploader.queue.map(fileItem => {
      return fileItem.file;
    });
  }
  public uploadCRF(content) {
    this.refType = 'crf';
    this.open(this.model.id, content);
  }
  /** Upload documents of respective consultant */
  public uploadFiles() {
    const files = this.getFiles();
    const formData = new FormData();
    formData.append('file', files[0].rawFile, files[0].name);
    if (this.refType = 'crf') {
      const params = this.selectedRecrd + '&comments=' + this.comments;
      this.http.upload(this.urlConstants.saveCRF + params, formData).subscribe(
        resp => {
          let temp: any = resp;
          this.comments = "";
          this.toastr.success(temp.message, this.properties.CLIENT);
          this.getCAById(this.model.id);
          this.refType = this.properties.CA;
          this.close();
        },
        err => {
          this.toastr.error(err.error.message, this.properties.CLIENT);
        }
      );
    }
    else {
      const params = 'refId=' + this.selectedRecrd + '&refType=' + this.refType + '&comments=' + this.comments;
      this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(
        resp => {
          let temp: any = resp;
          this.toastr.success(temp.message, this.properties.CLIENT);
          this.close();
        },
        err => {
          this.toastr.error(err.error.message, this.properties.CLIENT);
        }
      );
    }
  }
  public pageChange(event) {
    const from = (event - 1) * this.pageSize;
    const lst = this.clientApplicationList;
    const uplst = lst.slice(from, from + this.pageSize);
    this.pagedCAList = uplst;
  }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  public setLocation(id) {

  }
  public checkInterviewSchedule() {
    if (this.isInterviewScheduled) {
      this.model.interviewMode = this.properties.F2F;
      this.clientPositionList.forEach(cl => {
        if (cl.id == this.model.cpId) {
          let location = cl.name.split("-")
          this.model.interviewLocation = location[2];
        }
      })
    }
    else {
      this.model.interviewDate = "";
      this.model.interviewLocation = "";
      this.model.interviewTime = "";
      this.model.interviewMode = "";
    }
  }
  public setPaymentModel(model, createPayment) {
    this.paymentModel.invoiceDate = this.setTodaysDate()
    this.paymentModel.companyName = model.clientPosition.client.name;
    if (model.clientPosition.client.website != null) {
      this.paymentModel.companyWebsite = model.clientPosition.client.website;
      this.setPaymentWebsite = false;
    }
    else {
      this.setPaymentWebsite = true;
    }
    if (model.clientPosition.client.gst != null) {
      this.paymentModel.companyGstNum = model.clientPosition.client.gst;
      this.setPaymentGst = false;
    }
    else {
      this.setPaymentGst = true;
    }
    if (model.clientPosition.client.billingAddress != null) {
      this.paymentModel.billingAddress = model.clientPosition.client.billingAddress;
      this.setPaymentBA = false;
    }
    else {
      this.setPaymentBA = true;
    }
    this.paymentModel.companyGstNum = model.clientPosition.client.gst;
    this.paymentModel.creditPeriod = model.clientPosition.client.creditPeriod;
    this.paymentModel.gauranteePeriod = model.clientPosition.client.guaranteePeriod;
    this.paymentModel.contactPerson = model.clientPosition.client.clientContacts[0].fullname;
    this.paymentModel.contactPersonNum = model.clientPosition.client.clientContacts[0].phone;
    this.paymentModel.contactPersonEmail = model.clientPosition.client.clientContacts[0].email;
    this.paymentModel.designation = model.clientPosition.role;
    this.paymentModel.serviceCharge = model.clientPosition.client.serviceCharge;
    this.paymentModel.candidateName = model.consultant.fullname;
    this.paymentModel.phone = this.properties.PHONE;
    this.paymentModel.branchHeadName = this.properties.HEAD;
    this.paymentModel.branchLocation = this.properties.LOCATION;
    this.open(model.id, createPayment);
  }
  private setTodaysDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy+'-'+ mm + '-' +dd;
    return temp;
  }
  public createPaymentForm(form: NgForm) {
    this.spinner(false);
    const temp = this.http.post(this.paymentModel, this.urlConstants.PaymentCreate);
    temp.subscribe(resp => {
      this.toastr.success(this.properties.CREATE, this.properties.PAYMENT);
      form.resetForm();
      this.close();
      this.spinner(true);
    }, err => {
      this.toastr.error(err.error.message, this.properties.PAYMENT);
      this.spinner(true);
    });
  }
}