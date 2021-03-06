import { Component, OnInit, HostListener } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { FileUploader, FileLikeObject } from "ng2-file-upload";
import { NgForm } from "@angular/forms";
import { routerTransition } from "../../router.animations";
import {
  ConsultantModel,
  ActionsList,
  AdvanceSearchModel
} from "./consultant.model";
import { ConsultantStatusModel } from "../consultant-status/consultant-status.model";
import { URLConstants } from "../components/constants/url-constants";
import { Properties } from "../components/constants/properties";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";
import { Router } from "@angular/router";
import {
  StorageService,
  HttpClientService,
  ToastrCustomService
} from "../../shared/services";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.scss"],
  animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
  public model: ConsultantModel = <ConsultantModel>{};
  public consultantList: any = [];
  public pagedConsultantList: Array<ConsultantModel> = [];
  public consultantStatusList: Array<ConsultantStatusModel> = [];
  public formButtonsToggler = true;
  public readOnlyForm = "";
  public enableButtonType = "";
  public GENDER = [
    { key: "Mr.", value: "Male" },
    { key: "Mrs.", value: "Female" }
  ];
  public uploadFileList: Array<any> = [];
  public fileList: Array<any> = [];
  public refType = "";
  public comments = "";
  public isFresher: boolean;
  public uploader: FileUploader = new FileUploader({});
  private selectedRecrdToDel = 0;
  public closeResult = "";
  public download = "download";
  public upload = "upload";
  public apName = "";
  public apValue = "";
  public screenHeight: any;
  private modalRef: NgbModalRef;
  public listReturned: boolean;
  public urlConstants = new URLConstants();
  public properties = new Properties();
  public advanceSearchModel: AdvanceSearchModel = <AdvanceSearchModel>{};

  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string;
  public inCon: boolean = true;
  public isCreate: boolean = false;
  public currSearchTxt: string;
  public idToActivate: number;
  public page: number;
  public consultantListLength: number;
  public pageSize: number = 20;
  public cSGetAllPromise = this.http.get(this.urlConstants.CSGetAll);
  public cGetAllPromise = this.http.get(this.urlConstants.CGetAll);
  public paginateConfig: any = {
    itemsPerPage: 0,
    currentPage: 0,
    totalItems: 0
  };
  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal,
    private storage: StorageService
  ) {
    this.getScreenSize();
  }
  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    /* Here we are decreasing screenheight to 237 for pagination */
    this.screenHeight = window.innerHeight - 237;
  }
  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()) {
      this.router.navigate(["/login"]);
    }
    this.cSGetAllPromise.subscribe(resp => {
      this.consultantStatusList = resp as any;
    });
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.init();
    this.initialGetAll();
    this.spinner(true);
    /**Emptying the consultantId in storage */
    this.storage.consultantId = null;
  }
  private paginateConfigDeclare(itemsPerPage, currentPage, totalItems) {
    (this.paginateConfig.itemsPerPage = itemsPerPage),
      (this.paginateConfig.currentPage = currentPage),
      (this.paginateConfig.totalItems = totalItems);
  }
  public initialGetAll() {
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.CGetAllByStatus +
        pageNumber +
        "&pageSize=50&sortBy=id&status=Active"
    );
    temp.subscribe(resp => {
      this.consultantList = resp as any;
      this.consultantList.list.forEach(cl => {
        if (
          this.validate(cl.fullname) &&
          this.validate(cl.email) &&
          this.validate(cl.phone)
        ) {
          cl["isProfileCompleted"] = "profileComplete";
        } else {
          cl["isProfileCompleted"] = "profileInComplete";
        }
      });
      this.paginateConfig.totalItems = this.consultantList.noOfRecords;
    });
  }
  init(): void {
    // this.spinner(false);
    // this.cGetAllPromise.subscribe(resp => {
    //   this.consultantList = resp as any;
    //   this.consultantList.forEach(cl => {
    //     if (this.validate(cl.fullname) && this.validate(cl.email) && this.validate(cl.phone)) {
    //       cl['isProfileCompleted'] = 'profileComplete';
    //     }
    //     else {
    //       cl['isProfileCompleted'] = 'profileInComplete';
    //     }
    //   });
    //   this.pageChange(this.page);
    //   this.spinner(true);
    // });
    this.model.properties = [];
    this.model.files = [];
    this.model.conStatus = "Active";
    this.model.phone = "+91 ";
    this.model.sourcedFrom = this.properties.CON_SOURCE[0];
    this.page = 1;
  }
  private validate(value: any): boolean {
    const bool = value ? true : false;
    return bool;
  }
  private validateFile(value: any): boolean {
    if (value == null) {
      return false;
    } else {
      return true;
    }
  }
  defaultValues() {
    this.model.properties = [];
    this.model.conStatus = "Active";
    this.model.phone = "+91";
  }
  public setModel(id: number) {
    this.getConsultantById(id);
    this.readOnlyForm = "U";
    this.enableButtonType = "E";
    this.showAction = true;
    this.action = null;
  }
  public enableFormEditable(): void {
    this.readOnlyForm = "";
    this.enableButtonType = "U";
  }
  private formReset() {
    this.model = <ConsultantModel>{};
    this.model.properties = [];
    this.model.files = [];
    this.model.conStatus = "Active";
    this.model.phone = "+91";
  }
  public create(consultantForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    const temp = this.http.post(this.model, this.urlConstants.CCreate);
    temp.subscribe(
      resp => {
        this.spinner(true);
        this.isCreate = false;
        this.toastr.success(this.properties.CREATE, this.properties.CON);
        consultantForm.resetForm();
        this.init();
        this.formReset();
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        /**Creation of client application */
        this.createCA(resp);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CON);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  private createCA(resp: any) {
    let decision = confirm(this.properties.CONFIRM_CA_NEW);
    if (decision == true) {
      /**Assigning consultant id to the storage consultant */
      this.storage.consultantId = resp.id;
      this.router.navigate(["/layout/client-application"]);
    }
  }
  public update(consultantForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.CUpdate);
    temp.subscribe(
      resp => {
        consultantForm.resetForm();
        this.toastr.success(this.properties.UPDATE, this.properties.CON);
        this.formReset();
        this.init();
        this.initialGetAll();
        this.spinner(true);
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.statusText, this.properties.CON);
        this.spinner(true);
      }
    );
  }
  private getConsultantById(id: number) {
    const temp = this.http.get(this.urlConstants.CGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      if (this.model.properties == null) {
        this.model.properties = [];
      }
      if (
        this.model.currentCompany == "" ||
        this.model.currentCompany == null
      ) {
        this.isFresher = true;
      }
    });
  }
  public getFilesById(id: number) {
    this.http.get("/uploadFile/id?id=" + id).subscribe(resp => {
      this.fileList.push(resp);
    });
  }
  public cancelForm(consultantForm: NgForm) {
    consultantForm.resetForm();
    this.init();
    this.formReset();
    this.readOnlyForm = "";
    this.enableButtonType = "";
    this.showAction = false;
    this.defaultValues();
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(
      this.urlConstants.CDelete + this.selectedRecrdToDel
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.CON);
        this.init();
        this.close();
        this.formReset();
        this.initialGetAll();
        this.spinner(true);
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(
            this.properties.DELETE,
            this.properties.CON
          );
        }
        this.toastr.error(err.statusText, this.properties.CON);
        this.spinner(true);
      }
    );
  }
  public trashFile(id: number, con: ConsultantModel) {
    const temp = this.http.delete(this.urlConstants.FileDelete + id);
    /** Delete the loop code once it fix with Backend API */
    this.model.files.forEach(f => {
      if (f.id === id) {
        let ind = this.model.files.indexOf(f);
        this.model.files.splice(ind, 1);
      }
    });
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.CON);
      },
      err => {
        if (err.status === 200) {
          return this.toastr.success(
            this.properties.DELETE,
            this.properties.CON
          );
        }
        this.toastr.error(err.statusText, this.properties.CON);
      }
    );
  }
  private mapToUpdateModel(response): ConsultantModel {
    const temp = response;
    this.model = temp;
    this.model["conStatus"] = temp.status.code;
    return this.model;
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
  public imposeMinMax(el) {
    if (el.value !== "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }
  public activateId() {
    const id = this.idToActivate;
    const temp = this.http.get(this.urlConstants.CActivate + id);
    temp.subscribe(resp => {
      this.toastr.success(this.properties.ACTIVATED, this.properties.CON);
      this.init();
    });
  }
  public transformTitleCase(ip: HTMLInputElement) {
    let temp =
      ip.value.length === 0
        ? ""
        : ip.value.replace(
            /\w\S*/g,
            txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()
          );
    ip.value = temp;
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  public open(event: any, content: any) {
    this.selectedRecrdToDel = 0;
    if (event) {
      this.selectedRecrdToDel = event;
    }
    // if (event.type === this.download) {
    //     // this.getFilesById(this.selectedRecrdToDel); TODO:Need to fix for multiple downloads
    //     this.http.get('file/download?refType=Consultant&refId=' + this.selectedRecrdToDel).subscribe(resp => {
    //     }, err => {
    //       if (err.status == 200)
    //           window.open(err.url);
    //   });
    // } else {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    //}
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
  /**Download file */
  public downloadFile(id: number) {
    this.http.get(this.urlConstants.FileDownload + id).subscribe(
      resp => {},
      err => {
        if (err.status == 200) window.open(err.url);
      }
    );
  }
  /** Upload documents of respective consultant */
  public uploadFiles() {
    const files = this.getFiles();
    const formData = new FormData();
    formData.append("file", files[0].rawFile, files[0].name);
    const params =
      "refId=" +
      this.selectedRecrdToDel +
      "&refType=Consultant&comments=" +
      this.comments;
    this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(
      resp => {
        let temp: any = resp;
        this.uploader = new FileUploader({});
        this.toastr.success(temp.message, "Client");
        this.close();
      },
      err => {
        this.toastr.success(err.error.message, "Client");
      }
    );
    /* let requests = [];
         files.forEach((file) => {
             let formData = new FormData();
             formData.append('file', file.rawFile, file.name);
             console.log(formData);
             this.http.upload('', formData[0]).subscribe(resp => {
                 console.log("resp=====", resp);
             })
             // requests.push(this.uploadService.upload(formData));
         });*/

    /*concat(...requests).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );*/
  }
  public emptyExperience() {
    if (this.isFresher) {
      this.model.currentCompany = "";
      this.model.currentCTC = "";
      this.model.expectedCTC = "";
      this.model.currentJobTitle = "";
      this.model.currentFunctionalArea = "";
      this.model.currentIndustry = "";
      this.model.yearsInCurrentJob = "";
      this.model.monthsInCurrentJob = "";
      this.model.experienceYrs = "";
      this.model.experienceMonths = "";
      this.model.noticePeriod = "";
    }
  }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  public search() {
    this.paginateConfig.currentPage = 1;
    if (this.currSearchTxt.length == 0) {
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
      this.initialGetAll();
    } else if (this.currSearchTxt.length > 3) {
      let temp = this.http.get(this.urlConstants.CSearch + this.currSearchTxt);
      temp.subscribe(resp => {
        this.consultantList.list = resp as any;
        this.paginateConfigDeclare(
          this.consultantList.list.length,
          1,
          this.consultantList.list.length
        );
      });
    }
  }

  public advanceSearch() {
    let temp = this.http.post(this.advanceSearchModel, this.urlConstants.CAdvSearch);
      temp.subscribe(resp => {
        this.consultantList.list = resp as any;
        this.paginateConfigDeclare(
          this.consultantList.list.length,
          1,
          this.consultantList.list.length
        );
      });
  }
  public cancelAdvSearch(showSearch: HTMLInputElement) {
    showSearch.checked = false;
    this.advanceSearchModel = <AdvanceSearchModel>{};
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.initialGetAll();
  }

  pageChanged(event) {
    this.paginateConfig.currentPage = event;
    if (this.inCon) {
      this.initialGetAll();
    }
  }
  public getIncompleteCon() {
    let temp = this.http.get(this.urlConstants.CGetInactive);
    temp.subscribe(resp => {
      this.consultantList.list = resp as any;
      this.paginateConfigDeclare(
        this.properties.ITEMSPERPAGE,
        1,
        this.consultantList.list.length
      );
      this.inCon = false;
    });
  }
  public getAllCon() {
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.initialGetAll();
    this.inCon = true;
  }
}
