import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientApplicationModel } from './client-application.model';

@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public clientApplicationModel:ClientApplicationModel = <ClientApplicationModel>{};
    constructor() { }

    ngOnInit() {

    }
}
