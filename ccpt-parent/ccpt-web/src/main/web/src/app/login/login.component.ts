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
    public loggingIn: boolean = false;
    ngOnInit() {
        this.session(null);
    }
    public onLoggedin(): void {
        this.loggingIn = true;
        this.http.post(this.loginDetails, this.urlConstants.UserLogin).subscribe(resp => {
            this.loggingIn = false;
            this.session(resp);
            this.toastr.success('User Logged In Successfully', 'Login');
            this.router.navigate(['/layout']);
        }, error => {
            this.loggingIn = false
            this.toastr.error(error.error.message, 'Login');
            this.session(null);
        });
    }
    public login(event): void {
        if (event.keyCode === 13)
            this.onLoggedin()
    }
    public session(res: any): void {
        if (res != null) {
            sessionStorage.setItem('username', res.username);
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('role', res.role);
        } else {
            sessionStorage.setItem('username', null);
            sessionStorage.setItem('token', null);
            sessionStorage.setItem('role', null);
        }
    }
}
