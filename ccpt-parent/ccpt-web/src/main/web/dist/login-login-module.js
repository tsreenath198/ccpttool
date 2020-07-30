(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-4\">\n      <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\n      <h1>Consultant Coordination and Placement Tool</h1>\n      <div class=\"form-content\">\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            [(ngModel)]=\"loginDetails.username\"\n            class=\"form-control input-underline input-lg\"\n            id=\"user\"\n            placeholder=\"{{ 'Email' | translate }}\"\n            (keypress)=\"login($event)\"\n          />\n        </div>\n\n        <div class=\"form-group\">\n          <input\n            type=\"password\"\n            class=\"form-control input-underline input-lg\"\n            id=\"pwd\"\n            placeholder=\"{{ 'Password' | translate }}\"\n            [(ngModel)]=\"loginDetails.password\"\n            (keypress)=\"login($event)\"\n            #password\n          />\n          <span id=\"toogle\" (click)=\"toogle(password)\"\n            ><i\n              toggle=\"#pwd\"\n              class=\"fa fa-eye field-icon toggle-password\"\n              *ngIf=\"!viewPassword\"\n              aria-hidden=\"true\"\n            ></i>\n            <i\n              toggle=\"#pwd\"\n              class=\"fa fa-eye-slash field-icon toggle-password\"\n              *ngIf=\"viewPassword\"\n              aria-hidden=\"true\"\n            ></i>\n          </span>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" [(ngModel)]=\"isRememberMe\" /> Remember me\n              </label>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <button\n              class=\"btn rounded-btn\"\n              (click)=\"onLoggedin()\"\n              [disabled]=\"loggingIn\"\n            >\n              <span class=\"fa fa-sign-in\"></span>&nbsp;&nbsp;{{\n                loggingIn ? \"loading...\" : (\"Sign In\" | translate)\n              }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.field-icon {\n  float: right;\n  margin-left: -25px;\n  margin-top: -25px;\n  position: relative;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWM7RUFDZCxpQkFYMEI7RUFZMUIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBZ0ZmOztBQTFGRDtJQVlRLFdBQVUsRUFDYjs7QUFiTDtJQWVRLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZix1QkFBc0I7SUFDdEIsaUJBQWdCLEVBQ25COztBQXBCTDtJQXNCUSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsa0RBQWlEO0lBQ2pELFlBQVc7SUFDWCxpQkFBZ0IsRUFDbkI7O0FBNUJMO0lBOEJRLDhCQUE2QjtJQUM3QixpQkFBZ0IsRUFDbkI7O0FBaENMO0lBbUNRLG9CQUFtQjtJQUNuQixnQ0FBK0I7SUFDL0IsaUJBekNzQjtJQTBDdEIsMkNBQTBDO0lBQzFDLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2xCOztBQTFDTDs7OztJQStDUSxhQUE2QjtJQUM3Qix3QkFBd0M7SUFDeEMsY0FBYSxFQUNoQjs7QUFsREw7SUFxRFEsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsZ0JBQWUsRUFJbEI7O0FBNURMO01BMERZLGdDQUErQixFQUNsQzs7QUEzRFQ7SUErRFEsZUFBYyxFQWtCakI7O0FBakZMO01BaUVZLDJDQUEwQyxFQUM3Qzs7QUFsRVQ7TUFxRVksaUJBQWlCO01BQ2pCLDJDQUEwQyxFQUM3Qzs7QUF2RVQ7TUEwRVksaUJBQWlCO01BQ2pCLDJDQUEwQyxFQUM3Qzs7QUE1RVQ7TUErRVksMkNBQTBDLEVBQzdDOztBQWhGVDtJQW1GUSxnQkFBZSxFQUNsQjs7QUFwRkw7SUF1RlEsbUJBQWtCO0lBQ2xCLHVCQUFzQixFQUN6Qjs7QUFFTDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbi1wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIC5jb2wtbGctNCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5pbnB1dC1sZyB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLnJvdW5kZWQtYnRuIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cbiAgICAucm91bmRlZC1idG46aG92ZXIsXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxuICAgIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgfVxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxufVxuLmZpZWxkLWljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _layout_components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _layout_components_constants_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, toastr, storageService) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.storageService = storageService;
        this.loginDetails = {};
        this.urlConstants = new _layout_components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _layout_components_constants_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"]();
        this.loggingIn = false;
        this.isRememberMe = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.session(null);
        if (document.cookie !== "" && document.cookie.split(';')[0].split('=')[1] !== '' && document.cookie.split(';')[1].split('=')[1] !== '') {
            this.loginDetails.username = document.cookie.split(';')[0].split('=')[1];
            this.loginDetails.password = document.cookie.split(';')[1].split('=')[1];
            this.isRememberMe = true;
            this.onLoggedin();
        }
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.loggingIn = true;
        this.http.post(this.loginDetails, this.urlConstants.UserLogin).subscribe(function (resp) {
            _this.loggingIn = false;
            _this.session(resp);
            _this.toastr.success(_this.properties.USER_LOGIN, _this.properties.LOGIN);
            if (_this.isRememberMe) {
                _this.managecookie(_this.loginDetails.username, _this.loginDetails.password);
            }
            else {
                _this.managecookie('', '');
            }
            _this.router.navigate(['/layout']);
        }, function (error) {
            _this.loggingIn = false;
            _this.toastr.error(error.error.message, _this.properties.LOGIN);
            _this.session(null);
        });
    };
    LoginComponent.prototype.managecookie = function (un, pswd) {
        document.cookie = "username=" + un;
        document.cookie = "password=" + pswd;
    };
    LoginComponent.prototype.login = function (event) {
        if (event.keyCode === 13)
            this.onLoggedin();
    };
    LoginComponent.prototype.session = function (res) {
        if (res != null) {
            sessionStorage.setItem('username', res.username);
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('role', res.role);
        }
        else {
            sessionStorage.setItem('username', null);
            sessionStorage.setItem('token', null);
            sessionStorage.setItem('role', null);
        }
    };
    LoginComponent.prototype.toogle = function (html) {
        if (html.type === 'password') {
            html.type = 'text';
            this.viewPassword = true;
        }
        else {
            html.type = 'password';
            this.viewPassword = false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            host: { "spellcheck": "true" },
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["ToastrCustomService"],
            _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(100%)" }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(100%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-100%)" }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map