import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { ConsultantModel } from '../consultant/consultant.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { AnyARecord } from 'dns';

@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public clientApplicationModel: ClientApplicationModel = <ClientApplicationModel>{};
    public clientApplicationList:Array<ClientApplicationModel>=[];
    public consultantList:Array<ConsultantModel> = [];
    public clientApplicationStatusList:Array<ClientApplicationStatusModel> = [];
    public clientPositionList:Array<ClientPositionModel>=[];
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    constructor(private http: HttpClientService , private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.init();
        this.http.get('admin/getAllClientApplicationStatus').subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
        })
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as any;
        })
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as any;
        })
    }
    init(){
        this.http.get('clientApplication/getAll').subscribe(resp => {
            this.clientApplicationList = resp as any;
        })
    }
    
    formReset(){
        this.clientApplicationModel = <ClientApplicationModel>{};
    }
    readOnlyEnable(data){
        this.clientApplicationModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    createClientApplication(): void {
        this.http.create(this.clientApplicationModel, 'clientApplication/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application");
            this.init();
            this.formReset()

        }, err => {
            this.toastr.error(err.statusText, "Client Application");
        })
        
    }
    editClientApplication(data){
        this.clientApplicationModel=data;
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
    updateClientApplication(){
        this.http.update(this.clientApplicationModel, 'clientApplication/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Application");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
        }, err => {
            this.toastr.error(err.statusText, "Client Application");
        })
        this.formReset();
    }
    deleteClientApplication() {
        this.http.delete('clientApplication/id/' + this.clientApplicationModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Application");
            this.init();
            this.formReset();

        })
        this.formReset();
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
