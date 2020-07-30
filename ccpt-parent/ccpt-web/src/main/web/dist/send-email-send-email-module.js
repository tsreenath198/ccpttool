(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-email-send-email-module"],{

/***/ "./src/app/layout/send-email/send-email-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/send-email/send-email-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SendEmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailRoutingModule", function() { return SendEmailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _send_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-email.component */ "./src/app/layout/send-email/send-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _send_email_component__WEBPACK_IMPORTED_MODULE_2__["SendEmailComponent"]
    }
];
var SendEmailRoutingModule = /** @class */ (function () {
    function SendEmailRoutingModule() {
    }
    SendEmailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SendEmailRoutingModule);
    return SendEmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/send-email/send-email.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/send-email/send-email.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon2]=\"'fa-envelope'\" [heading2]=\"'Send Email'\" [icon1]=\"'fa-inbox'\" [heading1]=\"'Communication'\">\n  </app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\" col-md-12\">\n      <form name=\"form\" id=\"messageTemplateForm\" (ngSubmit)=\"f.form.valid && sendSms(f)\" #f=\"ngForm\" novalidate>\n        <label>E-Mail</label>\n        <input type=\"text\" [(ngModel)]=\"model.toEmails\" class=\"form-control \" name=\"to\" />\n        <label class=\"pt-3\">Cc</label>\n        <input type=\"text\" [(ngModel)]=\"model.cc\" class=\"form-control \" name=\"cc\" disabled />\n        <label class=\"pt-3\">Bcc</label>\n        <input type=\"text\" [(ngModel)]=\"model.bcc\" class=\"form-control \" name=\"bcc\" />\n        <label class=\"pt-3\">Subject</label>\n        <input class=\"form-control \" [(ngModel)]=\"model.subject\" name=\"sub\" />\n        <label class=\"pt-3\">Message Body</label>\n        <angular-editor [(ngModel)]=\"model.body\" name=\"body\" [config]=\"config\">\n        </angular-editor>\n        <button type=\"button\" class=\"btn btn-secondary mt-3 ml-3\" (click)=\"sendEmailReq()\">\n          Send\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary mt-3 ml-3\" (click)=\"cancelForm(f)\">\n          Clear\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/send-email/send-email.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/send-email/send-email.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlbmQtZW1haWwvRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcc2VuZC1lbWFpbFxcc2VuZC1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0MsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2VuZC1lbWFpbC9zZW5kLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzEuNWVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5wYWRkaW5nLXRvcHtcclxuICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgfVxyXG4gICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLmRyb3AtbGlzdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRhYmxlLXN0cmlwZWQge1xyXG4gICAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgICB9XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/layout/send-email/send-email.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/send-email/send-email.component.ts ***!
  \***********************************************************/
/*! exports provided: SendEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailComponent", function() { return SendEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendEmailComponent = /** @class */ (function () {
    function SendEmailComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.messageTemplateList = [];
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__["Properties"]();
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.isCreate = false;
        this.showAction = false;
        this.action = null;
        this.listReturned = true;
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no"
        };
        this.getScreenSize();
    }
    SendEmailComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    SendEmailComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.setCC();
    };
    SendEmailComponent.prototype.setCC = function () {
        var sessionMail = sessionStorage.getItem("username");
        if (sessionMail == this.properties.CONSTANT_CC) {
            this.model.cc = this.properties.CONSTANT_CC;
        }
        else {
            this.model.cc = this.properties.CONSTANT_CC + "," + sessionMail;
        }
    };
    SendEmailComponent.prototype.sendEmailReq = function () {
        var _this = this;
        this.spinner(false);
        this.model.target = "";
        var temp = this.http.post(this.model, this.urlConstants.EmailTemplateSend);
        temp.subscribe(function (resp) {
            _this.model = {};
            _this.toastr.success("Email/Emails sent successfully", _this.properties.CA);
            _this.setCC();
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
        });
    };
    SendEmailComponent.prototype.cancelForm = function (emailTemplateForm) {
        this.model = {};
        this.setCC();
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    // public open(event: any  ,content:any) {
    //     if (event) {
    //         this.selectedRecrdToDel = event;
    //     }
    //     this.modalRef = this.modalService.open(content);
    //     this.modalRef.result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    // }
    // public close() {
    //     this.modalRef.close();
    // }
    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return `with: ${reason}`;
    //     }
    // }
    SendEmailComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SendEmailComponent.prototype, "getScreenSize", null);
    SendEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-send-email",
            template: __webpack_require__(/*! ./send-email.component.html */ "./src/app/layout/send-email/send-email.component.html"),
            styles: [__webpack_require__(/*! ./send-email.component.scss */ "./src/app/layout/send-email/send-email.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], SendEmailComponent);
    return SendEmailComponent;
}());



/***/ }),

/***/ "./src/app/layout/send-email/send-email.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/send-email/send-email.module.ts ***!
  \********************************************************/
/*! exports provided: SendEmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailModule", function() { return SendEmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-email-routing.module */ "./src/app/layout/send-email/send-email-routing.module.ts");
/* harmony import */ var _send_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-email.component */ "./src/app/layout/send-email/send-email.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SendEmailModule = /** @class */ (function () {
    function SendEmailModule() {
    }
    SendEmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendEmailRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_send_email_component__WEBPACK_IMPORTED_MODULE_6__["SendEmailComponent"]]
        })
    ], SendEmailModule);
    return SendEmailModule;
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
//# sourceMappingURL=send-email-send-email-module.js.map