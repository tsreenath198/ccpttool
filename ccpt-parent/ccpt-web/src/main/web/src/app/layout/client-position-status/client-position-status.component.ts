import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel,ActionsList } from './client-position-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import {URLConstants} from '../components/constants/url-constants';
import {Properties} from '../components/constants/properties';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client-position-status',
    templateUrl: './client-position-status.component.html',
    styleUrls: ['./client-position-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionStatusComponent implements OnInit {
    public model: ClientpositionStatusModel = <ClientpositionStatusModel>{};
    public clientPositionStatusList: any = [];
    private urlConstants = new URLConstants();
    public properties = new Properties();
    public formButtonsToggler = true;
    public editButtonToggler = true;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public currSearchTxt: string ;
    public readOnlyForm = '';
    public enableButtonType = '';
    public screenHeight: any;
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    public listReturned:boolean;
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
    init() {
        this.spinner(false);
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.spinner(true);
            this.clientPositionStatusList = resp as Array<ClientpositionStatusModel>;
        });
    }
    public initialGetAll(){
        let pageNumber = this.paginateConfig.currentPage-1
        let temp=this.http.get(this.urlConstants.CPSGetAll+ pageNumber + "&pageSize=20&sortBy=id");
        temp.subscribe(resp => {
          this.clientPositionStatusList = resp as any;
          //this.pageChange(this.page);
          this.paginateConfig.totalItems = this.clientPositionStatusList.noOfRecords
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
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getById(id) {
        this.http.get(this.urlConstants.CPSGetById + id).subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            this.spinner(true);
            });
    }
    private mapToUpdateModel(response) {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    private formReset() {
        this.model = <ClientpositionStatusModel>{};
    }
    public create(clientPositionStatusForm: NgForm): void {
        this.isCreate=true;
        this.spinner(false);
        this.http.post(this.model, this.urlConstants.CPSCreate).subscribe(resp => {
            this.toastr.success(this.properties.CREATE, this.properties.POS_STATUS);
            this.init();
            this.formReset();
            this.spinner(true);
            this.paginateConfig.currentPage=1;
            this.initialGetAll();
            clientPositionStatusForm.resetForm();
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.POS_STATUS);
            this.isCreate= false;
            this.spinner(true);
        });
    }
    public update(clientApplicationStatusForm: NgForm) {
        this.spinner(false);
        this.http.update(this.model, this.urlConstants.CPSUpdate).subscribe(resp => {
            this.toastr.success(this.properties.UPDATE, this.properties.POS_STATUS);
            this.formReset();
            this.init();
            this.spinner(true);
            clientApplicationStatusForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.POS_STATUS);
            this.spinner(true);
        });
    }
    // editableForm(){
    //     if(this.readOnlyForm==true){
    //         this.readOnlyForm=false;
    //     }
    //     if(this.editButtonToggler==true){
    //         this.editButtonToggler=false;
    //     }
    // }
    public cancelForm(clientApplicationStatusForm: NgForm) {
        this.formReset();
        clientApplicationStatusForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        this.spinner(false);
        this.http.delete(this.urlConstants.CPSDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.properties.UPDATE, this.properties.POS_STATUS);
            this.init();
            this.close();
            this.formReset();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, this.properties.POS_STATUS);
            this.spinner(true);
        });
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
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any , content) {
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

