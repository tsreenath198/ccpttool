import { Component, OnInit } from '@angular/core';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';


@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel: ClientPositionModel = <ClientPositionModel>{};
    public clientPositionList: Array<ClientPositionModel> = [];
    public clientPositionStatusList: Array<ClientpositionStatusModel> = [];
    public clientList:Array<ClientModel>=[];
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public invalidAppCode: boolean = false;
    public urlConstants = new URLConstants();
    public currSearchTxt: string ;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.clientPositionStatusList = resp as any;
        });
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp=>{
            this.clientList=resp as any;
        })
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as any;
        })
    }
    editClientPosition(data) {
        this.clientPositionModel = data;
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
        this.clientPositionModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.clientPositionModel = <ClientPositionModel>{};
    }
    createClientPosition(clientPositionForm:NgForm): void {
        if (this.clientPositionModel.clientPositionCode) {
            this.validateCPCode(this.clientPositionModel.clientPositionCode);
        }
        if (!this.invalidAppCode) {
            this.http.create(this.clientPositionModel, this.urlConstants.CPCreate).subscribe(resp => {
                this.toastr.success("Form Submitted Successfully", "Client Position");
                this.init();
                this.formReset();
                clientPositionForm.resetForm();
            }, err => {
                this.toastr.error(err.statusText, "Client Position");
            })
        }
    }
    /** Validate Client Position Code */
    private validateCPCode(code: string): void {
        let arr = code.split("-");
        if (arr.length === 4 && this.containsOnlyDigits(arr[0]) && arr[3].length === 3) {
            for (var i = 1; i < arr.length - 1; i++) {
                if (!this.containsOnlyAlphabets(arr[i])) {
                    this.invalidAppCode = true;
                    return
                } else {
                    this.invalidAppCode = false;
                }
            }
        } else {
            this.invalidAppCode = true;
        }
    }

    /** Check contains Only Digits */
    private containsOnlyDigits(code): boolean {
        let isnum = /^\d+$/.test(code);
        return isnum
    }
    /** Check contains Only alphabets */
    private containsOnlyAlphabets(code): boolean {
        let isStr = /^[a-zA-Z]+$/.test(code)
        if (isStr === false) {
            return false
        }
        return isStr
    }
    updateClientPosition(clientPositionForm:NgForm) {
        this.http.update(this.clientPositionModel, this.urlConstants.CPUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Position");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            clientPositionForm.resetForm();

        }, err => {
            this.toastr.error(err.statusText, "Client Position");
        })
    }
    deleteClientPosition(deleteId) {
        this.http.delete(this.urlConstants.CPDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Position");
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
    cancelForm(clientPositionForm:NgForm) {
        this.formReset();
        clientPositionForm.resetForm();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }

    }
    deleteConfirmation(toDelete){
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteClientPosition(toDelete.id);
          } 
    }
}
