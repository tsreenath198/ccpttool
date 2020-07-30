(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultant-status-consultant-status-module"],{

/***/ "./src/app/layout/consultant-status/consultant-status-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/consultant-status/consultant-status-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ConsultantStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantStatusRoutingModule", function() { return ConsultantStatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consultant_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultant-status.component */ "./src/app/layout/consultant-status/consultant-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _consultant_status_component__WEBPACK_IMPORTED_MODULE_2__["ConsultantStatusComponent"]
    }
];
var ConsultantStatusRoutingModule = /** @class */ (function () {
    function ConsultantStatusRoutingModule() {
    }
    ConsultantStatusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultantStatusRoutingModule);
    return ConsultantStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consultant-status/consultant-status.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/consultant-status/consultant-status.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon2]=\"'fa-filter'\" [heading2]=\"'Consultant Status'\" [icon1]=\"'fa-sticky-note'\"\n    [heading1]=\"'Metadata'\"></app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"let csl of consultantStatusList.list | paginate: paginateConfig ; let i = index\"\n              (click)=\"setModel(csl.id)\">\n              <td>\n                {{csl.description}}</td>\n              <td>\n                {{csl.code}}\n              </td>\n              <td>\n                {{csl.statusType}}\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"csl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"></app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\"\n        *ngIf=\"consultantStatusList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"consultantStatusForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm =='R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span> </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Code<span class=\"required\">*</span></label>\n              <input class=\"form-control\" maxlength=\"30\" [readonly]=\"readOnlyForm == 'R' || readOnlyForm == 'U'\"\n                [(ngModel)]=\"model.code\" name=\"code\" [ngClass]=\"{'is-invalid': f.submitted && code.invalid}\"\n                #code=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                code is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Status Type<span class=\"required\">*</span></label>\n\n\n\n              <select class=\"form-control\" name=\"statustype\" [disabled]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.statusType\" [ngClass]=\"{ 'is-invalid': f.submitted && statustype.invalid }\"\n                #statustype=\"ngModel\" required>\n                <option *ngFor=\"let stl of properties.STATUS\" [ngValue]=\"stl\">\n                  {{ stl }}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Status Type is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Order<span class=\"required\">*</span></label>\n              <input type=\"number\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R' \" [(ngModel)]=\"model.ordr\"\n                name=\"order\" [ngClass]=\"{'is-invalid': f.submitted && order.invalid}\" #order=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                order is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description<span class=\"required\">*</span></label>\n              <textarea cols=\"10\" rows=\"10\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" name=\"decription\"\n                [ngClass]=\"{'is-invalid': f.submitted && description.invalid}\" #description=\"ngModel\"\n                required></textarea>\n              <div class=\"invalid-feedback\">\n                description is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{properties.CON_STATUS}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{properties.CONFIRM_DELETE}} ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/consultant-status/consultant-status.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/consultant-status/consultant-status.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnN1bHRhbnQtc3RhdHVzL0Q6XFxjY3B0dG9vbC5naXRcXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGNvbnN1bHRhbnQtc3RhdHVzXFxjb25zdWx0YW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29uc3VsdGFudC1zdGF0dXMvY29uc3VsdGFudC1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZHJvcC1saXN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQge1xyXG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/consultant-status/consultant-status.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/consultant-status/consultant-status.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConsultantStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantStatusComponent", function() { return ConsultantStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConsultantStatusComponent = /** @class */ (function () {
    function ConsultantStatusComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.consultantStatusList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__["Properties"]();
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.currSearchTxt = "";
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.isCreate = false;
        this.showAction = false;
        this.action = null;
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.getScreenSize();
    }
    ConsultantStatusComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ConsultantStatusComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    ConsultantStatusComponent.prototype.init = function () {
        var _this = this;
        this.spinner(false);
        this.http.get(this.urlConstants.CSGetAll).subscribe(function (resp) {
            _this.consultantStatusList = resp;
            _this.spinner(true);
        });
    };
    ConsultantStatusComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CSGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.consultantStatusList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.consultantStatusList.noOfRecords;
        });
    };
    ConsultantStatusComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    ConsultantStatusComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    ConsultantStatusComponent.prototype.setModel = function (id) {
        this.getById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ConsultantStatusComponent.prototype.getById = function (id) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.get(this.urlConstants.CSGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
        });
    };
    ConsultantStatusComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    ConsultantStatusComponent.prototype.formReset = function () {
        this.model = {};
    };
    ConsultantStatusComponent.prototype.actions = function (value, trashContent, form) {
        console.log(value);
        switch (value) {
            case "Delete": {
                this.open(this.model.id, trashContent);
                break;
            }
            case "Edit": {
                this.enableFormEditable();
                break;
            }
            case "Close": {
                this.cancelForm(form);
            }
        }
    };
    ConsultantStatusComponent.prototype.create = function (consultantStatusForm) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.CSCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CON_STATUS);
            _this.init();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            consultantStatusForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_STATUS);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    ConsultantStatusComponent.prototype.update = function (consultantStatusForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.CSUpdate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CON_STATUS);
            _this.formButtonsToggler = true;
            _this.formReset();
            _this.init();
            consultantStatusForm.resetForm();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_STATUS);
            _this.spinner(true);
        });
    };
    ConsultantStatusComponent.prototype.cancelForm = function (consultantStatusForm) {
        this.formReset();
        consultantStatusForm.resetForm();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    ConsultantStatusComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CSDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CON_STATUS);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_STATUS);
            _this.spinner(true);
        });
    };
    ConsultantStatusComponent.prototype.open = function (event, content) {
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
    ConsultantStatusComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ConsultantStatusComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ConsultantStatusComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ConsultantStatusComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConsultantStatusComponent.prototype, "getScreenSize", null);
    ConsultantStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-consultant-status",
            template: __webpack_require__(/*! ./consultant-status.component.html */ "./src/app/layout/consultant-status/consultant-status.component.html"),
            styles: [__webpack_require__(/*! ./consultant-status.component.scss */ "./src/app/layout/consultant-status/consultant-status.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ConsultantStatusComponent);
    return ConsultantStatusComponent;
}());



/***/ }),

/***/ "./src/app/layout/consultant-status/consultant-status.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/consultant-status/consultant-status.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConsultantStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantStatusModule", function() { return ConsultantStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _consultant_status_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultant-status-routing.module */ "./src/app/layout/consultant-status/consultant-status-routing.module.ts");
/* harmony import */ var _consultant_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant-status.component */ "./src/app/layout/consultant-status/consultant-status.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConsultantStatusModule = /** @class */ (function () {
    function ConsultantStatusModule() {
    }
    ConsultantStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _consultant_status_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsultantStatusRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"]
            ],
            declarations: [_consultant_status_component__WEBPACK_IMPORTED_MODULE_5__["ConsultantStatusComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]]
        })
    ], ConsultantStatusModule);
    return ConsultantStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=consultant-status-consultant-status-module.js.map