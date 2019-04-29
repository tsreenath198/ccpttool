import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantStatusModel } from './consultant-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-consultant-status',
    templateUrl: './consultant-status.component.html',
    styleUrls: ['./consultant-status.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantStatusComponent implements OnInit {
    public consultantStatusModel:ConsultantStatusModel = <ConsultantStatusModel>{};
    public componentName="Consultant Status Component";
    constructor(private http: HttpClientService) { }
    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.consultantStatusModel, 'url').subscribe(resp => {


        })
        this.consultantStatusModel = <ConsultantStatusModel>{};
    }
}
