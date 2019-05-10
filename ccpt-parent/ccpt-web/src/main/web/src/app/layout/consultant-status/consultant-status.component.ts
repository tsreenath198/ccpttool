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
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }
    ngOnInit() {
        this.init();
    }
    public init() {
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as Array<any>;
        })
    }
    public formReset() {
        this.consultantStatusModel = <ConsultantStatusModel>{};
    }
    public createClientApplicationStatus(clientApplicationStatusForm: NgForm): void {
        this.http.create(this.consultantStatusModel, this.urlConstants.CSCreate).subscribe(resp => {
            this.toastr.success("Form Submitted Successfully", "Consultant Status");
            this.init();
            this.formReset();
            clientApplicationStatusForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Consultant Status");
        })
    }
}
