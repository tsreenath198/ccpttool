import { Component, OnInit, HostListener } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { forkJoin } from "rxjs";
import { Properties } from "../components/constants/properties";
import { URLConstants } from "../components/constants/url-constants";
import {
  ClientApplicationModel,
  SendEmailModel,
  SendSmsModel,
  FAQModel
} from "./client-application.model";
import { ClientApplicationStatusModel } from "../client-application-status/client-application-status.model";
import { NgForm } from "@angular/forms";
import {
  NgbModalRef,
  ModalDismissReasons,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { FileUploader, FileLikeObject } from "ng2-file-upload";
import { Router } from "@angular/router";
import { PaymentsModel } from "../payments/payments.model";
import {
  StorageService,
  HttpClientService,
  ToastrCustomService
} from "../../shared/services";
import { ConsultantCallHistoryModel } from "../consultant-call-history/consultant-call-history.model";

@Component({
  selector: "app-client-application",
  templateUrl: "./client-application.component.html",
  styleUrls: ["./client-application.component.scss"],
  animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
  public model: ClientApplicationModel = <ClientApplicationModel>{};
  public faqModel: FAQModel = <FAQModel>{};
  public conchModel: ConsultantCallHistoryModel = <
    ConsultantCallHistoryModel
    >{};
  public paymentModel: PaymentsModel = <PaymentsModel>{};
  public bodyMailModel: any = <any>{};
  public clientApplicationList: any = [];
  public pagedCAList: Array<any> = [];
  public consultantList: Array<any> = [];
  public clientList: Array<any> = [];
  public clientApplicationStatusList: Array<any> = [];
  public clientPositionList: Array<any> = [];
  public recruiterList: Array<any> = [];
  public urlConstants = new URLConstants();
  public properties = new Properties();
  public creating: boolean = false;
  public interviewMode = [
    { key: "Face to Face", value: "F2F" },
    { key: "Telephone", value: "TEL" },
    { key: "Video Call", value: "VID" }
  ];
  public searchStatusType = ["Active", "Inactive"];
  public showAction: boolean = false;
  public tabCheck: string;
  public currSearch = { client: 0, clientPos: 0, status: "Active", key: null };
  public searchCon = "";
  public searchConsultantList: any = [];
  public isSerach: boolean = false;
  public searchCp: any;
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public showProperties = false;
  private selectedRecrd = 0;
  public closeResult = "";
  private modalRef: NgbModalRef;
  public screenHeight: any;
  public readOnlyForm: any = "";
  public enableButtonType: any = "";
  public download = "download";
  public upload = "upload";
  public uploader: FileUploader = new FileUploader({});
  public apName = "";
  public apValue = "";
  public loggedInRole: any = "";
  public comments = "";
  public isCreate: boolean = false;
  public page: number;
  public caListLength: number;
  public pageSize: number = 20;
  public cpGeneratedCode: string = "";
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
  public clientId: number;
  public consultantId: number;
  public keyword = "name";
  public selectedCPToSearch: number = -1;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    translate: "no"
  };
  public paginateConfig: any = {
    itemsPerPage: 0,
    currentPage: 0,
    totalItems: 0
  };
  private getAllCAS = this.http.get(
    this.urlConstants.CASGetAll + "0&pageSize=20&sortBy=id"
  );
  private getAllC = this.http.get(this.urlConstants.CDropdown);
  private getAllCP = this.http.get(this.urlConstants.CPDropdown);
  private getAllR = this.http.get(this.urlConstants.RDropdown);
  private getAllCl = this.http.get(this.urlConstants.ClientDropdown);

  constructor(
    private http: HttpClientService,
    private toastr: ToastrCustomService,
    private modalService: NgbModal,
    private router: Router,
    private storageService: StorageService
  ) {
    this.getScreenSize();
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
  }

  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()) {
      this.router.navigate(["/login"]);
    }
    this.loggedInRole = sessionStorage.getItem("role");
    this.getAllDropdowns();
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.init();
    this.checkIsConsultantExist();
    this.initialGetAll();
    this.spinner(true);
  }

  private paginateConfigDeclare(itemsPerPage, currentPage, totalItems) {
    (this.paginateConfig.itemsPerPage = itemsPerPage),
      (this.paginateConfig.currentPage = currentPage),
      (this.paginateConfig.totalItems = totalItems);
  }

  /**Checks if storage service have any saved consultants */
  private checkIsConsultantExist() {
    if (this.storageService.consultantId) {
      this.model.consultantId = this.storageService.consultantId;
    }
  }

  private init() {
    this.model.properties = [];
    this.faqModel.questions = [""];
    this.model.files = [];
    this.model.caStatus = "New";
    this.page = 1;
    this.isCRF = false;
  }

  public initialGetAll() {
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.CAGetAllByStatus +
      pageNumber +
      "&pageSize=50&sortBy=id&status=Active"
    );
    temp.subscribe(resp => {
      this.clientApplicationList = resp as any;
      //this.pageChange(this.page);
      this.paginateConfig.totalItems = this.clientApplicationList.noOfRecords;
      this.tabCheck = "Active CA";
    });
  }

  private getAllDropdowns() {
    forkJoin(
      this.getAllCAS,
      this.getAllC,
      this.getAllCP,
      this.getAllR,
      this.getAllCl
      // forkJoin on works for observables that complete
    ).subscribe(listofrecords => {
      this.clientApplicationStatusList = listofrecords[0] as any;
      this.consultantList = listofrecords[1] as any;
      this.clientPositionList = listofrecords[2] as any;
      this.recruiterList = listofrecords[3] as any;
      this.clientList = listofrecords[4] as any;
      this.getRecruiterId();
      this.searchCp = this.clientPositionList;
    });
  }

  private getRecruiterId() {
    const temp = sessionStorage.getItem("username");
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.model.creatorId = rl.id;
      }
    });
  }

  private formReset() {
    this.model = <ClientApplicationModel>{};
    this.model.properties = [];
    this.model.caStatus = "New";
  }

  public enableFormEditable(): void {
    this.readOnlyForm = "";
    this.enableButtonType = "U";
  }

  public setModel(id: number) {
    this.getCAById(id);
    this.readOnlyForm = "U";
    this.enableButtonType = "E";
    this.showAction = true;
  }

  private getCAById(id: number) {
    this.spinner(false);
    const temp = this.http.get(this.urlConstants.CAGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
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

  selectEvent(item) {
    // do something with selected item
    this.model.cpId = item.id;
    console.log("1", item);
  }

  onChangeSearch(val: string) {
    console.log("2", val);
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    console.log("3", e);
    // do something when input is focused
  }

  private mapToUpdateModel(response): ClientApplicationModel {
    const temp = response;
    let consultant = {
      name: temp.consultant.fullname,
      id: temp.consultant.id,
      phone: temp.consultant.phone,
      email: temp.consultant.email
    };
    this.consultantList.push(consultant);
    this.model = temp;
    this.cpGeneratedCode = temp.clientPosition.generatedCode;
    this.model["cpId"] = temp.clientPosition.id;
    this.model["consultantId"] = temp.consultant.id;
    this.model["caStatus"] = temp.status.code;
    this.model["creatorId"] = temp.creator.id;
    return this.model;
  }

  public faqListIncrement(event, i: number) {
    switch (event.id) {
      case "decrease": {
        this.faqModel.questions.splice(i, 1);
        break;
      }
      case "increase": {
        this.faqModel.questions.push("");
        break;
      }
    }
  }

  public propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case "decrease": {
        this.model.properties.splice(i, 1);
        break;
      }
      case "increase": {
        if (this.model.properties == null) {
          this.model.properties = [];
          this.model.properties.push(<AdditionalPropertiesModel>{
            name: this.apName,
            value: this.apValue
          });
          this.apName = "";
          this.apValue = "";
        } else if (this.model.properties.length == 0) {
          this.model.properties.push(<AdditionalPropertiesModel>{
            name: this.apName,
            value: this.apValue
          });
          this.apName = "";
          this.apValue = "";
        } else {
          let propertyExist: boolean;
          for (let i = 0; i < this.model.properties.length; i++) {
            if (
              this.model.properties[i].name == this.apName &&
              this.model.properties[i].value == this.apValue
            ) {
              propertyExist = true;
            } else {
              propertyExist = false;
            }
          }
          if (propertyExist) {
            this.toastr.error(
              this.properties.PROPERTY_EXIST,
              this.properties.PROPERTIES
            );
          } else {
            this.model.properties.push(<AdditionalPropertiesModel>{
              name: this.apName,
              value: this.apValue
            });
            this.apName = "";
            this.apValue = "";
          }
        }
        break;
      }
    }
  }

  public onSelectApplication(event, id: number, type: string) {
    if (event.target.checked) {
      if (type === "single") this.appIds.push(id);
      else this.appIds = this.clientApplicationList.list.map(r => r.id);
    } else {
      if (type === "single")
        for (let i = 0; i < this.appIds.length; i++) {
          if (id == this.appIds[i]) {
            this.appIds.splice(i, 1);
          }
        }
      else this.appIds = [];
    }
  }

  private checkUser() {
    if (this.loggedInRole != "Admin") {
      this.http
        .get(this.urlConstants.RLeadGetById + this.model.creatorId)
        .subscribe(resp => {
          let temp = resp as any;
          this.sendEmailModel.toEmails = temp.toEmails;
          this.sendEmailModel.bcc = "";
        });
    }
  }

  public mailSelectedApplications(Ids: any, sendMailContent: any, type: any) {
    this.spinner(false);
    let temp;
    if (type == "interviewSchedule") {
      temp = this.http.post(Ids, this.urlConstants.EmailGetShortlistCA);
    } else if (type == "shortlistedCandidates") {
      temp = this.http.post(Ids, this.urlConstants.EmailGetClientApps);
    } else if (type == "statusVerification") {
      temp = this.http.post(Ids, this.urlConstants.EmailGetReqUpdate);
    }
    temp.subscribe(
      resp => {
        this.sendEmailModel = resp as any;
        this.spinner(true);
        this.appIds = [];
        this.selectedCPToSearch = -1;
        this.checkUser();
        this.open(0, sendMailContent);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      }
    );
  }
  public getInterviewDetailsEmail(id, sendMailContent) {
    this.spinner(false);
    const temp = this.http.post(id, this.urlConstants.GetInterviewDetailsEmail);
    temp.subscribe(
      resp => {
        this.sendEmailModel = resp as any;
        this.spinner(true);
        this.appIds = [];
        this.open(0, sendMailContent);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      }
    );
  }
  public getInterviewDetailsSms(id, sendSmsContent) {
    this.spinner(false);
    let reqId = { caId: id };
    const temp = this.http.post(
      reqId,
      this.urlConstants.SMSTemplateBuildContent + "ClientInterviewConfirmation"
    );
    temp.subscribe(
      resp => {
        this.sendSmsModel = resp as any;
        this.spinner(true);
        this.open(0, sendSmsContent);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
        this.appIds = [];
      }
    );
  }
  public createFAQ() {
    this.creating = true;
    const temp = this.http.post(
      this.faqModel,
      this.urlConstants.FAQSaveInCA +
      this.model.id +
      "&userId=" +
      this.model.creatorId
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.FAQ);
        this.faqModel = <FAQModel>{};
        this.creating = false;
        this.close();
      },
      err => {
        this.creating = false;
        this.toastr.error(err.error.message, this.properties.FAQ);
      }
    );
  }
  public sendSmsReq(): void {
    this.spinner(false);
    this.creating = true;
    const temp = this.http.post(
      this.sendSmsModel,
      this.urlConstants.SMSTemplateSend
    );
    temp.subscribe(
      resp => {
        /**Check if any new consultants exists in emails to which send  */
        this.close();
        this.creating = false;
        this.sendSmsModel = <SendSmsModel>{};
        this.toastr.success("Sms sent successfully", "Sent!");
        this.spinner(true);
      },
      err => {
        this.creating = false;
        this.toastr.error(err.error.message, this.properties.CP);
        this.spinner(true);
      }
    );
  }

 /* createAll(form, consultantCall) {
    this.open(this.model.id, consultantCall);
    this.caForm = form;
  }
  public createConCallHistory() {
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
        this.conchModel = <ConsultantCallHistoryModel>{};
        this.creating = false;
        this.close();
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CON_C_H);
        this.creating = false;
      }
    );
  }*/

  public create(clientApplicationForm: NgForm): void {
    debugger
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
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        this.getRecruiterId();
        this.emptyStorage();
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
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
    this.model = JSON.parse(JSON.stringify(data));
    this.readOnlyForm = "U";
    this.enableButtonType = "U";
    this.showAction = true;
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
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        if (!this.isSerach) {
          this.initialGetAll();
        }
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
    this.readOnlyForm = "";
    this.enableButtonType = "";
    this.showAction = false;
    this.getRecruiterId();
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(
      this.urlConstants.CADelete + this.selectedRecrd
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.CA);
        this.init();
        this.close();
        this.formReset();
        this.initialGetAll();
        this.spinner(true);
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.getRecruiterId();
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(
            this.properties.DELETE,
            this.properties.CA
          );
        }
        this.spinner(true);
        this.toastr.error(err.error.message, this.properties.CA);
      }
    );
  }
  public sendEmailReq(): void {
    this.spinner(false);
    this.sendEmailModel.target = "";
    const temp = this.http.post(
      this.sendEmailModel,
      this.urlConstants.EmailTemplateSend
    );
    temp.subscribe(
      resp => {
        this.sendEmailModel = <SendEmailModel>{};
        this.toastr.success(
          "Email/Emails sent successfully",
          this.properties.CA
        );
        this.close();
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
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
    this.selectedRecrd = 0;
    if (event) {
      this.selectedRecrd = event;
    }
    this.modalRef = this.modalService.open(content, {
      size: "lg",
      backdrop: "static"
    });
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
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
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
    this.refType = "crf";
    this.open(this.model.id, content);
  }
  public deleteCRF(id) {
    let temp = this.http
      .delete(this.urlConstants.FileDelete + id)
      .subscribe(resp => {
        const crf = this.http.get(this.urlConstants.getCRF + this.model.id);
        crf.subscribe(
          resp => {
            this.crfFile = resp as any;
            if (this.crfFile != null) {
              this.isCRF = true;
            } else {
              this.isCRF = false;
            }
          },
          err => {
            this.toastr.error(err.error.error, err.message);
            console.log(err);
          }
        );
      });
  }
  /** Upload documents of respective consultant */
  public uploadFiles() {
    const files = this.getFiles();
    const formData = new FormData();
    formData.append("file", files[0].rawFile, files[0].name);
    if ((this.refType = "crf")) {
      const params = this.selectedRecrd + "&comments=" + this.comments;
      this.http.upload(this.urlConstants.saveCRF + params, formData).subscribe(
        resp => {
          let temp: any = resp;
          this.comments = "";
          this.uploader = new FileUploader({});
          this.toastr.success(temp.message, this.properties.CLIENT);
          this.getCAById(this.model.id);
          this.refType = this.properties.CA;
          this.close();
        },
        err => {
          this.toastr.error(err.error.message, this.properties.CLIENT);
        }
      );
    } else {
      const params =
        "refId=" +
        this.selectedRecrd +
        "&refType=" +
        this.refType +
        "&comments=" +
        this.comments;
      this.http
        .upload(this.urlConstants.FileUpload + params, formData)
        .subscribe(
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
  // public pageChange(event) {
  //   const from = (event - 1) * this.pageSize;
  //   const lst = this.clientApplicationList;
  //   const uplst = lst.slice(from, from + this.pageSize);
  //   this.pagedCAList = uplst;
  // }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  public setCP(value) {
    this.model.cpId = value.id;
  }
  public checkInterviewSchedule() {
    if (this.model.caStatus == "Interview Scheduled") {
      this.model.interviewMode = this.properties.F2F;
      this.clientPositionList.forEach(cl => {
        if (cl.id == this.model.cpId) {
          let location = cl.name.split("-");
          this.model.interviewLocation = location[2];
        }
      });
    } else {
      this.model.interviewDate = "";
      this.model.interviewLocation = "";
      this.model.interviewTime = "";
      this.model.interviewMode = "";
    }
  }
  public setPaymentModel(model, createPayment) {
    this.paymentModel.invoiceDate = this.setTodaysDate();
    this.paymentModel.companyName = model.clientPosition.client.name;
    if (model.clientPosition.client.website != null) {
      this.paymentModel.companyWebsite = model.clientPosition.client.website;
      this.setPaymentWebsite = false;
    } else {
      this.setPaymentWebsite = true;
    }
    if (model.clientPosition.client.gst != null) {
      this.paymentModel.companyGstNum = model.clientPosition.client.gst;
      this.setPaymentGst = false;
    } else {
      this.setPaymentGst = true;
    }
    if (model.clientPosition.client.billingAddress != null) {
      this.paymentModel.billingAddress =
        model.clientPosition.client.billingAddress;
      this.setPaymentBA = false;
    } else {
      this.setPaymentBA = true;
    }
    this.paymentModel.companyGstNum = model.clientPosition.client.gst;
    this.paymentModel.creditPeriod = model.clientPosition.client.creditPeriod;
    this.paymentModel.gauranteePeriod =
      model.clientPosition.client.guaranteePeriod;
    this.paymentModel.contactPerson =
      model.clientPosition.client.contactPersonName;
    this.paymentModel.contactPersonNum = model.clientPosition.client.phone;
    this.paymentModel.contactPersonEmail = model.clientPosition.client.email;
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
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy + "-" + mm + "-" + dd;
    return temp;
  }
  public createPaymentForm(form: NgForm) {
    this.spinner(false);
    const temp = this.http.post(
      this.paymentModel,
      this.urlConstants.PaymentCreate
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.PAYMENT);
        form.resetForm();
        this.close();
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.PAYMENT);
        this.spinner(true);
      }
    );
  }
  public pageChanged(event) {
    this.paginateConfig.currentPage = event;
    this.initialGetAll();
  }
  public searchSelect() {
    this.isSerach = true;
  }
  public filterSearchCp() {
    this.isSerach = true;
    this.searchCp = [];
    this.currSearch.clientPos = 0;
    let temp1: any = this.clientList.filter(
      cl => cl.id == this.currSearch.client
    );
    if (this.currSearch.client != -1) {
      this.clientPositionList.filter(cpl => {
        let temp = cpl.name.split(/\-/, 1);
        if (temp1[0].name == temp) {
          this.searchCp.push(cpl);
        }
      });
    }
  }

  /**?clientId=1&clientPosId=2&status=1&searchKey=ff */

  public generateSearchParams() {
    let url = this.urlConstants.CASearch;
    if (this.currSearch.client != 0 && this.currSearch.client != -1) {
      let temp = "clientId=" + this.currSearch.client;
      url = url + temp;
    }
    if (this.currSearch.clientPos != 0 && this.currSearch.clientPos != -1) {
      let temp = "&clientPosId=" + this.currSearch.clientPos;
      url = url + temp;
    }
    if (this.currSearch.status != null && this.currSearch.status != "-1") {
      let temp = "&statusType=" + this.currSearch.status;
      url = url + temp;
    }
    if (this.currSearch.key != null) {
      let temp = "&searchKey=" + this.currSearch.key;
      url = url + temp;
    }
    this.search(url);
  }
  public search(url) {
    this.paginateConfig.currentPage = 1;
    let temp = this.http.get(url);
    temp.subscribe(resp => {
      this.clientApplicationList.list = resp as any;
      this.paginateConfigDeclare(
        this.clientApplicationList.list.length,
        1,
        this.clientApplicationList.list.length
      );
      this.selectedCPToSearch = this.currSearch.client;
    });
  }
  public cancelSearch() {
    this.isSerach = false;
    this.searchCp = this.clientPositionList;
    this.currSearch = { client: 0, clientPos: 0, status: "Active", key: null };
    this.initialGetAll();
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
  }

  public showActive() {
    if (this.tabCheck != "Active CA") {
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    }
    this.initialGetAll();
  }

  public showInactive() {
    if (this.tabCheck != "Inactive CA") {
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    }
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.CAGetAllByStatus +
      pageNumber +
      "&pageSize=50&sortBy=id&status=Inactive"
    );
    temp.subscribe(resp => {
      this.clientApplicationList = resp as any;
      this.paginateConfig.totalItems = this.clientApplicationList.noOfRecords;
      this.tabCheck = "Inactive CA";
    });
  }

  public showAll() {
    if (this.tabCheck != "All CA") {
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    }
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.CAGetAll + pageNumber + "&pageSize=50&sortBy=id"
    );
    temp.subscribe(resp => {
      this.clientApplicationList = resp as any;
      this.paginateConfig.totalItems = this.clientApplicationList.noOfRecords;
      this.tabCheck = "All CA";
    });
  }
  public popupSearchConsultant() {
    if (this.searchCon.length > 2) {
      let request = this.http.get(this.urlConstants.CSearch + this.searchCon);
      request.subscribe(resp => {
        this.searchConsultantList = resp as any;
      });
    } else if (this.searchCon.length == 0) {
      this.searchConsultantList = [];
    }
  }
  public openSearchCon(value: any, content: any) {
    if (value == "more") {
      this.searchConsultantList = [];
      this.open(this.model.id, content);
    }
  }
  public setSearch(data) {
    let temp = {
      name: data.fullname,
      id: data.id,
      phone: data.phone,
      email: data.email
    };
    this.consultantList.push(temp);
    this.model.consultantId = data.id;
    this.close();
  }
  public dateChange() {
    this.model.interviewMode = " ";
  }
}
