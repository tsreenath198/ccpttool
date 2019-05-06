import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-consultant-call-history',
    templateUrl: './consultant-call-history.component.html',
    styleUrls: ['./consultant-call-history.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
    public consultantCallHistoryModel: ConsultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    public consultantCallHistoryList: Array<ConsultantCallHistoryModel> = [];
    public readOnlyForm :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    public consultantList: Array<ConsultantModel> = [];

    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as [];
        })

    }
    init(){
        this.http.get('consultantCallHistory/getAll').subscribe(resp => {
            this.consultantCallHistoryList = resp as [];
        })
    }
    consultantCallHistoryEdit(data) {
        this.consultantCallHistoryModel = data;
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
        this.consultantCallHistoryModel = data;
        if(this.readOnlyForm==false){
            this.readOnlyForm=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset(){
        this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{};
    }
    createConsultantCallHistory(): void {
        this.http.create(this.consultantCallHistoryModel, 'consultantCallHistory/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Consultant Call History");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Call History");
        })
    
    }
    updateConsultantCallHistory() {
        this.http.update(this.consultantCallHistoryModel, 'consultantCallHistory/update').subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Consultant Call History");
            this.init();
            this.editButtonToggler=true;
        }, err => {
            this.toastr.error(err.statusText, "Consultant Call History");
        })
    }
    deleteConsultantCallHistory() {
        this.http.delete('consultantCallHistory/id/' + this.consultantCallHistoryModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Consultant Call History");
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
    cancelForm(){
        this.formReset();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
}
