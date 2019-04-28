import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantStatusModel } from './consultant-status.model';

@Component({
    selector: 'app-consultant-status',
    templateUrl: './consultant-status.component.html',
    styleUrls: ['./consultant-status.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantStatusComponent implements OnInit {
    public consultantStatusModel:ConsultantStatusModel = <ConsultantStatusModel>{};
    constructor() { }

    ngOnInit() {

    }
}
