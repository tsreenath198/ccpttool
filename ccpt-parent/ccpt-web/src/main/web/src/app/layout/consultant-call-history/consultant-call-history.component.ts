import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientPositionModel } from '../client-position/client-position.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';


@Component({
    selector: 'app-consultant-call-history',
    templateUrl: './consultant-call-history.component.html',
    styleUrls: ['./consultant-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
    public consultantCallHistoryModel: ConsultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    public consultantCallHistoryList: Array<ConsultantCallHistoryModel> = [];
    public currSearchTxt = '';
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public consultantList: Array<ConsultantModel> = [];
    public clientPositionList: Array<ClientPositionModel> = [];
    public urlConstants = new URLConstants();

    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;

    public readOnlyForm = '';
    public enableButtonType = '';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    ngOnInit() {
        this.init();
        this.additionalPropertiesDeclare();
        this.http.get(this.urlConstants.CGetAll).subscribe(resp => {
            this.consultantList = resp as Array<ConsultantModel>;
        });
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as Array<ClientPositionModel>;
        });
    }
    init() {
        this.http.get(this.urlConstants.CoCHGetAll).subscribe(resp => {
            this.consultantCallHistoryList = resp as Array<ConsultantCallHistoryModel>;
        });
    }
    consultantCallHistoryEdit(data) {
        this.consultantCallHistoryModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getConsultantById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getConsultantById(id: number) {
        this.http.get(this.urlConstants.CoCHGetById + id).subscribe(resp => {
            this.consultantCallHistoryModel = this.mapToUpdateModel(resp);
        });
    }
    mapToUpdateModel(response): ConsultantCallHistoryModel {
        const temp = response;
        this.consultantCallHistoryModel = temp;
        this.consultantCallHistoryModel['consultantId'] = temp.consultant.id;
        return this.consultantCallHistoryModel;
    }
    additionalPropertiesDeclare() {
        this.consultantCallHistoryModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.consultantCallHistoryModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.consultantCallHistoryModel.properties.push(<AdditionalPropertiesModel>{});
                break;
            }
        }
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    formReset() {
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
    createConsultantCallHistory(consultantCallHistory: NgForm): void {
        this.http.post(this.consultantCallHistoryModel, this.urlConstants.CoCHCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant Call History');
            this.init();
            this.formReset();
            this.additionalPropertiesDeclare();
            consultantCallHistory.resetForm();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
        });

    }
    updateConsultantCallHistory(consultantCallHistory: NgForm) {
        this.http.update(this.consultantCallHistoryModel, this.urlConstants.CoCHUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant Call History');
            this.init();
            consultantCallHistory.resetForm();

            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
        });
    }
    cancelForm(consultantCallHistory: NgForm) {
        this.formReset();
        consultantCallHistory.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();

    }
    deleteCoCHRecord(): void {
        this.http.delete(this.urlConstants.CoCHDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Call History');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant Call History');
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
