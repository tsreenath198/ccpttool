import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginModel } from './models/login';
import { URLConstants } from '../layout/components/constants/url-constants';
import { Properties } from '../layout/components/constants/properties';
import { StorageService, HttpClientService, ToastrCustomService } from '../../app/shared/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: { "spellcheck": "true" },
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, 
    public http: HttpClientService, 
    private toastr: ToastrCustomService,
    public storageService:StorageService) { }
    public loginDetails: LoginModel = <LoginModel>{};
    public urlConstants = new URLConstants();
    public properties = new Properties();
    public loggingIn: boolean = false;
    public isRememberMe: boolean = false;
  ngOnInit() {
    this.session(null);
    if (document.cookie !== "" && document.cookie.split(';')[0].split('=')[1] !== '' && document.cookie.split(';')[1].split('=')[1] !== '') {
      this.loginDetails.username = document.cookie.split(';')[0].split('=')[1];
      this.loginDetails.password = document.cookie.split(';')[1].split('=')[1];
      this.isRememberMe = true;
      this.onLoggedin();
    }
  }
  public onLoggedin(): void {
    this.loggingIn = true;
    this.http.post(this.loginDetails, this.urlConstants.UserLogin).subscribe(
      resp => {
        this.loggingIn = false;
        this.session(resp);
        this.toastr.success(this.properties.USER_LOGIN, this.properties.LOGIN);
        if (this.isRememberMe) {
          this.managecookie(this.loginDetails.username, this.loginDetails.password);
        } else {
          this.managecookie('', '');
        }
        this.router.navigate(['/layout']);
      },
      error => {
        this.loggingIn = false;
        this.toastr.error(error.error.message, this.properties.LOGIN);
        this.session(null);
      }
    );
  }

  private managecookie(un: string, pswd: string) {
    document.cookie = "username=" + un;
    document.cookie = "password=" + pswd;
  }
  public login(event): void {
    if (event.keyCode === 13) this.onLoggedin();
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
