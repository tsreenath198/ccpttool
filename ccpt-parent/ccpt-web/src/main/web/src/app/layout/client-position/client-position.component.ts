import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';

@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel:ClientPositionModel = <ClientPositionModel>{};
    constructor() { }

    ngOnInit() {

    }
}
