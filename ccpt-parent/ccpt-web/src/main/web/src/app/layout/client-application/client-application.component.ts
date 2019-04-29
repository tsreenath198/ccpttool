import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';

@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public clientApplicationModel: ClientApplicationModel = <ClientApplicationModel>{};
    public consultantStatusList:Array<ClientApplicationStatusModel> = [];
    constructor(private http: HttpClientService) { }

    ngOnInit() {
        this.http.get('admin/getAllClientApplicationStatus').subscribe(resp => {
            this.consultantStatusList = resp as [];
        })
    }
    submit(): void {
        this.http.create(this.clientApplicationModel, 'clientApplication/create').subscribe(resp => {
            
        })
        this.clientApplicationModel = <ClientApplicationModel>{};
    }
}
