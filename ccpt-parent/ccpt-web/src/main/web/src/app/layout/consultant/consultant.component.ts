import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantStatusModel } from '../consultant-status/consultant-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
    public consultantModel: ConsultantModel = <ConsultantModel>{};
    public consultantList: Array<ConsultantModel> = [];
    public copyConList: Array<ConsultantModel> = [];
    public consultantStatusList: Array<ConsultantStatusModel> = [];
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public genderList = ['Male', 'Female', 'Other'];
    
    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    public urlConstants = new URLConstants();
    public currSearchTxt: string ;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as any;
        });
        this.init();
    }
    init(): void {
        this.http.get(this.urlConstants.CGetAll).subscribe(resp => {
            this.consultantList = resp as any;
            this.copyConList = resp as any;
        })
    }
    consultantEdit(data) {
        this.consultantModel = data;
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
        this.consultantModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.consultantModel = <ConsultantModel>{};
    }
    createConsultant(consultantForm: NgForm): void {
        this.http.create(this.consultantModel, this.urlConstants.CCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Consultant");
            this.init();
            this.formReset();
            consultantForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant");
        })
    }
    updateConsultant(consultantForm: NgForm) {
        this.http.update(this.consultantModel, this.urlConstants.CUpdate).subscribe(resp => {
            this.formButtonsToggler = true;
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, "Consultant");
            this.init();
            consultantForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Client Position");
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
    cancelForm(consultantForm: NgForm) {
        this.formReset();
        consultantForm.resetForm();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }

    }
    deleteConsultantRecord(): void {
        this.http.delete(this.urlConstants.CDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, "Consultant");
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
