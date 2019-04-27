import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';

@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel:ClientCallHistoryModel = <ClientCallHistoryModel>{};
    constructor() { }

    ngOnInit() {

    }
}
