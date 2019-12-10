import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Properties } from "../constants/properties";
import {
  HttpClientService,
  ToastrCustomService
} from "src/app/shared/services";
import { URLConstants } from "../constants/url-constants";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;
  public loggedInUserName: string;
  public properties = new Properties();
  public urlConstants = new URLConstants();
  @Output() backup = new EventEmitter();
  role: string;
  constructor(
    private translate: TranslateService,
    public router: Router,
    public http: HttpClientService,
    private toastr: ToastrCustomService
  ) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = "push-right";
    this.loggedInUserName = sessionStorage.getItem("username");
    this.role = sessionStorage.getItem("role");
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  logout() {
    this.router.navigateByUrl("/login");
    document.cookie = "username=" + "";
    document.cookie = "password=" + "";
  }
  public ccptBackup() {
    this.backup.emit(true);
    this.http.get(this.urlConstants.Backup).subscribe(
      resp => {
        this.backup.emit(false);
        this.toastr.success("Backup", "Successful");
      },
      err => {
        this.toastr.error(err.error.error, err.message);
        this.backup.emit(false);
        console.log(err);
      }
    );
  }
  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("rtl");
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
