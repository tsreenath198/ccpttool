import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    public loggedInUserRole: string;
    public loggedInRole = '';

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router,private titleService:Title) {
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
        this.loggedInRole = sessionStorage.getItem('role');
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed(str: string) {
        // this.titleService.setTitle('CCPT');
        // if (str) {
        //     this.collapsed = false;
        // } else {
        //     this.collapsed = !this.collapsed;
        // }
        // this.collapsedEvent.emit(this.collapsed);
    }
    public sidebarCollapse(){
        this.titleService.setTitle('CCPT');
        this.collapsed = false;
        this.collapsedEvent.emit(this.collapsed);
    }
    public sidebarExpand(){
        this.titleService.setTitle('CCPT');
        this.collapsed = true;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
