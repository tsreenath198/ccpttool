import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel } from './client-position-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-client-position-status',
    templateUrl: './client-position-status.component.html',
    styleUrls: ['./client-position-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionStatusComponent implements OnInit {
    public clientPositionStatusModel:ClientpositionStatusModel = <ClientpositionStatusModel>{};
    public componentName="Client Position Status";
    constructor(private http: HttpClientService) { }
    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.clientPositionStatusModel, 'url').subscribe(resp => {


        })
        this.clientPositionStatusModel = <ClientpositionStatusModel>{};
    }
}

