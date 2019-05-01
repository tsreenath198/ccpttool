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
    public consultantStatusList:Array<ConsultantStatusModel>=[];
    constructor(private http: HttpClientService) { }
    ngOnInit() {
        this.http.get('admin/getAllConsultantStatus').subscribe(resp => {
            this.consultantStatusList = resp as [];
        })
    }
    submit(): void {
        this.http.create(this.consultantStatusModel, 'admin/addConsultantStatus').subscribe(resp => {


        })
        this.consultantStatusModel = <ConsultantStatusModel>{};
    }
}
