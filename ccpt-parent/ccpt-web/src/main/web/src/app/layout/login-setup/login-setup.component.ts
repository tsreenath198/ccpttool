import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LoginSetupModel } from './login-setup.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';

@Component({
    selector: 'app-login-setup',
    templateUrl: './login-setup.component.html',
    styleUrls: ['./login-setup.component.scss'],
    animations: [routerTransition()]
})
export class LoginSetupComponent implements OnInit {
    public loginSetupModel:LoginSetupModel = <LoginSetupModel>{};
    public loginSetupList:Array<LoginSetupModel> = [];
    private urlConstants = new URLConstants();
    private getAllR:any;

    constructor(private http: HttpClientService) { }

    ngOnInit() {
         this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
         this.getAllR = resp as any;
     })

    }
    submit(): void {
        console.log(this.loginSetupModel)
        // this.http.create(this.loginSetupModel, 'url').subscribe(resp => {


        // })
        this.loginSetupModel = <LoginSetupModel>{};
    }
}
