import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

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
    public readOnlyToggler :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as [];
        })
        this.init();
    }
    init() {
        this.http.get('clientCallHistory/getAll').subscribe(resp => {
            this.clientCallHistoryList = resp as [];
        })
    }
    editClientCallHistory(data) {
        this.clientCallHistoryModel = data;
    }
    readOnlyEnable(data){
        this.clientCallHistoryModel = data;
        if(this.readOnlyToggler==false){
            this.readOnlyToggler=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    submit(): void {
        this.http.create(this.clientCallHistoryModel, 'clientCallHistory/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client call history");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Client call history");
        })

    }
    update() {
        this.http.update(this.clientCallHistoryModel, 'clientCallHistory/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client call history");
            this.init();
            this.editButtonToggler=true;
        }, err => {
            this.toastr.error(err.statusText, "Client call history");
        })
    }
    delete() {
        this.http.delete('clientCallHistory/id/' + this.clientCallHistoryModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client call history");
            this.init();
            this.formReset();
        })
    }
    editableForm(){
        if(this.readOnlyToggler==true){
            this.readOnlyToggler=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    cancelForm(){
        this.formReset();
        if(this.readOnlyToggler==true){
            this.readOnlyToggler=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
}
