(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/layout/dashboard']\"\n    >{{ properties.APP_NAME }}\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n    <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\n        </form> -->\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n          <i class=\"fa fa-user\"></i> {{ loggedInUserName }}\n          <b class=\"caret\"></b>\n        </a>\n        <div class=\"dropdown-menu-right pointer\" ngbDropdownMenu>\n          <a\n            class=\"dropdown-item\"\n            (click)=\"ccptBackup()\"\n            *ngIf=\"role === 'Admin'\"\n          >\n            <i class=\"fa fa-fw fa fa-database\"></i>\n            {{ \"Backup\" | translate }}\n          </a>\n          <a class=\"dropdown-item\" (click)=\"logout()\">\n            <i class=\"fa fa-fw fa-sign-out\"></i> {{ \"Log Out\" | translate }}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksdUJBSDBCLEVBYTNCO0VBWkg7SUFJTSxZQUFXLEVBQ1o7RUFMTDtJQU9NLFlBQVcsRUFJWjtFQVhMO01BU1EsWUFBVyxFQUNaO0VBVlA7RUFjSSxhQUFZLEVBcUJiO0VBbkNIO0lBZ0JNLDhCQUE2QjtJQUM3QixrQkFBaUIsRUFJbEI7RUFyQkw7TUFtQlEsb0JBQW1CLEVBQ3BCO0VBcEJQO0lBd0JRLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCO0VBMUJQO0lBNEJRLFVBQVMsRUFDVjtFQTdCUDtJQStCUSxnQkFBZTtJQUNmLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XG46aG9zdCB7XG4gIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAubmF2LWl0ZW0gPiBhIHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubWVzc2FnZXMge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAubWVkaWEge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgLnNtYWxsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmxhc3Qge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _constants_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, http, toastr) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.properties = new _constants_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"]();
        this.urlConstants = new _constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.backupa = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.pushRightClass = "push-right";
        this.loggedInUserName = sessionStorage.getItem("username");
        this.role = sessionStorage.getItem("role");
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigateByUrl("/login");
        document.cookie = "username=" + "";
        document.cookie = "password=" + "";
    };
    HeaderComponent.prototype.ccptBackup = function () {
        var _this = this;
        this.backupa.emit(true);
        this.http.get(this.urlConstants.Backup).subscribe(function (resp) {
            _this.backupa.emit(false);
            _this.toastr.success("Backup", "Successful");
        }, function (err) {
            _this.toastr.error(err.error.error, err.message);
            _this.backupa.emit(false);
            console.log(err);
        });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector("body");
        dom.classList.toggle("rtl");
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "backupa", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  class=\"sidebar\"\n  (mouseover)=\"sidebarExpand()\"\n  (mouseleave)=\"sidebarCollapse()\"\n  [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\"\n>\n  <div class=\"list-group\">\n    <a routerLink=\"/layout/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-home\"></i>\n      <span>{{ 'Dashboard' | translate }}</span>\n    </a>\n    <div class=\"nested-menu\" (mouseover)=\"addExpandClass('calls')\" (mouseleave)=\"addCollapseClass()\">\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-phone\"></i>\n        <span>{{ 'Calls' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'calls'\">\n        <ul class=\"submenu\">\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/consultant-call-history']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-users\"></span>\n              <span>{{ 'Consultants' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/client-call-history']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-building\"></span>\n              <span>{{ 'Clients' | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    <a [routerLink]=\"['/layout/consultant']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-users\"></i>\n      <span>{{ 'Consultants' | translate }}</span>\n    </a>\n    <a [routerLink]=\"['/layout/client']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-building\"></i>\n      <span>{{ 'Clients' | translate }}</span>\n    </a>\n    <a [routerLink]=\"['/layout/client-position']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-briefcase\"></i>\n      <span>{{ 'Client Positions' | translate }}</span>\n    </a>\n    <a [routerLink]=\"['/layout/client-application']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-paper-plane\"></i>\n      <span>{{ 'Client Applications' | translate }}</span>\n    </a>\n    <a [routerLink]=\"['/layout/payments']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n      ><i class=\"fa fa-fw fa-inr\"></i>\n      <span>{{ 'Payments' | translate }}</span>\n    </a>\n    <a [routerLink]=\"['/layout/other-contacts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-address-book\"></i>\n      <span>{{ 'Other Contacts' | translate }}</span>\n    </a>\n    <div\n      class=\"nested-menu\"\n      (mouseover)=\"addExpandClass('administration')\"\n      (mouseleave)=\"addCollapseClass()\"\n      *ngIf=\"loggedInRole == 'Admin'\"\n    >\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-user\"></i>\n        <span>{{ 'Administration' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'administration'\">\n        <ul class=\"submenu\">\n          <li>\n            <a [routerLink]=\"['/layout/recruiter']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n              <i class=\"fa fa-fw fa-id-card\"></i>\n              <span>{{ 'Recruiters' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/user']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-user-circle\"></i>\n              <span>{{ 'Users' | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    \n    <div class=\"nested-menu\" (mouseover)=\"addExpandClass('metaData')\" (mouseleave)=\"addCollapseClass()\">\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-sticky-note\"></i>\n        <span>{{ 'Metadata' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'metaData'\">\n        <ul class=\"submenu\">\n          <li>\n            <a [routerLink]=\"['/layout/client-application-status']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n              <i class=\"fa fa-fw fa-filter\"></i>\n              <span>{{ 'Application Status' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/client-position-status']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-filter\"></i>\n              <span>{{ 'Position Status' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/consultant-status']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-filter\"></i>\n              <span>{{ 'Consultant Status' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/industry-type']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-industry\"></i>\n              <span>{{ 'Industries' | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    <div class=\"nested-menu\" (mouseover)=\"addExpandClass('communication')\" (mouseleave)=\"addCollapseClass()\">\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-inbox\"></i>\n        <span>{{ 'Communication' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'communication'\">\n        <ul class=\"submenu\">\n          <li>\n            <a [routerLink]=\"['/layout/email-template']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-envelope\"></i>\n              <span>{{ 'Emails' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/message-template']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-comment\"></i>\n              <span>{{ 'Message Templates' | translate }}</span>\n            </a>\n          </li>\n\n          <li>\n            <a [routerLink]=\"['/layout/send-message']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-comments\"></i>\n              <span>{{ 'Send Message' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/layout/send-email']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n              ><i class=\"fa fa-fw fa-envelope\"></i>\n              <span>{{ 'Send Email' | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    <a [routerLink]=\"['/layout/reports']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-bar-chart \"></i>\n      <span>{{ 'Reports' | translate }}</span>\n    </a>\n    <div class=\"nested-menu\" (mouseover)=\"addExpandClass('guide')\" (mouseleave)=\"addCollapseClass()\">\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-book\"></i>\n        <span>{{ 'Guides' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'guide'\">\n        <ul class=\"submenu\">\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/search-bank']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-search\"></span>\n              <span>{{ 'Search Bank' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/faq']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-question-circle\"></span>\n              <span>{{ \"FAQ's\" | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    <div class=\"nested-menu\" (mouseover)=\"addExpandClass('history')\" (mouseleave)=\"addCollapseClass()\">\n      <a class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-history\"></i>\n        <span>{{ 'History' | translate }}</span>\n      </a>\n      <li class=\"nested\" [class.expand]=\"showMenu === 'history'\">\n        <ul class=\"submenu\">\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/email-history']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-envelope\"></span>\n              <span>{{ 'Emails' | translate }}</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"list-group-item \" [routerLink]=\"['/layout/message-history']\" [routerLinkActive]=\"['router-link-active']\">\n              <span class=\"fa fa-fw fa-comments\"></span>\n              <span>{{ 'Messages' | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </div>\n    <!-- <a [routerLink]=\"['/layout/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n      <i class=\"fa fa-fw fa-bar-chart-o\"></i>\n      <span>{{ 'Charts' | translate }}</span>\n    </a> -->\n    <!-- <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>\n            <span>{{ 'Tables' | translate }}</span>\n        </a> -->\n    <!-- <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>\n            <span>{{ 'Forms' | translate }}</span>\n        </a> -->\n    <!-- <a [routerLink]=\"['/layout/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>\n            <span>{{ 'Bootstrap Element' | translate }}</span>\n        </a>   -->\n    <!-- <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\n        </a> -->\n    <!-- <a [routerLink]=\"['/layout/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>\n            <span>{{ 'Component' | translate }}</span>\n        </a> -->\n\n    <!-- <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>\n            <span>{{ 'Blank Page' | translate }}</span>\n        </a> -->\n    <!-- <a href=\"http://www.strapui.com/\" class=\"list-group-item\">\n            <i class=\"fa fa-caret-down\"></i>\n            <span>{{ 'More Themes' | translate }}</span>\n        </a> -->\n\n    <!-- <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i> RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\n                    <span><i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n                    <span><i class=\"fa fa-user\"></i> John Smith</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div> -->\n    <!-- <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" >\n      <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>\n      <span>{{ 'Collapse ' | translate }}</span>\n    </div> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar:hover {\n  width: 200px; }\n\n.sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 46px;\n  left: 235px;\n  width: 43px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n\n.sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n\n.sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n\n.sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n\n.sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n\n.sidebar .list-group .header-fields {\n    padding-top: 10px; }\n\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n\n.sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n\n.sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n\n.sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n\n.sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n\n.sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n\n.sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n\n.sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu {\n  transition-property: height;\n  transition-duration: 5s;\n  transition-delay: 2s; }\n\n.nested-menu .list-group-item {\n    cursor: pointer;\n    transition-property: height;\n    transition-duration: 5s;\n    transition-delay: 2s; }\n\n.nested-menu .nested {\n    list-style-type: none;\n    transition-property: height;\n    transition-duration: 5s;\n    transition-delay: 2s; }\n\n.nested-menu ul.submenu {\n    display: none;\n    height: 0; }\n\n.nested-menu .expand ul.submenu {\n    display: block;\n    list-style-type: none;\n    height: auto; }\n\n.nested-menu .expand ul.submenu li a {\n      color: #fff;\n      padding: 10px;\n      display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n\n@media print {\n  .sidebar {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n\n::-webkit-scrollbar {\n  width: 8px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n\n.toggle-button i {\n    font-size: 23px; }\n\n.toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n\n.collapsed {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9EOlxcQ0NQVCBNQUlOXFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFVBQVM7RUFDVCxZQUFXO0VBQ1gsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQix1QkFmNEI7RUFnQjVCLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUtuQixpQ0FBZ0MsRUFpRmpDOztBQXJHRDtJQXdCTSxpQkE1QndCO0lBNkJ4QixVQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxzQkFBcUIsRUFJdEI7O0FBaENMO01BOEJRLG1CQUFrQixFQUNuQjs7QUEvQlA7SUFrQ00sb0JBQWdEO0lBQ2hELFlBQVcsRUFDWjs7QUFwQ0w7SUFzQ00sb0JBQWdEO0lBQ2hELFlBQVcsRUFDWjs7QUF4Q0w7SUEwQ00sa0JBQWlCLEVBS2xCOztBQS9DTDtNQTZDUSwrQ0FBOEMsRUFDL0M7O0FBOUNQO0lBbURNLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2I7O0FBckRMO0lBdURNLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGlCQUFnQixFQW1CakI7O0FBNUVMO01BMkRRLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsaUJBQWdCO01BQ2hCLGlCQWxFc0IsRUF5RXZCOztBQXJFUDtRQWdFVSxtQkFBa0I7UUFDbEIsZUFBYztRQUNkLHdCQUF1QjtRQUN2QixrQkFBaUIsRUFDbEI7O0FBcEVUOztNQXdFUSxZQUFXO01BQ1gsY0FBYTtNQUNiLHFCQUFvQixFQUNyQjs7QUEzRVA7SUE4RU0sb0JBQWdELEVBQ2pEOztBQS9FTDtJQWlGTSxpQkFBZ0I7SUFDaEIsYUFBWSxFQWlCYjs7QUFuR0w7TUFxRlUsaUJBQWdCO01BQ2hCLHVCQTFGb0I7TUEyRnBCLDRCQUEyQixFQU81Qjs7QUE5RlQ7UUF5RlksWUFBVyxFQUNaOztBQTFGWDtRQTRGWSxZQUFXLEVBQ1o7O0FBN0ZYO01BZ0dVLG9CQUFnRCxFQUNqRDs7QUFNVDtFQUNFLDRCQUEyQjtFQUMzQix3QkFBdUI7RUFDdkIscUJBQW9CLEVBK0JyQjs7QUFsQ0Q7SUFLSSxnQkFBZTtJQUNmLDRCQUEyQjtJQUMzQix3QkFBdUI7SUFDdkIscUJBQW9CLEVBQ3JCOztBQVRIO0lBV0ksc0JBQXFCO0lBQ3JCLDRCQUEyQjtJQUMzQix3QkFBdUI7SUFDdkIscUJBQW9CLEVBQ3JCOztBQWZIO0lBaUJJLGNBQWE7SUFDYixVQUFTLEVBQ1Y7O0FBbkJIO0lBc0JNLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsYUFBWSxFQVFiOztBQWhDTDtNQTJCVSxZQUFXO01BQ1gsY0FBYTtNQUNiLGVBQWMsRUFDZjs7QUFLVDtFQUNFO0lBQ0UsVUFBUztJQUNULFVBQVMsRUFDVixFQUFBOztBQUVIO0VBQ0U7SUFDRSx5QkFBd0IsRUFDekIsRUFBQTs7QUFFSDtFQUNFO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBR0g7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSx3Q0FBd0Q7RUFDeEQsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHdDQUF3RCxFQUN6RDs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFVBQVM7RUFDVCxZQUFXO0VBQ1gsb0JBQW1CO0VBUW5CLDJCQUEwQjtFQUsxQixpQ0FBZ0MsRUFDakM7O0FBckJEO0lBU0ksZ0JBQWUsRUFDaEI7O0FBVkg7SUFZSSxvQkFBZ0Q7SUFDaEQsWUFBVyxFQUNaOztBQVNIO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuLnNpZGViYXI6aG92ZXIge1xuICB3aWR0aDogMjAwcHg7XG59XG4uc2lkZWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiA0NnB4O1xuICBsZWZ0OiAyMzVweDtcbiAgd2lkdGg6IDQzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAubGlzdC1ncm91cCB7XG4gICAgYS5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLmZhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmhlYWRlci1maWVsZHMge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgID4gLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zaWRlYmFyLWRyb3Bkb3duIHtcbiAgICAqOmZvY3VzIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5wYW5lbC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhOmhvdmVyLFxuICAgICAgYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICB9XG4gICAgLnBhbmVsLWNvbGxhcHNlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAucGFuZWwtYm9keSB7XG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5lc3RlZC1tZW51IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMnM7XG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMnM7XG4gIH1cbiAgLm5lc3RlZCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1cztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAycztcbiAgfVxuICB1bC5zdWJtZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAmIC5leHBhbmQge1xuICAgIHVsLnN1Ym1lbnUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBsaSB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogMHB4O1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlci1maWVsZHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xuICBpIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    // @Output() collapsedEvent = new EventEmitter<boolean>();
    function SidebarComponent(translate, router, titleService, http) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.titleService = titleService;
        this.http = http;
        this.loggedInRole = "";
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.loggedInRole = sessionStorage.getItem("role");
        this.showMenu = "";
        this.pushRightClass = "push-right";
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        this.showMenu = element;
    };
    SidebarComponent.prototype.addCollapseClass = function () {
        this.showMenu = "0";
    };
    SidebarComponent.prototype.toggleCollapsed = function (str) {
        this.titleService.setTitle("CCPT");
        if (str) {
            this.collapsed = false;
        }
        else {
            this.collapsed = !this.collapsed;
        }
        this.http.sendSubject(this.collapsed);
    };
    SidebarComponent.prototype.sidebarCollapse = function () {
        this.titleService.setTitle("CCPT");
        this.collapsed = false;
        this.http.sendSubject(this.collapsed);
    };
    SidebarComponent.prototype.sidebarExpand = function () {
        this.titleService.setTitle("CCPT");
        this.collapsed = true;
        this.http.sendSubject(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector("body");
        dom.classList.toggle("rtl");
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isLoggedin");
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "prefix" },
            {
                path: "dashboard",
                loadChildren: "./dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "client-call-history",
                loadChildren: "./client-call-history/client-call-history.module#ClientCallHistoryModule"
            },
            {
                path: "client-application",
                loadChildren: "./client-application/client-application.module#ClientApplicationModule"
            },
            // tslint:disable-next-line:max-line-length
            {
                path: "client-application-status",
                loadChildren: "./client-application-status/client-application-status.module#ClientApplicationStatusModule"
            },
            {
                path: "client-position",
                loadChildren: "./client-position/client-position.module#ClientPositionModule"
            },
            {
                path: "client-position-status",
                loadChildren: "./client-position-status/client-position-status.module#ClientPositionStatusModule"
            },
            {
                path: "consultant",
                loadChildren: "./consultant/consultant.module#ConsultantModule"
            },
            {
                path: "consultant-call-history",
                loadChildren: "./consultant-call-history/consultant-call-history.module#ConsultantCallHistoryModule"
            },
            {
                path: "consultant-status",
                loadChildren: "./consultant-status/consultant-status.module#ConsultantStatusModule"
            },
            {
                path: "recruiter",
                loadChildren: "./recruiter/recruiter.module#RecruiterModule"
            },
            { path: "user", loadChildren: "./users/users.module#UsersModule" },
            {
                path: "search-bank",
                loadChildren: "./search-bank/search-bank.module#SearchBankModule"
            },
            {
                path: "industry-type",
                loadChildren: "./industry-type/industry-type.module#IndustryTypeModule"
            },
            {
                path: "other-contacts",
                loadChildren: "./other-contacts/other-contacts.module#OtherContactsModule"
            },
            { path: "client", loadChildren: "./client/client.module#ClientModule" },
            {
                path: "email-template",
                loadChildren: "./email-template/email-template.module#EmailTemplateModule"
            },
            {
                path: "message-template",
                loadChildren: "./message-template/message-template.module#MessageTemplateModule"
            },
            {
                path: "payments",
                loadChildren: "./payments/payments.module#PaymentsModule"
            },
            {
                path: "send-message",
                loadChildren: "./send-message/send-message.module#SendMessageModule"
            },
            {
                path: "send-email",
                loadChildren: "./send-email/send-email.module#SendEmailModule"
            },
            {
                path: "faq",
                loadChildren: "./frequent-questions/frequent-questions.module#FrequentQuestionsModule"
            },
            {
                path: "email-history",
                loadChildren: "./email-history/email-history.module#EmailHistoryModule"
            },
            {
                path: "message-history",
                loadChildren: "./message-history/message-history.module#MessageHistoryModule"
            },
            {
                path: "reports",
                loadChildren: "./reports/reports.module#ReportsModule"
            },
            { path: "charts", loadChildren: "./charts/charts.module#ChartsModule" },
            { path: "tables", loadChildren: "./tables/tables.module#TablesModule" },
            { path: "forms", loadChildren: "./form/form.module#FormModule" },
            {
                path: "bs-element",
                loadChildren: "./bs-element/bs-element.module#BsElementModule"
            },
            { path: "grid", loadChildren: "./grid/grid.module#GridModule" },
            {
                path: "components",
                loadChildren: "./bs-component/bs-component.module#BsComponentModule"
            },
            {
                path: "blank-page",
                loadChildren: "./blank-page/blank-page.module#BlankPageModule"
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"!backupStatus\" (backupa)=\"checkBackupStatus($event)\"></app-header>\n<app-sidebar *ngIf=\"!backupStatus\"></app-sidebar>\n<section *ngIf=\"!backupStatus\" class=\"main-container\" [ngClass]=\"{ collapsed: collapedSideBar }\">\n  <router-outlet *ngIf=\"!backupStatus\"></router-outlet>\n</section>\n\n<div *ngIf=\"backupStatus\" class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.capitalize {\n  text-transform: capitalize; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 50px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 200px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLHlDQUF3QyxFQUN6Qzs7QUFDRDtFQUNFLDJCQUEwQixFQUMzQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRTtJQUNFLDRCQUEyQixFQUM1QixFQUFBOztBQUVIO0VBQ0U7SUFDRSwyQkFBMEI7SUFDMUIsNEJBQTJCLEVBQzVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(http) {
        this.http = http;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getSubject().subscribe(function (resp) {
            _this.collapedSideBar = resp;
        });
    };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent.prototype.checkBackupStatus = function (event) {
        this.backupStatus = event;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-layout",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map