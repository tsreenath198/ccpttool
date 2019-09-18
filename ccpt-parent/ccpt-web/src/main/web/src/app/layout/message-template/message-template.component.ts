import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { MessageTemplateModel,ActionsList } from './message-template.model';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';

@Component({
    selector: 'app-message-template',
    templateUrl: './message-template.component.html',
    styleUrls: ['./message-template.component.scss'],
    animations: [routerTransition()]
})
export class MessageTemplateComponent implements OnInit {

    public model: MessageTemplateModel = <MessageTemplateModel>{};
    public messageTemplateList: any = [];
    public properties = new Properties();
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    public screenHeight: any;
    public paginateConfig :any={
        itemsPerPage: this.properties.ITEMSPERPAGE,
        currentPage: 1,
        totalItems: 0
      }
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
        this.init();
        this.initialGetAll(); 
        //this.spinner(true);
    }
    private init() {
        // this.http.get(this.urlConstants.SMSTemplateGetAll).subscribe(resp => {
        //     this.messageTemplateList = resp as any;
        // });
    }
    public initialGetAll(){
        let pageNumber = this.paginateConfig.currentPage-1
        let temp=this.http.get(this.urlConstants.SMSTemplateGetAll+ pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(resp => {
          this.messageTemplateList = resp as any;
          //this.pageChange(this.page);
          this.messageTemplateList.totalItems = this.messageTemplateList.noOfRecords
        });
      }
    public dblSetModel(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action = null;
    }
    private enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    public setModel(id) {
        this.getSMSById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getSMSById(id: number) {
        const temp = this.http.get(this.urlConstants.SMSTemplateGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
        });
    }
    private mapToUpdateModel(response): MessageTemplateModel {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    public actions(value, trashContent, form) {
        console.log(value);
        switch (value) {
          case 'Delete': {
            this.open(this.model.id, trashContent);
            break;
          }
          case 'Edit': {
            this.enableFormEditable();
            break;
          }
          case 'Close': {
            this.cancelForm(form);
          }
        }
      }
    private formReset() {
        this.model = <MessageTemplateModel>{};
    }
    public create(messageTemplateForm: NgForm): void {
        this.isCreate=true
        const temp = this.http.post(this.model, this.urlConstants.SMSTemplateCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.CREATE, 'Contact');
            this.init();
            this.formReset();
            messageTemplateForm.resetForm();
            this.paginateConfig.currentPage=1;
            this.initialGetAll();
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.statusText, 'Contact');
        });
    }
    public update(messageTemplateForm: NgForm) {
        const temp = this.http.update(this.model, this.urlConstants.SMSTemplateUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.properties.UPDATE, 'Message Template ');
            this.init();
            messageTemplateForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.statusText, 'Message Template ');
        });
    }
    public cancelForm(messageTemplateForm: NgForm) {
        this.formReset();
        messageTemplateForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        const temp = this.http.delete(this.urlConstants.SMSTemplateDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.DELETE, 'Client');
            this.init();
            this.close();
            this.formReset();
            this.showAction = false;
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.properties.DELETE, 'Client');
            }
            this.toastr.error(err.error.message, 'Client');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any  ,content:any) {
        if (event) {
            this.selectedRecrdToDel = event;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
    pageChanged(event){
        this.paginateConfig.currentPage = event
        this.initialGetAll();
      }
}
