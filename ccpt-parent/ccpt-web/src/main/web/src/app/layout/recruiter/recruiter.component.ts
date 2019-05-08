import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { RecruiterModel, Roles } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';

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
    createRecruiter(): void {
        this.http.create(this.recruiterModel, this.urlConstants.RCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Recruiter");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.error + err.status, "Recruiter");
        })
    }
    updateRecruiter() {
        this.http.update(this.recruiterModel, this.urlConstants.RUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Recruiter");
            this.init();
            this.formButtonsToggler = true;
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Recruiter");
        })
    }
    deleteRecruiter() {
        this.http.delete('recruiter/id/' + this.recruiterModel.id).subscribe(resp => {
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
    cancelForm() {
        this.formReset();
        if (this.readOnlyForm == true) {
            this.readOnlyForm = false;
        }
        if (this.formButtonsToggler == false) {
            this.formButtonsToggler = true;
        }

    }
}
