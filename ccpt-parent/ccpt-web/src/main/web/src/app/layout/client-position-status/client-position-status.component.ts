import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel } from './client-position-status.model';

@Component({
    selector: 'app-client-position-status',
    templateUrl: './client-position-status.component.html',
    styleUrls: ['./client-position-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionStatusComponent implements OnInit {
    public clientPositionStatusModel:ClientpositionStatusModel = <ClientpositionStatusModel>{};
    constructor() { }

    ngOnInit() {

    }
}
