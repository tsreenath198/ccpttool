import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel:ClientCallHistoryModel = <ClientCallHistoryModel>{};
    public componentName:string="Client Call History";
    constructor(private http: HttpClientService) { }

    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.clientCallHistoryModel, 'url').subscribe(resp => {


        })
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
}
