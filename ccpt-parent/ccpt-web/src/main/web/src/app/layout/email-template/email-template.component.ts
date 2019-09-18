import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { EmailTemplateModel,ActionsList } from './email-template.model';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';

@Component({
    selector: 'app-email-template',
    templateUrl: './email-template.component.html',
    styleUrls: ['./email-template.component.scss'],
    animations: [routerTransition()]
})
export class EmailTemplateComponent implements OnInit {

    public model: EmailTemplateModel = <EmailTemplateModel>{};
    public emailTemplateList: any = [];
    private urlConstants = new URLConstants();
    public properties = new Properties();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    public listReturned:boolean;

    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
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
        this.spinner(true);
    }
    private init() {
        // this.spinner(false);
        // this.http.get(this.urlConstants.EmailTemplateGetAll).subscribe(resp => {
        //     this.emailTemplateList = resp as any;
        //     this.spinner(true);
        // });
    }
    public initialGetAll(){
        let pageNumber = this.paginateConfig.currentPage-1
        let temp=this.http.get(this.urlConstants.EmailTemplateGetAll+ pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(resp => {
          this.emailTemplateList = resp as any;
          //this.pageChange(this.page);
          this.paginateConfig.totalItems = this.emailTemplateList.noOfRecords
        });
      }
    public dblSetModel(data) {
        this.model = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action = null;
    }
    public enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    public setModel(id) {
        this.getEmailById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getEmailById(id: number) {
        const temp = this.http.get(this.urlConstants.EmailTemplateGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
        });
    }
    private mapToUpdateModel(response): EmailTemplateModel {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    private formReset() {
        this.model = <EmailTemplateModel>{};
    }
    public create(emailTemplateForm: NgForm): void {
        this.isCreate=true;
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.EmailTemplateCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.CREATE, 'Contact');
            this.init();
            this.formReset();
            emailTemplateForm.resetForm();
            this.spinner(true);
            this.paginateConfig.currentPage=1;
            this.initialGetAll();
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.statusText, 'Contact');
            this.isCreate= false;
        });
    }
    public update(emailTemplateForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.EmailTemplateUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.properties.UPDATE, 'Email Template ');
            this.init();
            emailTemplateForm.resetForm();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.statusText, 'Email Template ');
        });
    }
    public cancelForm(emailTemplateForm: NgForm) {
        this.formReset();
        emailTemplateForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.EmailTemplateDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.DELETE, 'Client');
            this.init();
            this.close();
            this.formReset();
            this.spinner(true);
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
    public open(event: any , content:any) {
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
    private spinner(isSpinner: boolean){
        this.listReturned = isSpinner;
      }
      pageChanged(event){
        this.paginateConfig.currentPage = event
        this.initialGetAll();
      }
}
