import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';

@Component({
    selector: 'app-consultant-call-history',
    templateUrl: './consultant-call-history.component.html',
    styleUrls: ['./consultant-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
    public consultantCallHistoryModel: ConsultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    public consultantCallHistoryList:Array<ConsultantCallHistoryModel> = [];
    public consultantList:Array<ConsultantModel> = [];

    constructor(private http: HttpClientService) { }
    ngOnInit() {
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as [];
        })
        
        this.http.get('consultantCallHistory/getAll').subscribe(resp => {
            this.consultantCallHistoryList = resp as [];
        })
    }
    edit(data){
        this.consultantCallHistoryModel=data;
    }
    submit(): void {
        this.http.create(this.consultantCallHistoryModel, 'consultantCallHistory/create').subscribe(resp => {

        })
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
    update(){
        this.http.update(this.consultantCallHistoryModel, 'consultantCallHistory/update').subscribe(resp => {


        })
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
    delete() {
        this.http.delete('consultantCallHistory/id/' + this.consultantCallHistoryModel.id).subscribe(resp => {


        })
    }
}
