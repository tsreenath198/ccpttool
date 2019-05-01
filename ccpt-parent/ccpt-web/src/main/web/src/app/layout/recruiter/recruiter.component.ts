import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { RecruiterModel } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
    public recruiterModel:RecruiterModel = <RecruiterModel>{};
    public recruiterList:Array<RecruiterModel> = [];

    constructor(private http: HttpClientService) { }
    ngOnInit() {
        this.http.get('recruiter/getAll').subscribe(resp => {
            this.recruiterList = resp as [];
        })
    }
    edit(data){
        this.recruiterModel=data;
    }
    submit(): void {
        this.http.create(this.recruiterModel, 'recruiter/create').subscribe(resp => {


        })
        this.recruiterModel = <RecruiterModel>{};
    }
    update(){
        this.http.update(this.recruiterModel, 'recruiter/update').subscribe(resp => {


        })
        this.recruiterModel = <RecruiterModel>{};
    }
}
