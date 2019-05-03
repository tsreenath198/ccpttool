import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { RecruiterModel } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
    public recruiterModel:RecruiterModel = <RecruiterModel>{};
    public readOnlyToggler :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public recruiterList:Array<RecruiterModel> = [];

    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
    }
    init(){
        this.http.get('recruiter/getAll').subscribe(resp => {
            this.recruiterList = resp as [];
        })
    }
    recruiterEdit(data){
        this.recruiterModel=data;
        if(this.readOnlyToggler==true){
            this.readOnlyToggler=false;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    readOnlyEnable(data){
        this.recruiterModel = data;
        if(this.readOnlyToggler==false){
            this.readOnlyToggler=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.recruiterModel = <RecruiterModel>{};
    }
    submit(): void {
        this.http.create(this.recruiterModel, 'recruiter/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Recruiter");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Recruiter");
        })
    }
    update(){
        this.http.update(this.recruiterModel, 'recruiter/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Recruiter");
            this.init();
            this.editButtonToggler=true;
        }, err => {
            this.toastr.error(err.statusText, "Recruiter");
        })
    }
    delete() {
        this.http.delete('recruiter/id/' + this.recruiterModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Recruiter");
            this.init();
            this.formReset();
        })
    }
    editableForm(){
        if(this.readOnlyToggler==true){
            this.readOnlyToggler=false;
        }
        if(this.editButtonToggler==true){
            this.editButtonToggler=false;
        }
    }
    cancelForm(){
        this.formReset();
        if(this.readOnlyToggler==true){
            this.readOnlyToggler=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
}
