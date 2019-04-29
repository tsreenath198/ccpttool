import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LoginSetupModel } from './login-setup.model';
import { HttpClientService } from 'src/app/shared/services/http.service';

@Component({
    selector: 'app-login-setup',
    templateUrl: './login-setup.component.html',
    styleUrls: ['./login-setup.component.scss'],
    animations: [routerTransition()]
})
export class LoginSetupComponent implements OnInit {
    public loginSetupModel:LoginSetupModel = <LoginSetupModel>{};
    public componentName="Login Setup Component";
    constructor(private http: HttpClientService) { }

    ngOnInit() {

    }
    submit(): void {
        this.http.create(this.componentName,this.loginSetupModel, 'url').subscribe(resp => {


        })
        this.loginSetupModel = <LoginSetupModel>{};
    }
}
