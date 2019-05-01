import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ClientPositionModel } from '../client-position/client-position.model';

@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel:ClientCallHistoryModel = <ClientCallHistoryModel>{};
    public clientCallHistoryList:Array<ClientCallHistoryModel>=[];
    public clientPositionList:Array<ClientPositionModel> = [];
    constructor(private http: HttpClientService) { }

    ngOnInit() {
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as [];
        })
        this.http.get('clientCallHistory/getAll').subscribe(resp => {
            this.clientCallHistoryList = resp as [];
        })
    }
    edit(data){
        this.clientCallHistoryModel=data;
    }
    submit(): void {
        this.http.create(this.clientCallHistoryModel, 'clientCallHistory/create').subscribe(resp => {


        })
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    update(){
        this.http.update(this.clientCallHistoryModel, 'clientCallHistory/update').subscribe(resp => {


        })
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    delete() {
        this.http.delete('clientCallHistory/id/' + this.clientCallHistoryModel.id).subscribe(resp => {


        })
    }
}
