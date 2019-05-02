import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-client-application-status',
    templateUrl: './client-application-status.component.html',
    styleUrls: ['./client-application-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationStatusComponent implements OnInit {
    public clientApplicationStatusModel:ClientApplicationStatusModel = <ClientApplicationStatusModel>{};
    public clientApplicationStatusList:Array<ClientApplicationStatusModel>=[];
    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }
    

    ngOnInit() {
        this.init();
    }
    init(){
        this.http.get('admin/getAllClientApplicationStatus').subscribe(resp => {
            this.clientApplicationStatusList = resp as [];
        })
    }
    formReset(){
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
    submit(): void {
        this.http.create(this.clientApplicationStatusModel, 'admin/addClientApplicationStatus').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application Status");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        });
    }
}
