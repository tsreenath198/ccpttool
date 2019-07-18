import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationStatusModel, ActionsList } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client-application-status',
    templateUrl: './client-application-status.component.html',
    styleUrls: ['./client-application-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationStatusComponent implements OnInit {
    public model: ClientApplicationStatusModel = <ClientApplicationStatusModel>{};
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt: string;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public isCreate: boolean =false;
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    public screenHeight: any;
    public listReturned:boolean;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal, private router: Router) {
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
    }
    init() {
        this.spinner(false);
        this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
            this.spinner(true);
        });
    }
    /**
     * @param data consists the  table current selected row data
     */
    public dblSetModel(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action = null;
    }
    private enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    /**
     * @param data consists the  table current selected row data
     */
    public setModel(id): void {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getById(id) {
        const temp = this.http.get(this.urlConstants.CASGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            });
    }
    private mapToUpdateModel(response) {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    private formReset(): void {
        this.model = <ClientApplicationStatusModel>{};
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
    * @param CASForm consists the form instance
    */
   public create(CASForm: NgForm): void {
       this.isCreate=true;
       this.spinner(false);
    const temp = this.http.post(this.model, this.urlConstants.CASCreate);
    temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application Status');
            this.init();
            this.formReset();
            CASForm.resetForm();
            this.spinner(true);
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.error.message, 'Client Application Status');
            this.isCreate= false;
        });
    }
    /**
     * @param CASForm consists the form instance
     */
    public update(CASForm: NgForm): void {
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.CASCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Application Status');
            this.formReset();
            this.init();
            CASForm.resetForm();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client Application Status');
        });
    }
    /**
     * @param CASForm consists the form instance
     */
    public cancelForm(CASForm: NgForm): void {
        this.formReset();
        CASForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.CASDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application Status');
            this.init();
            this.close();
            this.formReset();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client Application Status');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any , content: any) {
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
}
