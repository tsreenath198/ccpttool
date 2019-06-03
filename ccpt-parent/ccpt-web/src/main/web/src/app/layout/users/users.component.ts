import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {  UsersModel } from './users.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    public usersModel: UsersModel = <UsersModel>{};
    public usersList: Array<UsersModel> = [];
    private urlConstants = new URLConstants();
    public getAllR: any;

    constructor(private http: HttpClientService, private toastr: ToastrCustomService) { }

    ngOnInit() {
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.getAllR = resp as any;
        });
        this.init();

    }
    init(){
        this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
            this.usersList = resp as any;
        });
    }
    createUser(usersForm: NgForm): void {
        this.http.create(this.usersModel, this.urlConstants.UserCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
            usersForm.resetForm();
            this.init();
        }, err => {
            this.toastr.error(err.statusText, 'Users');
        });
    }
    cancelForm(usersForm: NgForm) {
        usersForm.resetForm();
    }
}
