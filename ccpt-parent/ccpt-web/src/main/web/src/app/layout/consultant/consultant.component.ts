import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantStatusModel } from '../consultant-status/consultant-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss'],
    animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
    public consultantModel: ConsultantModel = <ConsultantModel>{};
    public consultantList: Array<ConsultantModel> = [];
    public consultantStatusList: Array<ConsultantStatusModel> = [];
    public readOnlyToggler :boolean=false;
    public formButtonsToggler :boolean=true;
    public editButtonToggler:boolean=true;
    constructor(private http: HttpClientService,private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get('admin/getAllConsultantStatus').subscribe(resp => {
            this.consultantStatusList = resp as [];
        });
        this.init();
    }
    init(): void {
        this.http.get('consultant/getAll').subscribe(resp => {
            this.consultantList = resp as [];
        })
    }
    consultantEdit(data) {
        this.consultantModel = data;
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
        this.consultantModel = data;
        if(this.readOnlyToggler==false){
            this.readOnlyToggler=true;
        }
        if(this.formButtonsToggler==true){
            this.formButtonsToggler=false;
        }
    }
    formReset() {
        this.consultantModel = <ConsultantModel>{};
    }
    update() {
        this.http.update(this.consultantModel, 'consultant/update').subscribe(resp => {
        })
    }
    submit(): void {
        this.http.create(this.consultantModel, 'consultant/create').subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Consultant");
            this.init();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, "Consultant");
        }
        )}
    delete() {
        this.http.delete('consultant/id/' + this.consultantModel.id).subscribe(resp => {
            this.toastr.success("Form Deleted Successfully", "Consultant");
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
