import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-client-application-status',
    templateUrl: './client-application-status.component.html',
    styleUrls: ['./client-application-status.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationStatusComponent implements OnInit {
    public clientApplicationStatusModel: ClientApplicationStatusModel = <ClientApplicationStatusModel>{};
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    private urlConstants = new URLConstants();
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
        })
    }
    formReset() {
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
    createClientApplicationStatus(clientApplicationStatusForm:NgForm): void {
        this.http.create(this.clientApplicationStatusModel, this.urlConstants.CASCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application Status");
            this.init();
            this.formReset();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        });
    }
}
