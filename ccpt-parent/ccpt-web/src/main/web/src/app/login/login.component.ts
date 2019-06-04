import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClientService } from '../shared/services/http.service';
import { LoginModel } from './models/login';
import { ToastrCustomService } from '../shared/services/toastr.service';
import { URLConstants } from '../layout/components/constants/url-constants';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public http: HttpClientService, private toastr: ToastrCustomService) { }
    public loginDetails: LoginModel = <LoginModel>{};
    public urlConstants = new URLConstants();
    
    ngOnInit() { 
        this.reset();
    }
    onLoggedin() {
        this.http.post(this.loginDetails, this.urlConstants.UserLogin ).subscribe(resp => {
            const response = resp as any;
                this.toastr.success('User Logged In Successfully', 'Login');
                sessionStorage.setItem('username', response.username);
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('role', response.role);
                this.router.navigate(['/layout']);
        }, error => {
            this.toastr.error(error.error.message, 'Login');
            this.reset();
        });
    }
    reset():void{
        sessionStorage.setItem('username', null);
        sessionStorage.setItem('token', null);
        sessionStorage.setItem('role', null);
    }
}
