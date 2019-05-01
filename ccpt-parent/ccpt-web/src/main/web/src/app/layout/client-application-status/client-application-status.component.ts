import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-client-application-status',
    templateUrl: './client-application-status.component.html',
    styleUrls: ['./client-application-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationStatusComponent implements OnInit {
    public clientApplicationStatusModel:ClientApplicationStatusModel = <ClientApplicationStatusModel>{};
    public clientApplicationStatusList:Array<ClientApplicationStatusModel>=[];
    constructor(private http: HttpClientService) { }
    

    ngOnInit() {
        this.http.get('admin/getAllClientApplicationStatus').subscribe(resp => {
            this.clientApplicationStatusList = resp as [];
        })
    }
    submit(): void {
        this.http.create(this.clientApplicationStatusModel, 'admin/addClientApplicationStatus').subscribe(resp => {
        })
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
}
