import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel } from './client-position-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import{URLConstants} from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-client-position-status',
    templateUrl: './client-position-status.component.html',
    styleUrls: ['./client-position-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionStatusComponent implements OnInit {
    public clientPositionStatusModel: ClientpositionStatusModel = <ClientpositionStatusModel>{};
    public clientPositionStatusList: Array<ClientpositionStatusModel> = [];
    private urlConstants = new URLConstants();  
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    private selectedRecrdToDel: string = '';
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    public currSearchTxt: string ;
    public readOnlyForm: string = '';
    public enableButtonType: string = '';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService,private modalService: NgbModal) { }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.clientPositionStatusList = resp as Array<ClientpositionStatusModel>;
        })
    }
    editClientPositionStatus(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id){
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getById(id){
        this.http.get(this.urlConstants.CPSGetById + id).subscribe(resp => {
            this.clientPositionStatusModel = this.mapToUpdateModel(resp);
            });
    }
    mapToUpdateModel(response){
        let temp=response;
        this.clientPositionStatusModel=temp;
        return this.clientPositionStatusModel
    }
    formReset() {
        this.clientPositionStatusModel = <ClientpositionStatusModel>{};
    }
    createClientPositionStatus(clientPositionStatusForm:NgForm): void {
        this.http.post(this.clientPositionStatusModel, this.urlConstants.CPSCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Client Position Status");
            this.init();
            this.formReset();
            clientPositionStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, "Client Position Status");
        })
    }
    updateClientPositionStatus(clientApplicationStatusForm:NgForm) {
        this.http.update(this.clientPositionStatusModel, this.urlConstants.CPSUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, "Client Position Status");
            this.formReset();
            this.init();
            clientApplicationStatusForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, "Client Position Status");
        })
    }
    // editableForm(){
    //     if(this.readOnlyForm==true){
    //         this.readOnlyForm=false;
    //     }
    //     if(this.editButtonToggler==true){
    //         this.editButtonToggler=false;
    //     }
    // }
    cancelForm(clientApplicationStatusForm:NgForm){
        this.formReset();
        clientApplicationStatusForm.resetForm();
        
        this.readOnlyForm = '';
        this.enableButtonType = '';     
    }
    
    deleteCPSRecord(): void {
        this.http.delete(this.urlConstants.CPSDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, "Client Position Status");
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Client Position Status');
        })
    }
    /**
     * @param 
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: string) {
        if (selected) {
            this.selectedRecrdToDel = selected;
        }
        this.modalRef = this.modalService.open(content);
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

