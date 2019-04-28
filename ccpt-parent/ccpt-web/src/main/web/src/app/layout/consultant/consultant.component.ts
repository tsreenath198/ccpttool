import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';

@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
    public consultantModel:ConsultantModel = <ConsultantModel>{};
    constructor() { }

    ngOnInit() {

    }
}
