import { Component, OnInit, HostListener } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { IndustryTypeModel } from "./industry-type.model";
import { HttpClientService } from "src/app/shared/services/http.service";
import { URLConstants } from "../components/constants/url-constants";
import { ToastrCustomService } from "src/app/shared/services/toastr.service";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";
import { Router } from "@angular/router";
import { Properties } from "../components/constants/properties";

@Component({
  selector: "app-industry-type",
  templateUrl: "./industry-type.component.html",
  styleUrls: ["./industry-type.component.scss"],
  animations: [routerTransition()]
})
export class IndustryTypeComponent implements OnInit {
  public model: IndustryTypeModel = <IndustryTypeModel>{};
  public itList: any = [];
  private urlConstants = new URLConstants();
  public properties = new Properties();

  public showAction: boolean = false;
  public action: string = null;

  public readOnlyForm = "";
  public enableButtonType = "";
  public currSearchTxt = "";
  public listReturned: boolean;
  public isCreate: boolean = false;
  public screenHeight: any;
  private selectedRecrdToDel = 0;
  public closeResult = "";
  public apName = "";
  public apValue = "";
  private modalRef: NgbModalRef;
  public paginateConfig: any = {
    itemsPerPage: 0,
    currentPage: 0,
    totalItems: 0
  };
  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal
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
    this.init();
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.initialGetAll();
    this.spinner(true);
  }
  private init() {
    // this.spinner(false);
    // this.http.get(this.urlConstants.SearchGetAll).subscribe(resp => {
    //     this.itList = resp as any;
    //     this.spinner(true);
    // });
    this.model.properties = [];
  }
  private paginateConfigDeclare(itemsPerPage, currentPage, totalItems) {
    (this.paginateConfig.itemsPerPage = itemsPerPage),
      (this.paginateConfig.currentPage = currentPage),
      (this.paginateConfig.totalItems = totalItems);
  }
  public initialGetAll() {
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.ITGetAll + pageNumber + "&pageSize=50&sortBy=id"
    );
    temp.subscribe(resp => {
      this.itList = resp as any;
      //this.pageChange(this.page);
      this.paginateConfig.totalItems = this.itList.noOfRecords;
    });
  }
  public enableFormEditable(): void {
    this.readOnlyForm = "";
    //this.config.editable = true;
    this.enableButtonType = "U";
  }
  public setModel(id) {
    this.spinner(false);
    this.getById(id);
    this.readOnlyForm = "U";
    // this.config.editable = false;
    this.enableButtonType = "E";
    this.showAction = true;
    this.action = null;
  }
  private getById(id) {
    const temp = this.http.get(this.urlConstants.ITGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      this.spinner(true);
      if (this.model.properties == null) {
        this.model.properties = [];
      }
    });
  }
  private mapToUpdateModel(response) {
    const temp = response;
    this.model = temp;
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
  private formReset() {
    this.model = <IndustryTypeModel>{};
    this.model.properties = [];
  }
  public create(searchBankForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    const temp = this.http.post(this.model, this.urlConstants.ITCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.IT);
        this.init();
        this.formReset();
        searchBankForm.resetForm();
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        this.isCreate = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.IT);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  public update(searchBankForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.ITUpdate);
    temp.subscribe(
      resp => {
        this.formReset();
        this.toastr.success(this.properties.UPDATE, this.properties.IT);
        this.init();
        searchBankForm.resetForm();
        this.initialGetAll();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.IT);
        this.spinner(true);
      }
    );
  }
  public cancelForm(consultantCallHistory: NgForm) {
    consultantCallHistory.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = "";
    this.enableButtonType = "";
    this.showAction = false;
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(
      this.urlConstants.ITDelete + this.selectedRecrdToDel
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.IT);
        this.init();
        this.close();
        this.formReset();
        this.initialGetAll();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.IT);
        this.spinner(true);
      }
    );
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  open(event: any, content: any) {
    if (event) {
      this.selectedRecrdToDel = event;
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
  }
  close() {
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
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  pageChanged(event) {
    this.paginateConfig.currentPage = event;
    this.initialGetAll();
  }
}
