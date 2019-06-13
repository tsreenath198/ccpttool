import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel, Roles } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
    public recruiterModel: RecruiterModel = <RecruiterModel>{};
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public recruiterList: Array<RecruiterModel> = [];
    public rolesModel = new Roles();
    public rolesList: any = [];
    public urlConstants = new URLConstants();
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public genderList = ['MALE', 'FEMALE', 'OTHER'];
    public currSearchTxt: string ;

    public readOnlyForm = '';
    public enableButtonType = '';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    ngOnInit() {
        this.init();
        this.additionalPropertiesDeclare();
        this.rolesList = this.rolesModel.roles;
    }
    init() {
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.recruiterList = resp as any;
        });
    }
    recruiterEdit(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getById(id) {
        this.http.get(this.urlConstants.RGetById + id).subscribe(resp => {
            this.recruiterModel = this.mapToUpdateModel(resp);
            const temp = resp as any;
            if (temp.properties == null) {
                this.additionalPropertiesDeclare();
            }
            });
    }
    mapToUpdateModel(response) {
        const temp = response;
        this.recruiterModel = temp;
        return this.recruiterModel;
    }
    additionalPropertiesDeclare() {
        this.recruiterModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.recruiterModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.recruiterModel.properties.push(<AdditionalPropertiesModel>{});
                break;
            }
        }
    }
    formReset() {
        this.recruiterModel = <RecruiterModel>{};
    }
    createRecruiter(recruiterForm: NgForm): void {
        this.http.post(this.recruiterModel, this.urlConstants.RCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Recruiter');
            this.init();
            this.formReset();
            recruiterForm.resetForm();
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message + err.status, 'Recruiter');
        });
    }
    updateRecruiter(recruiterForm: NgForm) {
        this.http.update(this.recruiterModel, this.urlConstants.RUpdate).subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Recruiter');
            this.init();
            this.formReset();
            recruiterForm.resetForm();
            this.additionalPropertiesDeclare();

            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, 'Recruiter');
        });
    }
    cancelForm(recruiterForm: NgForm) {
        this.formReset();
        recruiterForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();
    }
    deleteRecruiterRecord(): void {
        this.http.delete(this.urlConstants.RDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Recruiter');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Recruiter');
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
