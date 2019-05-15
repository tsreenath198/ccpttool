import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';


@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel: ClientCallHistoryModel = <ClientCallHistoryModel>{};
    public clientCallHistoryList: Array<ClientCallHistoryModel> = [];
    public clientPositionList: Array<ClientPositionModel> = [];
    public clientList: Array<ClientModel> = [];
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public urlConstants = new URLConstants();
    public currSearchTxt: string;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as Array<ClientPositionModel>;
        })
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as Array<ClientModel>;
        })
        this.init();
    }
    init() {
        this.http.get('clientCallHistory/getAll').subscribe(resp => {
            this.clientCallHistoryList = resp as Array<ClientCallHistoryModel>;
        })
    }
    editClientCallHistory(data) {
        this.clientCallHistoryModel = data;
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
        if (this.editButtonToggler == true) {
            this.editButtonToggler = false;
        }
    }
    readOnlyEnable(data) {
        this.clientCallHistoryModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    createClientCallHistory(clientCallHistoryForm: NgForm): void {
        this.http.create(this.clientCallHistoryModel, 'clientCallHistory/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Call History");
            this.init();
            this.formReset();
            clientCallHistoryForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Call History");
        })

    }
    updateClientCallHistory(clientCallHistoryForm: NgForm) {
        this.http.update(this.clientCallHistoryModel, 'clientCallHistory/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Call History");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            clientCallHistoryForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Call History");
        })
    }
    deleteClientCallHistory(deleteId) {
        this.http.delete('clientCallHistory/id/' + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Call History");
            this.init();
            this.formReset();
        })
    }
    editableForm() {
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.editButtonToggler == true) {
            this.editButtonToggler = false;
        }
    }
    cancelForm(clientCallHistoryForm: NgForm) {
        this.formReset();
        clientCallHistoryForm.resetForm();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }

    }
    deleteConfirmation(toDelete) {
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteClientCallHistory(toDelete.id);
        }
    }
}
