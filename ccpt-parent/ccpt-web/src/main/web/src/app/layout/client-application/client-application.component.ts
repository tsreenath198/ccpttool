import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { ConsultantModel } from '../consultant/consultant.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

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
    constructor(private http: HttpClientService , private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get('admin/getAllClientApplicationStatus').subscribe(resp => {
            this.clientApplicationStatusList = resp as [];
        })
        this.http.get('clientApplication/getAll').subscribe(resp => {
            this.clientApplicationList = resp as [];
        })
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as [];
        })
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as [];
        })
    }
    
    formReset(){
        this.clientApplicationModel = <ClientApplicationModel>{};
    }
    submit(): void {
        this.http.create(this.clientApplicationModel, 'clientApplication/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application");
        })
        
    }
    editClientApplication(data){
        this.clientApplicationModel=data;
    }
    updateClientApplication(){
        this.http.update(this.clientApplicationModel, 'clientApplication/update').subscribe(resp => {


        })
        this.formReset();
    }
    deleteClientApplication() {
        this.http.delete('clientApplication/id/' + this.clientApplicationModel.id).subscribe(resp => {


        })
        this.formReset();
    }
}
