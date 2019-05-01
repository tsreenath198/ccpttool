import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';

@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel:ClientPositionModel = <ClientPositionModel>{};
    public clientPositionList:Array<ClientPositionModel>=[];
    public clientPositionStatusList:Array<ClientpositionStatusModel> = [];
    constructor(private http: HttpClientService) { }

    ngOnInit() {
        this.http.get('admin/getAllClientPositionStatus').subscribe(resp => {
            this.clientPositionStatusList = resp as [];
        })
        this.http.get('clientPosition/getAll').subscribe(resp => {
            this.clientPositionList = resp as [];
        })
    }
    edit(data){
        this.clientPositionModel=data;
    }
    submit(): void {
        this.http.create(this.clientPositionModel, 'clientPosition/create').subscribe(resp => {


        })
        this.clientPositionModel = <ClientPositionModel>{};
    }
    update(){
        this.http.update(this.clientPositionModel, 'clientPosition/update').subscribe(resp => {


        })
        this.clientPositionModel = <ClientPositionModel>{};
    }
    delete() {
        this.http.delete('clientPosition/id/' + this.clientPositionModel.id).subscribe(resp => {


        })
    }
}
