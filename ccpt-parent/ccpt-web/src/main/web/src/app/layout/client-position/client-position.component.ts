import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel:ClientPositionModel = <ClientPositionModel>{};
    public componentName="Client Position Component";
    constructor(private http: HttpClientService) { }

    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.clientPositionModel, 'url').subscribe(resp => {


        })
        this.clientPositionModel = <ClientPositionModel>{};
    }
}
