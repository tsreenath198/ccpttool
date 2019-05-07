import { Component, OnInit } from '@angular/core';
import {URLConstants} from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel:ClientPositionModel = <ClientPositionModel>{};
    public clientPositionList:Array<ClientPositionModel>=[];
    public clientPositionStatusList:Array<ClientpositionStatusModel> = [];
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public urlConstants = new URLConstants();
    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.clientPositionStatusList = resp as any;
        })
       this.init();
    }
    init(){
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as any;
        })
    }
    editClientPosition(data){
        this.clientPositionModel=data;
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
        this.clientPositionModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.clientPositionModel = <ClientPositionModel>{};
    }
    createClientPosition(): void {
        this.http.create(this.clientPositionModel, this.urlConstants.CPCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Position");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Client Position");
        })

    }
    updateClientPosition(){
        this.http.update(this.clientPositionModel, this.urlConstants.CPUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Position");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
        }, err => {
            this.toastr.error(err.statusText, "Client Position");
        })
    }
    deleteClientPosition() {
        this.http.delete(this.urlConstants.CPDelete + this.clientPositionModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Position");
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
