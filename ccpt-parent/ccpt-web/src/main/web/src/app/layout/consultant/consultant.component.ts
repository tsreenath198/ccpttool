import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantStatusModel } from '../consultant-status/consultant-status.model';

@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
    public consultantModel:ConsultantModel = <ConsultantModel>{};
    public consultantList:Array<ConsultantModel> = [];

    public consultantStatusList:Array<ConsultantStatusModel> = [];
    constructor(private http: HttpClientService) { }

    ngOnInit() {
        this.http.get('admin/getAllConsultantStatus').subscribe(resp => {
            this.consultantStatusList = resp as [];
        });
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as [];
        })
    }
    edit(data){
        this.consultantModel=data;
    }
    update(){
        this.http.update(this.consultantModel, 'consultant/update').subscribe(resp => {


        })
        this.consultantModel = <ConsultantModel>{};
    }
    submit(): void {
        this.http.create(this.consultantModel, 'consultant/create').subscribe(resp => {


        })
        this.consultantModel = <ConsultantModel>{};
    }

}
