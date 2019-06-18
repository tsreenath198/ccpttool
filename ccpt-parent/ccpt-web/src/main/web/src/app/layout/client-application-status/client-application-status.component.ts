import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-client-application-status',
    templateUrl: './client-application-status.component.html',
    styleUrls: ['./client-application-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationStatusComponent implements OnInit {
    public clientApplicationStatusModel: ClientApplicationStatusModel = <ClientApplicationStatusModel>{};
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    private urlConstants = new URLConstants();
    public readOnlyForm: string = '';
    public enableButtonType: string = '';
    public currSearchTxt: string;
    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    
    public trash:string = 'trash';
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal
    ) {
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
        })
    }
    /**
     * @param data consists the  table current selected row data
     */
    editClientApplicationStatus(data): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    /**
     * @param data consists the  table current selected row data
     */
    readOnlyEnable(id): void {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getById(id){
        this.http.get(this.urlConstants.CASGetById + id).subscribe(resp => {
            this.clientApplicationStatusModel = this.mapToUpdateModel(resp);
            });
    }
    mapToUpdateModel(response){
        let temp=response;
        this.clientApplicationStatusModel=temp;
        return this.clientApplicationStatusModel
    }
    formReset(): void {
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
    /**
    * @param CASForm consists the form instance
    */
   createCAStatus(CASForm: NgForm): void {
        this.http.post(this.clientApplicationStatusModel, this.urlConstants.CASCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Client Application Status");
            this.init();
            this.formReset();
            CASForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, "Client Application Status");
        });
    }
    /**
     * @param CASForm consists the form instance
     */
    updateClientApplicationStatus(CASForm: NgForm): void {
        this.http.update(this.clientApplicationStatusModel, this.urlConstants.CASUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, "Client Application Status");
            this.formReset();
            this.init();
            CASForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, "Client Application Status");
        })
    }
    /**
     * @param CASForm consists the form instance
     */
    cancelForm(CASForm: NgForm): void {
        this.formReset();
        CASForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    deleteCASRecord(): void {
        this.http.delete(this.urlConstants.CASDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, "Client Application Status");
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Client Application Status');
        })
    }
    /**
     * @param 
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any) {
        if (event.id) {
            this.selectedRecrdToDel = event.id;
        }
        this.modalRef = this.modalService.open(event.content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    close() {
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
}
