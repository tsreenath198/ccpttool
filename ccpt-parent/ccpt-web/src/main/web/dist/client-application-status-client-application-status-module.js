(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-application-status-client-application-status-module"],{

/***/ "./src/app/layout/client-application-status/client-application-status-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClientApplicationStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationStatusRoutingModule", function() { return ClientApplicationStatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_application_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-application-status.component */ "./src/app/layout/client-application-status/client-application-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_application_status_component__WEBPACK_IMPORTED_MODULE_2__["ClientApplicationStatusComponent"]
    }
];
var ClientApplicationStatusRoutingModule = /** @class */ (function () {
    function ClientApplicationStatusRoutingModule() {
    }
    ClientApplicationStatusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientApplicationStatusRoutingModule);
    return ClientApplicationStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client-application-status/client-application-status.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-sticky-note'\" [heading1]=\"'Metadata'\" [icon2]=\"'fa-filter'\"\n    [heading2]=\"'Client Application Status'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"let casl of clientApplicationStatusList.list |  paginate: paginateConfig ; let i = index\"\n              (click)=\"setModel(casl.id)\">\n              <td>\n                {{casl.description}}\n              </td>\n              <td>\n                {{casl.code}}\n              </td>\n              <td>\n                {{casl.ordr}}\n              </td>\n              <td>\n                {{casl.statusType}}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\"\n        *ngIf=\"clientApplicationStatusList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientApplicationStatusForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Code<span class=\"required\">*</span></label>\n              <input class=\"form-control\" maxlength=\"30\" [readonly]=\"readOnlyForm == 'R' || readOnlyForm == 'U'\"\n                [(ngModel)]=\"model.code\" name=\"code\" [ngClass]=\"{'is-invalid': f.submitted && code.invalid}\"\n                #code=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                code is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Status Type<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"statustype\" [disabled]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.statusType\" [ngClass]=\"{ 'is-invalid': f.submitted && statustype.invalid }\"\n                #statustype=\"ngModel\" required>\n                <option *ngFor=\"let stl of properties.STATUS\" [ngValue]=\"stl\">\n                  {{ stl }}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Status Type is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Order<span class=\"required\">*</span></label>\n              <input type=\"number\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.ordr\"\n                name=\"order\" [ngClass]=\"{'is-invalid': f.submitted && order.invalid}\" #order=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                order is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description<span class=\"required\">*</span></label>\n              <textarea cols=\"10\" rows=\"10\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" name=\"decription\"\n                [ngClass]=\"{'is-invalid': f.submitted && description.invalid}\" #description=\"ngModel\"\n                required></textarea>\n              <div class=\"invalid-feedback\">\n                description is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{properties.APP_STATUS}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{properties.CONFIRM_DELETE}} ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/client-application-status/client-application-status.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC1hcHBsaWNhdGlvbi1zdGF0dXMvRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcY2xpZW50LWFwcGxpY2F0aW9uLXN0YXR1c1xcY2xpZW50LWFwcGxpY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50LWFwcGxpY2F0aW9uLXN0YXR1cy9jbGllbnQtYXBwbGljYXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/client-application-status/client-application-status.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClientApplicationStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationStatusComponent", function() { return ClientApplicationStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _client_application_status_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-application-status.model */ "./src/app/layout/client-application-status/client-application-status.model.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ClientApplicationStatusComponent = /** @class */ (function () {
    function ClientApplicationStatusComponent(http, toastr, modalService, router) {
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.model = {};
        this.clientApplicationStatusList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.isCreate = false;
        this.showAction = false;
        this.actionsList = new _client_application_status_model__WEBPACK_IMPORTED_MODULE_4__["ActionsList"]();
        this.action = null;
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ClientApplicationStatusComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientApplicationStatusComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    ClientApplicationStatusComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.CASGetAll).subscribe(resp => {
        //     this.clientApplicationStatusList = resp as any;
        //     this.spinner(true);
        // });
    };
    ClientApplicationStatusComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CASGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.clientApplicationStatusList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientApplicationStatusList.noOfRecords;
        });
    };
    /**
     * @param data consists the  table current selected row data
     */
    ClientApplicationStatusComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    ClientApplicationStatusComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    /**
     * @param data consists the  table current selected row data
     */
    ClientApplicationStatusComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ClientApplicationStatusComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.CASGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
        });
    };
    ClientApplicationStatusComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    ClientApplicationStatusComponent.prototype.formReset = function () {
        this.model = {};
    };
    /**
     * @param CASForm consists the form instance
     */
    ClientApplicationStatusComponent.prototype.create = function (CASForm) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.CASCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.APP_STATUS);
            _this.init();
            _this.formReset();
            CASForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.spinner(true);
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.APP_STATUS);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    /**
     * @param CASForm consists the form instance
     */
    ClientApplicationStatusComponent.prototype.update = function (CASForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.CASCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.APP_STATUS);
            _this.formReset();
            _this.init();
            CASForm.resetForm();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.APP_STATUS);
            _this.spinner(true);
        });
    };
    /**
     * @param CASForm consists the form instance
     */
    ClientApplicationStatusComponent.prototype.cancelForm = function (CASForm) {
        this.formReset();
        CASForm.resetForm();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    ClientApplicationStatusComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CASDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.APP_STATUS);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.APP_STATUS);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientApplicationStatusComponent.prototype.open = function (event, content) {
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
    ClientApplicationStatusComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientApplicationStatusComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ClientApplicationStatusComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientApplicationStatusComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientApplicationStatusComponent.prototype, "getScreenSize", null);
    ClientApplicationStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-application-status",
            template: __webpack_require__(/*! ./client-application-status.component.html */ "./src/app/layout/client-application-status/client-application-status.component.html"),
            styles: [__webpack_require__(/*! ./client-application-status.component.scss */ "./src/app/layout/client-application-status/client-application-status.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ClientApplicationStatusComponent);
    return ClientApplicationStatusComponent;
}());



/***/ }),

/***/ "./src/app/layout/client-application-status/client-application-status.model.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status.model.ts ***!
  \*************************************************************************************/
/*! exports provided: ActionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.actions = [
            { key: "Edit", value: "Edit" },
            { key: "Delete", value: "Delete" },
            { key: "Close", value: "Close" }
        ];
    }
    return ActionsList;
}());



/***/ }),

/***/ "./src/app/layout/client-application-status/client-application-status.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/client-application-status/client-application-status.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientApplicationStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationStatusModule", function() { return ClientApplicationStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_application_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-application-status.component */ "./src/app/layout/client-application-status/client-application-status.component.ts");
/* harmony import */ var _client_application_status_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-application-status-routing.module */ "./src/app/layout/client-application-status/client-application-status-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientApplicationStatusModule = /** @class */ (function () {
    function ClientApplicationStatusModule() {
    }
    ClientApplicationStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_application_status_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClientApplicationStatusRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["ActionListModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ],
            declarations: [_client_application_status_component__WEBPACK_IMPORTED_MODULE_5__["ClientApplicationStatusComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]]
        })
    ], ClientApplicationStatusModule);
    return ClientApplicationStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-application-status-client-application-status-module.js.map