import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { ConsultantStatusModel } from './consultant-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { Properties } from '../components/constants/properties';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-consultant-status',
    templateUrl: './consultant-status.component.html',
    styleUrls: ['./consultant-status.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantStatusComponent implements OnInit {
    public model: ConsultantStatusModel = <ConsultantStatusModel>{};
    public consultantStatusList: any = [];
    private urlConstants = new URLConstants();
    public properties = new Properties();
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public currSearchTxt = '';
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public action: string = null;
    public screenHeight: any;
    public listReturned:boolean;
    public paginateConfig :any={
        itemsPerPage: this.properties.ITEMSPERPAGE,
        currentPage: 1,
        totalItems: 0
    }
    public readOnlyForm = '';
    public enableButtonType = '';
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
    public init() {
        this.spinner(false);
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as Array<any>;
            this.spinner(true);
        });
    }
    public initialGetAll(){
        let pageNumber = this.paginateConfig.currentPage-1
        let temp=this.http.get(this.urlConstants.CSGetAll+ pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(resp => {
          this.consultantStatusList = resp as any;
          //this.pageChange(this.page);
          this.paginateConfig.totalItems = this.consultantStatusList.noOfRecords
        });
      }
    public dblSetModel() {
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
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getById(id) {
        this.spinner(false);
        const temp = this.http.get(this.urlConstants.CSGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            this.spinner(true);
            });
    }
    private mapToUpdateModel(response) {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    public formReset() {
        this.model = <ConsultantStatusModel>{};
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
    public create(consultantStatusForm: NgForm): void {
        this.isCreate=true;
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.CSCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.CREATE, this.properties.CON_STATUS);
            this.init();
            this.formReset();
            this.spinner(true);
            consultantStatusForm.resetForm();
            this.paginateConfig.currentPage=1;
            this.initialGetAll();
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.CON_STATUS);
            this.isCreate= false;
            this.spinner(true);
        });
    }
    public update(consultantStatusForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.CSUpdate);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.UPDATE, this.properties.CON_STATUS);
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            consultantStatusForm.resetForm();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.CON_STATUS);
            this.spinner(true);
        });
    }

    public cancelForm(consultantStatusForm: NgForm) {
        this.formReset();
        consultantStatusForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.CSDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.DELETE, this.properties.CON_STATUS);
            this.init();
            this.close();
            this.formReset();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.CON_STATUS);
            this.spinner(true);
        });
    }
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
