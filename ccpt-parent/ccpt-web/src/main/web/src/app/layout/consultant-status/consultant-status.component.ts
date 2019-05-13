import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantStatusModel } from './consultant-status.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-consultant-status',
    templateUrl: './consultant-status.component.html',
    styleUrls: ['./consultant-status.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantStatusComponent implements OnInit {
    public consultantStatusModel: ConsultantStatusModel = <ConsultantStatusModel>{};
    public consultantStatusList: Array<ConsultantStatusModel> = [];
    private urlConstants = new URLConstants();
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public currSearchTxt: string ;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
    }
    public init() {
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as Array<any>;
        })
    }
    editClientApplicationStatus(data) {
        this.consultantStatusModel = data;
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    readOnlyEnable(data){
        this.consultantStatusModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    public formReset() {
        this.consultantStatusModel = <ConsultantStatusModel>{};
    }
    public createConsultantStatus(consultantStatusForm: NgForm): void {
        this.http.create(this.consultantStatusModel, this.urlConstants.CSCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Consultant Status");
            this.init();
            this.formReset();
            consultantStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Status");
        })
    }
    updateClientApplicationStatus(consultantStatusForm:NgForm) {
        this.http.update(this.consultantStatusModel, this.urlConstants.CSUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Consultant Status");
            this.formButtonsToggler = true;
            this.formReset();
            this.init();
            consultantStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Status");
        })
    }
    deleteClientApplicationStatus(deleteId) {
        this.http.delete(this.urlConstants.CSDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Client Application Status");
            this.init();
            this.formReset();
        })
    }
    editableForm(){
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    cancelForm(consultantStatusForm:NgForm){
        this.formReset();
        consultantStatusForm.resetForm();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
    deleteConfirmation(toDelete){
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteClientApplicationStatus(toDelete.code);
          } 
    }
}
