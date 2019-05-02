import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientpositionStatusModel } from './client-position-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-client-position-status',
    templateUrl: './client-position-status.component.html',
    styleUrls: ['./client-position-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionStatusComponent implements OnInit {
    public clientPositionStatusModel: ClientpositionStatusModel = <ClientpositionStatusModel>{};
    public clientPositionStatusList: Array<ClientpositionStatusModel> = [];

    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get('admin/getAllClientPositionStatus').subscribe(resp => {
            this.clientPositionStatusList = resp as [];
        })
    }
    formReset() {
        this.clientPositionStatusModel = <ClientpositionStatusModel>{};
    }
    submit(): void {
        this.http.create(this.clientPositionStatusModel, 'admin/addClientPositionStatus').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Position Status");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Client Position Status");
        })


    }
}

