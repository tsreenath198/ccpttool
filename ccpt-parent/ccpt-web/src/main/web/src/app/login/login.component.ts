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
    public name = '';
    public password = '';
    ngOnInit() { }
    onLoggedin() {
        this.http.create(this.loginDetails, this.urlConstants.UserLogin ).subscribe(resp => {
            const response = resp as any;
            console.log(response);
                this.toastr.success('User Logged In Successfully', 'Login');
                this.router.navigate(['/layout']);
                localStorage.setItem('isLoggedin', 'false');
                //sessionStorage.setItem('username', response.username);
        }, error => {
            this.toastr.error(error.error.message, 'Login');
        });
        // const url = 'login?username=' + this.name + '&password=' + this.password;
        // this.http.get(url).subscribe(resp => {
        //     console.log('dfff', resp);
        //     this.toastr.success('User Logged In Successfully', 'Login');
        // }, err => {
        //     /*console.log("dfff", err);
        //     sessionStorage.setItem("access_token",err.error.text);*/
        //     sessionStorage.setItem('username', this.name);
        //     this.toastr.error('Invalid User name or password', 'Login');
        //     this.router.navigate(['/layout']);
        // });
    }

}
