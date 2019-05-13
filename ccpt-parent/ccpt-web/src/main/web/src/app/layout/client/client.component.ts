import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel } from './client.model';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
    public clientModel: ClientModel = <ClientModel>{};
    public clientList: any = [];

    private urlConstants = new URLConstants();
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
    }
    ngOnInit() {
        this.clientModel.clientContacts = [{ "fullname": "", "email": "", "phone": "" }]
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
        })
    }
    editClientPosition(data) {
        this.clientModel = data;
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
        if (this.editButtonToggler == true) {
            this.editButtonToggler = false;
        }
    }
    readOnlyEnable(data) {
        this.clientModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.clientModel = <ClientModel>{};
    }
    clientCreate(clientForm: NgForm): void {
        this.http.create(this.clientModel, this.urlConstants.ClientCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client");
            this.init();
            this.formReset();
            clientForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client");
        });
    }
    updateClient(consultantCallHistory: NgForm) {
        this.http.update(this.clientModel, this.urlConstants.ClientUpdate).subscribe(resp => {
            this.formButtonsToggler = true;
            this.formReset();
            this.toastr.success("Form Updated Successfully", "Client ");
            this.init();
            consultantCallHistory.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client");
        })
    }
    deleteClient(deleteId) {
        this.http.delete(this.urlConstants.ClientDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Consultant Call History");
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
    cancelForm(consultantCallHistory:NgForm){
        this.formReset();
        consultantCallHistory.resetForm();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
    deleteConfirmation(toDelete){
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteClient(toDelete.id);
          } 
    }
}
