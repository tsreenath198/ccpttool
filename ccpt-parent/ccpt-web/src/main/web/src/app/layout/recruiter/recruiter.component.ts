import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { RecruiterModel, Roles } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
    public recruiterModel: RecruiterModel = <RecruiterModel>{};
    public readOnlyForm: boolean = false;
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public recruiterList: Array<RecruiterModel> = [];
    public rolesModel = new Roles();
    public rolesList: any = [];
    public urlConstants = new URLConstants();
    public genderList=['MALE','FEMALE','OTHER'];
    public currSearchTxt: string ;

    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
        this.rolesList = this.rolesModel.roles;
    }
    init() {
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.recruiterList = resp as any;
        })
    }
    recruiterEdit(data) {
        this.recruiterModel = data;
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
        this.recruiterModel = data;
        if (this.readOnlyForm == false) {
            this.readOnlyForm = true;
        }
        if (this.formButtonsToggler == true) {
            this.formButtonsToggler = false;
        }
    }
    formReset() {
        this.recruiterModel = <RecruiterModel>{};
    }
    createRecruiter(recruiterForm:NgForm): void {
        this.http.create(this.recruiterModel, this.urlConstants.RCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Recruiter");
            this.init();
            this.formReset();
            recruiterForm.resetForm();
        }, err => {
            this.toastr.error(err.error.error + err.status, "Recruiter");
        })
    }
    updateRecruiter(recruiterForm:NgForm) {
        this.http.update(this.recruiterModel, this.urlConstants.RUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Recruiter");
            this.init();
            this.formButtonsToggler = true;
            this.formReset();
            recruiterForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Recruiter");
        })
    }
    deleteRecruiter(deleteId) {
        this.http.delete(this.urlConstants.RDelete + deleteId).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Recruiter");
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
    cancelForm(recruiterForm:NgForm) {
        this.formReset();
        recruiterForm.resetForm();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }

    
    }
    deleteConfirmation(toDelete){
        if (confirm("Are you sure you want to delete the row!")) {
            this.deleteRecruiter(toDelete.id);
          } 
    }
}
