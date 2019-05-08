import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';

@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel: ClientCallHistoryModel = <ClientCallHistoryModel>{};
    public clientCallHistoryList: Array<ClientCallHistoryModel> = [];
    public clientPositionList: Array<ClientPositionModel> = [];
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public urlConstants = new URLConstants();
    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as any;
        })
        this.init();
    }
    init() {
        this.http.get('clientCallHistory/getAll').subscribe(resp => {
            this.clientCallHistoryList = resp as any;
        })
    }
    editClientCallHistory(data) {
        this.clientCallHistoryModel = data;
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
        this.clientCallHistoryModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    createClientCallHistory(): void {
        this.http.create(this.clientCallHistoryModel, 'clientCallHistory/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Call History");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Client Call History");
        })

    }
    updateClientCallHistory() {
        this.http.update(this.clientCallHistoryModel, 'clientCallHistory/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Call History");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
        }, err => {
            this.toastr.error(err.statusText, "Client Call History");
        })
    }
    deleteClientCallHistory() {
        this.http.delete('clientCallHistory/id/' + this.clientCallHistoryModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Call History");
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
    cancelForm(){
        this.formReset();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
}
