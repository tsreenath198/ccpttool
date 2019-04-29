import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-consultant-call-history',
    templateUrl: './consultant-call-history.component.html',
    styleUrls: ['./consultant-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
    public consultantCallHistoryModel:ConsultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    public componentName="Consultant Call History Component";
    constructor(private http: HttpClientService) { }
    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.consultantCallHistoryModel, 'url').subscribe(resp => {


        })
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
}
