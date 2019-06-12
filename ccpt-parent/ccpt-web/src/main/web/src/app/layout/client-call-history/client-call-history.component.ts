import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { RecruiterModel } from '../recruiter/recruiter.model';


@Component({
    selector: 'app-client-call-history',
    templateUrl: './client-call-history.component.html',
    styleUrls: ['./client-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
    public clientCallHistoryModel: ClientCallHistoryModel = <ClientCallHistoryModel>{};
    public clientCallHistoryList: Array<any> = [];
    public clientPositionList: Array<ClientPositionModel> = [];
    public clientList: Array<ClientModel> = [];
    public rescruiterList: Array<RecruiterModel> = [];
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public urlConstants = new URLConstants();
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public currSearchTxt: string;
    public readOnlyForm = '';
    public enableButtonType = '';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as any;
        });
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as Array<ClientModel>;
        });
        this.http.get(this.urlConstants.RGetAll).subscribe(resp =>{
            this.rescruiterList = resp as any;
        });
        this.init();
        this.additionalPropertiesDeclare();
    }
    init() {
        this.http.get(this.urlConstants.CCHGetAll).subscribe(resp => {
            this.clientCallHistoryList = resp as Array<ClientCallHistoryModel>;
        });
    }
    editClientCallHistory(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getCCHById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getCCHById(id: number) {
        this.http.get(this.urlConstants.CCHGetById + id).subscribe(resp => {
        this.clientCallHistoryModel = this.mapToUpdateModel(resp);
        });
    }
    mapToUpdateModel(response): ClientCallHistoryModel {
        const temp = response;
        this.clientCallHistoryModel = temp;
        this.clientCallHistoryModel['cpId'] = temp.clientPosition.id;
        this.clientCallHistoryModel['calledBy'] = temp.calledBy.id;
        return this.clientCallHistoryModel;
    }
    additionalPropertiesDeclare() {
        this.clientCallHistoryModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.clientCallHistoryModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.clientCallHistoryModel.properties.push(<AdditionalPropertiesModel>{});
                break;
            }
        }
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    formReset() {
        this.clientCallHistoryModel = <ClientCallHistoryModel>{};
    }
    createClientCallHistory(clientCallHistoryForm: NgForm): void {
        this.http.post(this.clientCallHistoryModel, this.urlConstants.CCHCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Call History');
            this.init();
            this.formReset();
            clientCallHistoryForm.resetForm();
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Client Call History');
        });

    }
    updateClientCallHistory(clientCallHistoryForm: NgForm) {
        this.http.update(this.clientCallHistoryModel, this.urlConstants.CCHUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Call History');
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            clientCallHistoryForm.resetForm();
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Client Call History');
        });
    }

    cancelForm(clientCallHistoryForm: NgForm) {
        this.formReset();
        clientCallHistoryForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();
    }
    deleteCCHRecord(): void {
        this.http.delete(this.urlConstants.CCHDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
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
