import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantCallHistoryModel } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';


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
    public urlConstants = new URLConstants();

    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
        this.http.get(this.urlConstants.CGetAll).subscribe(resp => {
            this.consultantList = resp as any;
        })

    }
    init(){
        this.http.get(this.urlConstants.CoCHGetAll).subscribe(resp => {
            this.consultantCallHistoryList = resp as any;
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
    createConsultantCallHistory(consultantCallHistory:NgForm): void {
        this.http.create(this.consultantCallHistoryModel, this.urlConstants.CoCHCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Consultant Call History");
            this.init();
            this.formReset();
            consultantCallHistory.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Call History");
        })
    
    }
    updateConsultantCallHistory(consultantCallHistory:NgForm) {
        this.http.update(this.consultantCallHistoryModel, this.urlConstants.CoCHUpdate).subscribe(resp => {
            this.formButtonsToggler = true;
            this.formReset();
            this.toastr.success("Form Updated Successfully", "Consultant Call History");
            this.init();
            consultantCallHistory.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Call History");
        })
    }
    deleteConsultantCallHistory(consultantCallHistory:NgForm) {
        this.http.delete(this.urlConstants.CoCHDelete + this.consultantCallHistoryModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Consultant Call History");
            this.init();
            this.formReset();
            consultantCallHistory.resetForm();
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
    cancelForm(consultantCallHistory:NgForm){
        this.formReset();
        consultantCallHistory.resetForm();
        if(this.readOnlyForm==true){
            this.readOnlyForm=false;
        }
        if(this.formButtonsToggler==false){
            this.formButtonsToggler=true;
        }
        
    }
}
