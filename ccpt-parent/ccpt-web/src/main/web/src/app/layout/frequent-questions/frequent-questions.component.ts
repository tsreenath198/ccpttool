import { Component, OnInit, HostListener, ElementRef } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { FAQModel } from "./frequent-questions.model";
import { HttpClientService } from "src/app/shared/services/http.service";
import { URLConstants } from "../components/constants/url-constants";
import { NgForm } from "@angular/forms";
import { ToastrCustomService } from "src/app/shared/services/toastr.service";
import {
  NgbModalRef,
  ModalDismissReasons,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";
import { Router } from "@angular/router";
import { Properties } from "../components/constants/properties";

@Component({
  selector: "app-frequent-questions",
  templateUrl: "./frequent-questions.component.html",
  styleUrls: ["./frequent-questions.component.scss"],
  animations: [routerTransition()]
})
export class FrequentQuestionsComponent implements OnInit {
  public model: FAQModel = <FAQModel>{};
  public faqList: any = [];
  private urlConstants = new URLConstants();
  public properties = new Properties();
  public rolesList: any = [];
  public getAllR: any = [];
  public getAllCA: any = [];
  public readOnlyForm: any = "";
  public enableButtonType: any = "";
  public currSearchTxt = "";
  public currDropSearch: any = null;
  private selectedRecrdToDel = 0;
  public closeResult = "";
  public apName = "";
  public apValue = "";
  public isCreate: boolean = false;
  public showAction: boolean = false;
  public action: string = null;
  private modalRef: NgbModalRef;
  public screenHeight: any;
  public viewPassword: boolean;
  public listReturned: boolean;
  public paginateConfig: any = {
    temsPerPage: 0,
    currentPage: 0,
    totalItems: 0
  };
  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal,
    private el: ElementRef
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
    this.http
      .get(this.urlConstants.RGetAll + "0&pageSize=20000&sortBy=id")
      .subscribe(resp => {
        this.getAllR = resp as any;
        this.getRecruiterId();
      });
    this.http.get(this.urlConstants.CADropdown).subscribe(resp => {
      this.getAllCA = resp as any;
    });
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    this.init();
    this.initialGetAll();
    this.spinner(true);
  }

  private paginateConfigDeclare(itemsPerPage, currentPage, totalItems) {
    (this.paginateConfig.itemsPerPage = itemsPerPage),
      (this.paginateConfig.currentPage = currentPage),
      (this.paginateConfig.totalItems = totalItems);
  }
  private init() {
    // this.spinner(false);
    // this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
    //     this.faqList = resp as any;
    //     this.spinner(true);
    // });
  }
  private getRecruiterId() {
    const temp = sessionStorage.getItem("username");
    this.getAllR.list.forEach(rl => {
      if (rl.email === temp) {
        this.model.creatorId = rl.id;
      }
      if (this.model.properties == null) {
        this.model.properties = [];
      }
    });
  }
  public initialGetAll() {
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(
      this.urlConstants.FAQGetAll + pageNumber + "&pageSize=50&sortBy=id"
    );
    temp.subscribe(resp => {
      this.faqList = resp as any;
      //this.pageChange(this.page);
      this.paginateConfig.totalItems = this.faqList.noOfRecords;
    });
  }
  public dblSetModel() {
    this.readOnlyForm = "U";
    this.enableButtonType = "U";
    this.showAction = true;
    this.action = null;
  }
  private enableFormEditable(): void {
    this.readOnlyForm = "U";
    this.enableButtonType = "U";
  }
  public setModel(id: number) {
    this.spinner(false);
    this.getUserById(id);
    this.readOnlyForm = "R";
    this.enableButtonType = "E";
    this.showAction = true;
    this.action = null;
  }
  private getUserById(id: number) {
    let temp = this.http.get(this.urlConstants.FAQGetByID + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      if (this.model.properties == null) {
        this.model.properties = [];
      }
      this.spinner(true);
    });
  }
  private mapToUpdateModel(response): FAQModel {
    const temp = response;
    this.model = temp;
    this.model.caId = response.ca.id;
    this.model.creatorId = response.creator.id;
    return this.model;
  }
  public propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case "decrease": {
        this.model.properties.splice(i, 1);
        break;
      }
      case "increase": {
        if (this.model.properties.length == 0) {
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
    this.model = <FAQModel>{ properties: [] };
    this.getRecruiterId();
  }
  public create(usersForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    let temp = this.http.post(this.model, this.urlConstants.FAQCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.USER);
        usersForm.resetForm();
        this.formReset();
        this.init();
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        this.getRecruiterId();
        this.isCreate = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.USER);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  public update(usersForm: NgForm): void {
    this.spinner(false);
    let temp = this.http.update(this.model, this.urlConstants.FAQUpdate);
    temp.subscribe(
      resp => {
        this.formReset();
        this.toastr.success(this.properties.UPDATE, this.properties.USER);
        this.init();
        this.getRecruiterId();
        usersForm.resetForm();
        this.initialGetAll();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.USER);
        this.spinner(true);
      }
    );
  }
  public trash(): void {
    this.spinner(false);
    let temp = this.http.delete(
      this.urlConstants.FAQDelete + this.selectedRecrdToDel
    );
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.USER);
        this.init();
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        this.close();
        this.formReset();
        this.getRecruiterId();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.USER);
        this.spinner(true);
      }
    );
  }
  public cancelForm(usersForm: NgForm) {
    this.init();
    usersForm.resetForm();
    this.readOnlyForm = "";
    this.enableButtonType = "";
    this.showAction = false;
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  public open(event: any, content: any) {
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
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  public pageChanged(event) {
    this.paginateConfig.currentPage = event;
    this.initialGetAll();
  }
  public search() {
    this.paginateConfig.currentPage = 1;
    if (this.currSearchTxt.length == 0) {
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
      this.initialGetAll();
    } else if (this.currSearchTxt.length > 3) {
      let temp = this.http.get(
        this.urlConstants.FAQSearchBySkills + this.currSearchTxt
      );
      temp.subscribe(resp => {
        this.faqList.list = resp as any;
        this.paginateConfigDeclare(
          this.faqList.list.length,
          1,
          this.faqList.list.length
        );
      });
    }
  }
  public searchSelect() {
    this.paginateConfig.currentPage = 1;
    let temp = this.http.get(
      this.urlConstants.FAQSearchByCAId + this.currDropSearch.id
    );
    temp.subscribe(resp => {
      this.faqList.list = resp as any;
      this.paginateConfigDeclare(
        this.faqList.list.length,
        1,
        this.faqList.list.length
      );
    });
  }
  public cancelSearch() {
    this.currDropSearch = null;
    this.initialGetAll();
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
  }
}
