import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LoginSetupModel } from './login-setup.model';

@Component({
    selector: 'app-login-setup',
    templateUrl: './login-setup.component.html',
    styleUrls: ['./login-setup.component.scss'],
    animations: [routerTransition()]
})
export class LoginSetupComponent implements OnInit {
    public loginSetupModel:LoginSetupModel = <LoginSetupModel>{};
    constructor() { }

    ngOnInit() {

    }
}
