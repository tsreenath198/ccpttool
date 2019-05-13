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
    public clientList: any = [];
    private urlConstants = new URLConstants();
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
    }
    ngOnInit() {
        this.clientModel.clientContacts=[{"fullname":"","email":"","phone":""}]
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
        })
    }
    formReset() {
        this.clientModel = <ClientModel>{};
    }
  clientCreate(clientForm:NgForm):void{
      this.http.create(this.clientModel,this.urlConstants.ClientCreate).subscribe(resp => {
        this.toastr.success("Form Submitted Successfully", "Client Component");
        this.init();
        this.formReset();
        clientForm.resetForm();
    }, err => {
        this.toastr.error(err.statusText, "Client Component");
    });
  }
}
