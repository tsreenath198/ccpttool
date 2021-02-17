(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-template-email-template-module"],{

/***/ "./src/app/layout/email-template/email-template-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/email-template/email-template-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EmailTemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateRoutingModule", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template.component */ "./src/app/layout/email-template/email-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _email_template_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateComponent"]
    }
];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/email-template/email-template.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/email-template/email-template.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [icon2]=\"'fa-envelope'\" [heading2]=\"'Emails'\" [icon1]=\"'fa-inbox'\"\n    [heading1]=\"'Communication'\"></app-page-header>\n    <ng-template #spinner >\n        <div class=\"spinner padding-top justify-content-md-center\">\n          <div class=\"bounce1\"></div>\n          <div class=\"bounce2\"></div>\n          <div class=\"bounce3\"></div>\n      </div>\n      </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"let etl of emailTemplateList.list | paginate: paginateConfig  ; let i = index\"\n              (click)=\"setModel(etl.id)\">\n              <td>\n                {{etl.type}}\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"etl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"></app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"emailTemplateList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"emailTemplateForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n          <div class=\"row text-center\">\n              <div class=\"col-md-12 form-group\">\n               <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\" [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n                <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n                  (click)=\"update(f)\">Update</button>\n                <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n                  <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n                      {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n                    </button>\n        \n                    <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n                        <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                            <!-- <button class=\"btn btn-secondary\" >\n                                Dropdown\n                            </button> -->\n                            <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                                <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                                <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                                <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                            </div>\n                        </div> \n                    </span>    \n                  </div>\n            </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Type<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.type\"\n                name=\"type\" [ngClass]=\"{'is-invalid': f.submitted && type.invalid}\" #type=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                type is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Subject<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.subject\"\n                name=\"subject\" [ngClass]=\"{'is-invalid': f.submitted && subject.invalid}\" #subject=\"ngModel\" required>\n\n              <div class=\"invalid-feedback\">\n                subject is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Body<span class=\"required\">*</span></label>\n              <textarea class=\"form-control\" cols=\"5\" rows=\"13\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" name=\"notes\"\n                [ngClass]=\"{'is-invalid': f.submitted && notes.invalid}\" #notes=\"ngModel\" required></textarea>\n              <div class=\"invalid-feedback\">\n                Body is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n           <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\" [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">Edit</button> -->\n              <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n                  {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n                </button>    \n              </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Email Template</h4>\n    <button type=\"button\"  class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/email-template/email-template.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/email-template/email-template.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VtYWlsLXRlbXBsYXRlL0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGVtYWlsLXRlbXBsYXRlXFxlbWFpbC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0MsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZW1haWwtdGVtcGxhdGUvZW1haWwtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmctdG9we1xyXG4gICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAuZHJvcC1saXN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGFibGUtc3RyaXBlZCB7XHJcbiAgICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIH1cclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/email-template/email-template.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/email-template/email-template.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _email_template_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-template.model */ "./src/app/layout/email-template/email-template.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.emailTemplateList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.isCreate = false;
        this.showAction = false;
        this.actionsList = new _email_template_model__WEBPACK_IMPORTED_MODULE_6__["ActionsList"]();
        this.action = null;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    EmailTemplateComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    EmailTemplateComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    EmailTemplateComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.EmailTemplateGetAll).subscribe(resp => {
        //     this.emailTemplateList = resp as any;
        //     this.spinner(true);
        // });
    };
    EmailTemplateComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.EmailTemplateGetAll +
            pageNumber +
            "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.emailTemplateList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.emailTemplateList.noOfRecords;
        });
    };
    EmailTemplateComponent.prototype.dblSetModel = function (data) {
        this.model = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    EmailTemplateComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    EmailTemplateComponent.prototype.setModel = function (id) {
        this.getEmailById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    EmailTemplateComponent.prototype.getEmailById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.EmailTemplateGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
        });
    };
    EmailTemplateComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    EmailTemplateComponent.prototype.formReset = function () {
        this.model = {};
    };
    EmailTemplateComponent.prototype.create = function (emailTemplateForm) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.EmailTemplateCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, "Contact");
            _this.init();
            _this.formReset();
            emailTemplateForm.resetForm();
            _this.initialGetAll();
            _this.spinner(true);
            _this.paginateConfig.currentPage = 1;
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.statusText, "Contact");
            _this.isCreate = false;
        });
    };
    EmailTemplateComponent.prototype.update = function (emailTemplateForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.EmailTemplateUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, "Email Template ");
            _this.init();
            emailTemplateForm.resetForm();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.statusText, "Email Template ");
        });
    };
    EmailTemplateComponent.prototype.cancelForm = function (emailTemplateForm) {
        this.formReset();
        emailTemplateForm.resetForm();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    EmailTemplateComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.EmailTemplateDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, "Client");
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.showAction = false;
        }, function (err) {
            if (err.status === 200) {
                _this.init();
                _this.close();
                _this.formReset();
                return _this.toastr.success(_this.properties.DELETE, "Client");
            }
            _this.toastr.error(err.error.message, "Client");
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    EmailTemplateComponent.prototype.open = function (event, content) {
        var _this = this;
        if (event) {
            this.selectedRecrdToDel = event;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EmailTemplateComponent.prototype.close = function () {
        this.modalRef.close();
    };
    EmailTemplateComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    EmailTemplateComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    EmailTemplateComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EmailTemplateComponent.prototype, "getScreenSize", null);
    EmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-email-template",
            template: __webpack_require__(/*! ./email-template.component.html */ "./src/app/layout/email-template/email-template.component.html"),
            styles: [__webpack_require__(/*! ./email-template.component.scss */ "./src/app/layout/email-template/email-template.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/layout/email-template/email-template.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/email-template/email-template.model.ts ***!
  \***************************************************************/
/*! exports provided: ActionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.actions = [{ key: 'Edit', value: 'Edit' }, { key: 'Delete', value: 'Delete' }, { key: 'Close', value: 'Close' }];
    }
    return ActionsList;
}());



/***/ }),

/***/ "./src/app/layout/email-template/email-template.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/email-template/email-template.module.ts ***!
  \****************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _email_template_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-template-routing.module */ "./src/app/layout/email-template/email-template-routing.module.ts");
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-template.component */ "./src/app/layout/email-template/email-template.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_template_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_email_template_component__WEBPACK_IMPORTED_MODULE_5__["EmailTemplateComponent"]]
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-template-email-template-module.js.map