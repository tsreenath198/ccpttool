import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClientService } from '../shared/services/http.service';
import { LoginModel } from './models/login';
import { ToastrCustomService } from '../shared/services/toastr.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public http: HttpClientService, private toastr: ToastrCustomService) { }
    public name: string = "";
    public password: string = "";
    ngOnInit() { }
    onLoggedin() {
        console.log("name", this.name)
        /*this.http.getLogin("assets/login.json").subscribe(resp => {
            let response = resp as LoginModel;
            
            if (response.username == this.name) {
                this.toastr.success("User Logged In Successfully","Login");
                this.router.navigate(["/layout"]);
                localStorage.setItem('isLoggedin','false');
                localStorage.setItem('username',response.username);
              }else{
                this.toastr.error("Invalid User name or password","Login");
              }
           
        });*/
        let url = "login?username=" + this.name + "&password=" + this.password;
        this.http.get(url).subscribe(resp => {
            console.log("dfff", resp);
            this.toastr.success("User Logged In Successfully", "Login");
        }, err => {
            console.log("dfff", err);
            sessionStorage.setItem("access_token",err.error.text);
            sessionStorage.setItem('username',this.name);
            this.toastr.error("Invalid User name or password", "Login");
            this.router.navigate(["/layout"]);
        });
    }

}
