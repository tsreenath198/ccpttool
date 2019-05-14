import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationStatusModel } from './client-application-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
    public readOnlyForm: string = '';
    public enableButtonType: string = '';
    public currSearchTxt: string;
    closeResult: string;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService,private modalService: NgbModal) {
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
            this.clientApplicationStatusList = resp as any;
        })
    }
    editClientApplicationStatus(data): void {
        this.clientApplicationStatusModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }

    readOnlyEnable(data): void {
        this.clientApplicationStatusModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    formReset(): void {
        this.clientApplicationStatusModel = <ClientApplicationStatusModel>{};
    }
    createClientApplicationStatus(clientApplicationStatusForm: NgForm): void {
        this.http.create(this.clientApplicationStatusModel, this.urlConstants.CASCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Client Application Status");
            this.init();
            this.formReset();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        });
    }
    updateClientApplicationStatus(clientApplicationStatusForm: NgForm): void {
        this.http.update(this.clientApplicationStatusModel, this.urlConstants.CASUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Application Status");
            this.formReset();
            this.init();
            clientApplicationStatusForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.statusText, "Client Application Status");
        })
    }
    deleteClientApplicationStatus(deleteId): void {
        this.http.delete(this.urlConstants.CASDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Application Status");
            this.init();
            this.formReset();
        })
    }
    cancelForm(clientApplicationStatusForm: NgForm): void {
        this.formReset();
        clientApplicationStatusForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
    }
    deleteCASRecord(toDelete): void {
            this.deleteClientApplicationStatus(toDelete.code);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
