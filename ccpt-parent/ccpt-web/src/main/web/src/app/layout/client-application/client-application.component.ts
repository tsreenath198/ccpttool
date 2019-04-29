import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public clientApplicationModel: ClientApplicationModel = <ClientApplicationModel>{};
    public componentName="Client Application Component";
    constructor(private http: HttpClientService) { }

    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.clientApplicationModel, 'url').subscribe(resp => {


        })
        this.clientApplicationModel = <ClientApplicationModel>{};
    }
}
