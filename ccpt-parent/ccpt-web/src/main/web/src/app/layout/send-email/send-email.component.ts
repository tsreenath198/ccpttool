import { Component, OnInit, HostListener } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { HttpClientService } from "src/app/shared/services/http.service";
import { URLConstants } from "../components/constants/url-constants";
import { ToastrCustomService } from "src/app/shared/services/toastr.service";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Properties } from "../components/constants/properties";
import { SendEmailModel } from "./send-email.model";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-send-email",
  templateUrl: "./send-email.component.html",
  styleUrls: ["./send-email.component.scss"],
  animations: [routerTransition()]
})
export class SendEmailComponent implements OnInit {
  public model: SendEmailModel = <SendEmailModel>{};
  public messageTemplateList: any = [];
  public properties = new Properties();
  private urlConstants = new URLConstants();
  public readOnlyForm = "";
  public enableButtonType = "";
  public currSearchTxt = "";
  private selectedRecrdToDel = 0;
  public closeResult = "";
  private modalRef: NgbModalRef;
  public isCreate: boolean = false;
  public showAction: boolean = false;
  public action: string = null;
  public screenHeight: any;
  public listReturned: boolean = true;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    translate: "no"
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
    this.setCC();
  }
  public setCC(){
    let sessionMail = sessionStorage.getItem("username");
    if(sessionMail == this.properties.CONSTANT_CC){
      this.model.cc = this.properties.CONSTANT_CC;
    }
    else{
      this.model.cc = this.properties.CONSTANT_CC + ","+sessionMail;
    }
  }
  public sendEmailReq(): void {
    this.spinner(false);
    this.model.target = "";
    const temp = this.http.post(
      this.model,
      this.urlConstants.EmailTemplateSend
    );
    temp.subscribe(
      resp => {
        this.model = <SendEmailModel>{};
        this.toastr.success(
          "Email/Emails sent successfully",
          this.properties.CA
        );
        this.setCC();
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.CA);
        this.spinner(true);
      }
    );
  }
  public cancelForm(emailTemplateForm: NgForm) {
    this.model = <SendEmailModel>{};
    this.setCC();
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  // public open(event: any  ,content:any) {
  //     if (event) {
  //         this.selectedRecrdToDel = event;
  //     }
  //     this.modalRef = this.modalService.open(content);
  //     this.modalRef.result.then((result) => {
  //         this.closeResult = `Closed with: ${result}`;
  //     }, (reason) => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     });
  // }
  // public close() {
  //     this.modalRef.close();
  // }
  // private getDismissReason(reason: any): string {
  //     if (reason === ModalDismissReasons.ESC) {
  //         return 'by pressing ESC';
  //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //         return 'by clicking on a backdrop';
  //     } else {
  //         return `with: ${reason}`;
  //     }
  // }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
}
