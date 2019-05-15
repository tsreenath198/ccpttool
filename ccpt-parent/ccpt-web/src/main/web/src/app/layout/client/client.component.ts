import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
    public currSearchTxt: string = "";
    private urlConstants = new URLConstants();
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;

    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    }
    ngOnInit() {
        this.clientContactDeclare();
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
        })
    }
    clientContactDeclare() {
        this.clientModel.clientContacts = [{ "fullname": "", "email": "", "phone": "" }]
    }
    editClientPosition(data) {
        this.clientModel = data;
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
        this.clientModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.clientModel = <ClientModel>{};
    }
    clientCreate(clientForm: NgForm): void {
        this.http.create(this.clientModel, this.urlConstants.ClientCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client");
            this.init();
            this.formReset();
            clientForm.resetForm();
            this.clientContactDeclare();
        }, err => {
            this.toastr.error(err.statusText, "Client");
        });
    }
    updateClient(consultantCallHistory: NgForm) {
        this.http.update(this.clientModel, this.urlConstants.ClientUpdate).subscribe(resp => {
            this.formButtonsToggler = true;
            this.formReset();
            this.toastr.success("Form Updated Successfully", "Client ");
            this.init();
            consultantCallHistory.resetForm();
            this.clientContactDeclare();
        }, err => {
            this.toastr.error(err.statusText, "Client");
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
    cancelForm(consultantCallHistory: NgForm) {
        this.formReset();
        consultantCallHistory.resetForm();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }
        this.clientContactDeclare();
    }
    clientContactListIncrement(event, i: number) {
        switch (event.id) {
            case "decrease": {
                this.clientModel.clientContacts.splice(i, 1);
                break;
            }
            case "increase": {
                this.clientModel.clientContacts.push({ "fullname": "", "email": "", "phone": "" });
                break;
            }
        }
    }
    deleteClientRecord(): void {
        this.http.delete(this.urlConstants.ClientDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client");
            this.init();
            this.close();
            this.formReset();
        })
    }
    /**
     * @param 
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number) {
        if (selected) {
            this.selectedRecrdToDel = selected;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    close() {
        this.modalRef.close();
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
