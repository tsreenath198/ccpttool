import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { RecruiterModel } from './recruiter.model';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
    public recruiterModel:RecruiterModel = <RecruiterModel>{};
    constructor() { }

    ngOnInit() {

    }
}
