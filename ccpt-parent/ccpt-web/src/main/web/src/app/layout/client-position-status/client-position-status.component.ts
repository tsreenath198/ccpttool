import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel } from './client-position-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import{URLConstants} from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';


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
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public currSearchTxt: string ;

    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.clientPositionStatusList = resp as [];
        })
    }
    editClientPositionStatus(data) {
        this.clientPositionStatusModel = data;
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    readOnlyEnable(data){
        this.clientPositionStatusModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.clientPositionStatusModel = <ClientpositionStatusModel>{};
    }
    createClientPositionStatus(clientPositionStatusForm:NgForm): void {
        this.http.create(this.clientPositionStatusModel, this.urlConstants.CPSCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Position Status");
            this.init();
            this.formReset();
            clientPositionStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Position Status");
        })
    }
    updateClientPositionStatus(clientApplicationStatusForm:NgForm) {
        this.http.update(this.clientPositionStatusModel, this.urlConstants.CPSUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Position Status");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Position Status");
        })
    }
    deleteClientPositionStatus(deleteId) {
        this.http.delete(this.urlConstants.CPSDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Position Status");
            this.init();
            this.formReset();
        })
    }
    editableForm(){
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    cancelForm(clientApplicationStatusForm:NgForm){
        this.formReset();
        clientApplicationStatusForm.resetForm();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }       
    }
    deleteConfirmation(toDelete){
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteClientPositionStatus(toDelete.code);
          } 
    }
}

