import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
    public consultantModel:ConsultantModel = <ConsultantModel>{};
    public componentName="Consultant Component";
    constructor(private http: HttpClientService) { }

    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.consultantModel, 'url').subscribe(resp => {


        })
        this.consultantModel = <ConsultantModel>{};
    }

}
