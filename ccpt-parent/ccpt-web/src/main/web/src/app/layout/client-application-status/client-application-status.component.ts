import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
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
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public currSearchTxt: string ;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
        })
    }
    editClientApplicationStatus(data) {
        this.clientApplicationStatusModel = data;
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
        this.clientApplicationStatusModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
    createClientApplicationStatus(clientApplicationStatusForm:NgForm): void {
        this.http.create(this.clientApplicationStatusModel, this.urlConstants.CASCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application Status");
            this.init();
            this.formReset();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        });
    }
    updateClientApplicationStatus(clientApplicationStatusForm:NgForm) {
        this.http.update(this.clientApplicationStatusModel, this.urlConstants.CASUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Application Status");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        })
    }
    deleteClientApplicationStatus(deleteId) {
        this.http.delete(this.urlConstants.CASDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Application Status");
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
            this.deleteClientApplicationStatus(toDelete.code);
          } 
    }
}
