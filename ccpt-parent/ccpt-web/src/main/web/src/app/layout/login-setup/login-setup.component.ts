import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LoginSetupModel } from './login-setup.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-login-setup',
    templateUrl: './login-setup.component.html',
    styleUrls: ['./login-setup.component.scss'],
    animations: [routerTransition()]
})
export class LoginSetupComponent implements OnInit {
    public loginSetupModel: LoginSetupModel = <LoginSetupModel>{};
    public loginSetupList: Array<LoginSetupModel> = [];
    private urlConstants = new URLConstants();
    private getAllR: any;

    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.getAllR = resp as any;
        })

    }
    createUser(usersForm: NgForm): void {
        this.http.create(this.loginSetupModel, this.urlConstants.UserCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Contact");
            usersForm.resetForm();
        }, err => {
            this.toastr.error(err.statusText, "Users");
        })
    }
    cancelForm(usersForm: NgForm) {
        usersForm.resetForm();
    }
}
