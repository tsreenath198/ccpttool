import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Title } from "@angular/platform-browser";
import { HttpClientService } from "../../../shared/services/http.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  public loggedInUserRole: string;
  public loggedInRole = "";

  // @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
    private translate: TranslateService,
    public router: Router,
    private titleService: Title,
    private http: HttpClientService
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
    this.isActive = false;
    this.collapsed = false;
    this.loggedInRole = sessionStorage.getItem("role");
    this.showMenu = "";
    this.pushRightClass = "push-right";
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    this.showMenu = element;
  }
  addCollapseClass() {
    this.showMenu = "0";
  }

  toggleCollapsed(str: string) {
    this.titleService.setTitle("CCPT");
    if (str) {
      this.collapsed = false;
    } else {
      this.collapsed = !this.collapsed;
    }
    this.http.sendSubject(this.collapsed);
  }
  public sidebarCollapse() {
    this.titleService.setTitle("CCPT");
    this.collapsed = false;
    this.http.sendSubject(this.collapsed);
  }
  public sidebarExpand() {
    this.titleService.setTitle("CCPT");
    this.collapsed = true;
    this.http.sendSubject(this.collapsed);
  }
  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
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

  onLoggedout() {
    localStorage.removeItem("isLoggedin");
  }
}
