(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-history-email-history-module"],{

/***/ "./src/app/layout/email-history/email-history-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/email-history/email-history-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmailHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailHistoryRoutingModule", function() { return EmailHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-history.component */ "./src/app/layout/email-history/email-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _email_history_component__WEBPACK_IMPORTED_MODULE_2__["EmailHistoryComponent"]
    }
];
var EmailHistoryRoutingModule = /** @class */ (function () {
    function EmailHistoryRoutingModule() {
    }
    EmailHistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailHistoryRoutingModule);
    return EmailHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/email-history/email-history.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/email-history/email-history.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-history'\" [heading1]=\"'History'\" [icon2]=\"'fa-envelope'\" [heading2]=\"'Emails'\"> </app-page-header>\n\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\" (keyup)=\"search()\" [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-sm table-hover table-striped \">\n          <thead>\n            <tr>\n              <th width=\"80\">\n                Date\n              </th>\n              <th width=\"180\">\n                Reference Id\n              </th>\n              <th>\n                Sent to\n              </th>\n              <th>\n                Subject\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let ehl of ehList.list| filter:currSearchTxt | paginate: paginateConfig; let i = index\"\n              (click)=\"setModel(ehl.id)\"\n            >\n              <td width=\"80px\">\n                {{ ehl.createdDate | date }}\n              </td>\n              <td width=\"180\">\n                {{ ehl.uuid}}\n              </td>\n              <td style=\"overflow: hidden\">\n                {{ ehl.toEmails }}\n              </td>\n              <td>\n                {{ ehl.subject }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"ehList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"searchBankForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button\n              type=\"submit\"\n              *ngIf=\"enableButtonType == ''\"\n              class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\"\n            >\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">\n                  Edit\n                </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n                <tr *ngIf=\"model.uuid\">\n                    <th width=\"110px\">Reference Id</th>\n                    <td>{{ model?.uuid }}</td>\n                  </tr>\n              <tr *ngIf=\"model.createdDate\">\n                <th width=\"110px\">Date</th>\n                <td>{{ model.createdDate | date:'dd-MM-yyyy'  }}</td>\n              </tr>\n              <tr *ngIf=\"model.toEmails\">\n                <th width=\"110px\">Sent To</th>\n                <td>{{ model.toEmails }}</td>\n              </tr>\n              <tr *ngIf=\"model.cc\">\n                <th width=\"110px\">CC</th>\n                <td>{{ model.cc }}</td>\n              </tr>\n              <tr *ngIf=\"model.bcc\">\n                <th width=\"110px\">BCC</th>\n                <td>{{ model.bcc }}</td>\n              </tr>\n              <tr *ngIf=\"model.subject\">\n                <th width=\"110px\">Subject</th>\n                <td>{{ model.subject }}</td>\n              </tr>\n              <tr *ngIf=\"model.body\">\n                <th width=\"50px\">Body</th>\n                <td><p [innerHTML]=\"model.body\"></p></td>\n              </tr>\n                <!-- <tr *ngFor=\"let ap of model.properties; let i = index\">\n                  <th>{{ap.name}}</th>\n                  <td>{{ap.value}}</td>\n                </tr> -->\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>To<span class=\"required\">*</span></label>\n                <input\n                  class=\"form-control capi\"\n                  [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.toEmails\"\n                  name=\"toemails\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && toemails.invalid }\"\n                  #toemails=\"ngModel\"\n                  required\n                />\n                <div class=\"invalid-feedback\">\n                  to is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>CC</label>\n                <input\n                  class=\"form-control capi\"\n                  [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.cc\"\n                  name=\"cc\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && cc.invalid }\"\n                  #cc=\"ngModel\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>BCC</label>\n                <input\n                  class=\"form-control capi\"\n                  [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.bcc\"\n                  name=\"bcc\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && bcc.invalid }\"\n                  #bcc=\"ngModel\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Subject</label>\n                <textarea\n                  class=\"form-control\"\n                  cols=\"5\"\n                  rows=\"3\"\n                  [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.subject\"\n                  name=\"subject\"\n                  #subject=\"ngModel\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Body</label>\n                <angular-editor [(ngModel)]=\"model.body\" name=\"body\" [config]=\"config\"></angular-editor>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"col-md-12 ml-3\" *ngIf=\"model.properties.length > 0\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.name\"\n                        class=\"form-control\"\n                        name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.value\"\n                        class=\"form-control\"\n                        name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i\n                        class=\"fa fa-minus\"\n                        aria-hidden=\"true\"\n                        id=\"decrease\"\n                        *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"\n                      ></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i\n                      class=\"fa fa-plus\"\n                      aria-hidden=\"true\"\n                      id=\"increase\"\n                      *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"\n                    ></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button\n              type=\"submit\"\n              *ngIf=\"enableButtonType == ''\"\n              class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\"\n            >\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">Update</button>\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/email-history/email-history.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/email-history/email-history.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.bl-trans {\n  border-left: 6px solid transparent; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VtYWlsLWhpc3RvcnkvRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcZW1haWwtaGlzdG9yeVxcZW1haWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUNBQWtDLEVBQ25DOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZW1haWwtaGlzdG9yeS9lbWFpbC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ibC10cmFucyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ucGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kcm9wLWxpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUtc3RyaXBlZCB7XHJcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/email-history/email-history.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/email-history/email-history.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmailHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailHistoryComponent", function() { return EmailHistoryComponent; });
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








var EmailHistoryComponent = /** @class */ (function () {
    function EmailHistoryComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.ehList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__["Properties"]();
        this.showAction = false;
        this.action = null;
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.isCreate = false;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.apName = "";
        this.apValue = "";
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no"
        };
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getScreenSize();
    }
    EmailHistoryComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    EmailHistoryComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.initialGetAll();
        this.spinner(true);
    };
    EmailHistoryComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.SearchGetAll).subscribe(resp => {
        //     this.ehList = resp as any;
        //     this.spinner(true);
        // });
        this.model.properties = [];
    };
    EmailHistoryComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    EmailHistoryComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.EHGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.ehList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.ehList.noOfRecords;
        });
    };
    EmailHistoryComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        //this.config.editable = true;
        this.enableButtonType = "U";
    };
    EmailHistoryComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "U";
        // this.config.editable = false;
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    EmailHistoryComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.EHGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    EmailHistoryComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    EmailHistoryComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
    };
    EmailHistoryComponent.prototype.create = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.EHCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.EMAIL_HISTORY);
            _this.init();
            _this.formReset();
            searchBankForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.EMAIL_HISTORY);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    EmailHistoryComponent.prototype.update = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.EHUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.EMAIL_HISTORY);
            _this.init();
            searchBankForm.resetForm();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.EMAIL_HISTORY);
            _this.spinner(true);
        });
    };
    EmailHistoryComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    EmailHistoryComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.EHDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.EMAIL_HISTORY);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.EMAIL_HISTORY);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    EmailHistoryComponent.prototype.open = function (event, content) {
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
    EmailHistoryComponent.prototype.close = function () {
        this.modalRef.close();
    };
    EmailHistoryComponent.prototype.getDismissReason = function (reason) {
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
    EmailHistoryComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    EmailHistoryComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    EmailHistoryComponent.prototype.search = function () {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        if (this.currSearchTxt.length == 0) {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
            this.initialGetAll();
        }
        else if (this.currSearchTxt.length > 3) {
            var temp = this.http.get(this.urlConstants.SearchAllSearch + this.currSearchTxt);
            temp.subscribe(function (resp) {
                _this.ehList.list = resp;
                _this.paginateConfigDeclare(_this.ehList.list.length, 1, _this.ehList.list.length);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EmailHistoryComponent.prototype, "getScreenSize", null);
    EmailHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "email-history",
            template: __webpack_require__(/*! ./email-history.component.html */ "./src/app/layout/email-history/email-history.component.html"),
            styles: [__webpack_require__(/*! ./email-history.component.scss */ "./src/app/layout/email-history/email-history.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], EmailHistoryComponent);
    return EmailHistoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/email-history/email-history.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/email-history/email-history.module.ts ***!
  \**************************************************************/
/*! exports provided: EmailHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailHistoryModule", function() { return EmailHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _email_history_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-history-routing.module */ "./src/app/layout/email-history/email-history-routing.module.ts");
/* harmony import */ var _email_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-history.component */ "./src/app/layout/email-history/email-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EmailHistoryModule = /** @class */ (function () {
    function EmailHistoryModule() {
    }
    EmailHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _email_history_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmailHistoryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__["AngularEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_email_history_component__WEBPACK_IMPORTED_MODULE_8__["EmailHistoryComponent"]]
        })
    ], EmailHistoryModule);
    return EmailHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=email-history-email-history-module.js.map