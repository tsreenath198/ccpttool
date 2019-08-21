import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';
import { SendSmsModel } from './send-message.model';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.scss'],
    animations: [routerTransition()]
})
export class SendMessageComponent implements OnInit {

    public model: SendSmsModel = <SendSmsModel>{};
    public messageTemplateList: any = [];
    private properties = new Properties();
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public action: string = null;
    public screenHeight: any;
  public listReturned: boolean =true;
    constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        /*Autheticate user with the token */
    if (!this.http.isAuthenticate()){
        this.router.navigate(['/login']);
      }
    }
    public sendSms(): void {
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.SMSTemplateSend);
        temp.subscribe(resp => {
          /**Check if any new consultants exists in emails to which send  */
         // this.close();
          this.model = <SendSmsModel>{};
          this.toastr.success('Sms sent successfully', 'Sent!');
          this.spinner(true);
        },
          err => {
            this.toastr.error(err.error.message, this.properties.CP);
            this.spinner(true);
          });
      }
    public cancelForm(messageTemplateForm: NgForm) {
        messageTemplateForm.resetForm();
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
