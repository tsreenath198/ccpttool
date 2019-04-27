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
    constructor(public router: Router, public http: HttpClientService,  private toastr: ToastrCustomService) { }
    public name: string = "";
    public password: string = "";
    ngOnInit() { }
    onLoggedin() {
        console.log("name", this.name)
        this.http.getLogin("assets/login.json").subscribe(resp => {
            let response = resp as LoginModel;
            
            if (response.username == this.name) {
                this.toastr.success("User Logged In Successfully","Login");
               this.router.navigate(["/dashboard"]);
               // localStorage.setItem('isLoggedin','false');
              }else{
                this.toastr.error("Invalid User name or password","Login");
              }
           
        });
    }

}
