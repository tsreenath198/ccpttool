import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel } from './client.model';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
    public clientModel: ClientModel = <ClientModel>{};
    public tempClientContact:Array<ClientContactsModel>=[]
    private urlConstants = new URLConstants();
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
    }
    ngOnInit() {
        this.tempClientContact=[{"fullname":"","email":"","phone":""}]
        this.init();
    }
    init() {
      
    }
    formReset() {
        this.clientModel = <ClientModel>{};
    }
  
}
