(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-call-history-client-call-history-module"],{

/***/ "./src/app/layout/client-call-history/client-call-history-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/client-call-history/client-call-history-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientCallHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCallHistoryRoutingModule", function() { return ClientCallHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_call_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-call-history.component */ "./src/app/layout/client-call-history/client-call-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_call_history_component__WEBPACK_IMPORTED_MODULE_2__["ClientCallHistoryComponent"]
    }
];
var ClientCallHistoryRoutingModule = /** @class */ (function () {
    function ClientCallHistoryRoutingModule() {
    }
    ClientCallHistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientCallHistoryRoutingModule);
    return ClientCallHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client-call-history/client-call-history.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/client-call-history/client-call-history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <!-- <span class=\"fa fa-fw fa-building\"></span><span class=\"fa fa-fw fa-phone\"></span> -->\n  <app-page-header [icon2]=\"'fa-building'\" [icon1]=\"'fa-phone'\" [heading1]=\"'Calls'\" [heading2]=\"'Client Call History'\">\n  </app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 table-wrapper-scroll-y my-custom-scrollbar\" [style.height.px]=\"screenHeight\">\n        <div *ngIf=\"clientCallHistoryList; else tableElse\">\n          <table class=\"table table-hover table-striped\">\n            <thead>\n              <tr>\n                <th>\n                  Caller\n                </th>\n                <th>\n                  Client Pos\n                </th>\n                <th width=\"150\">\n                  Called Date\n                </th>\n                <!-- <th>\n                        <span class=\"pull-right\">Action</span>\n                    </th> -->\n              </tr>\n            </thead>\n            <tbody class=\"overflow-ele-scroll\">\n              <tr *ngFor=\"let cchl of clientCallHistoryList.list | paginate: paginateConfig ; let i = index\"\n                (click)=\"setModel(cchl.id)\">\n                <td>\n                  {{cchl.calledBy.fullname}}\n                </td>\n                <td>\n                  {{cchl.clientPosition.generatedCode}}\n                </td>\n                <td>\n                  {{cchl.calledDate}}\n                </td>\n                <!-- <td width=\"100\">\n                  <app-action [trashContent]=\"trashContent\" [id]=\"cchl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"></app-action>\n                </td> -->\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-12 justify-content-center mb-5\"\n          *ngIf=\"clientCallHistoryList.noOfRecords > properties.ITEMSPERPAGE\">\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n        <ng-template #tableElse>\n          <h3>Client History is empty</h3>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientCallHistoryForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\" *ngIf=\"loggedInRole != 'User'\">\n          <div class=\"form-group col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == ''||enableButtonType == 'U'\"\n              class=\"btn btn-secondary ml-3\">{{enableButtonType != '' ? 'Close' : 'Clear'}}</button>\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Called By<span class=\"required\">*</span></label>\n              <select class=\"form-control\" [disabled]=\"readOnlyForm == 'R'\" name=\"cn\" [(ngModel)]=\"model.calledBy\"\n                [ngClass]=\"{'is-invalid': f.submitted && cn.invalid}\" #cn=\"ngModel\" required>\n                <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n                  {{rl.name}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Called By is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Called Date <span class=\"required\">*</span></label>\n              <input class=\"form-control\" type=\"date\" name=\"calledDate\" [readonly]=\"readOnlyForm == 'R'\"\n                max=\"9999-12-31\" placeholder=\"Called Date\" [(ngModel)]=\"model.calledDate\" required>\n            </div>\n            <div class=\"invalid-feedback\">\n              Called Date is mandatory\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <hr>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Client Position<span class=\"required\">*</span></label>\n\n              <select class=\"form-control\" [disabled]=\"readOnlyForm == 'R'\" name=\"cp\" [(ngModel)]=\"model.cpId\"\n                [ngClass]=\"{'is-invalid': f.submitted && cp.invalid}\" #cp=\"ngModel\" required>\n                <option *ngFor=\"let cpl of clientPositionList\" [ngValue]=\"cpl.id\">\n                  {{cpl.name}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Client Position is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Notes<span class=\"required\">*</span></label>\n              <textarea class=\"form-control\" name=\"note\" cols=\"10\" rows=\"10\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" [ngClass]=\"{'is-invalid': f.submitted && note.invalid}\" #note=\"ngModel\"\n                required></textarea>\n              <div class=\"invalid-feedback\">\n                Notes is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\" *ngIf=\"loggedInRole != 'User'\">\n          <div class=\"form-group col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\"\n              class=\"btn btn-secondary ml-3\">{{enableButtonType != '' ? 'Close' : 'Clear'}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Client Call History</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/client-call-history/client-call-history.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/client-call-history/client-call-history.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.required {\n  color: red; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC1jYWxsLWhpc3RvcnkvRDpcXENDUFQgTUFJTlxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcY2xpZW50LWNhbGwtaGlzdG9yeVxcY2xpZW50LWNhbGwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNIO0VBQ0UsV0FBVSxFQUNYOztBQUNDO0VBQ0UsV0FBVSxFQUNaOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50LWNhbGwtaGlzdG9yeS9jbGllbnQtY2FsbC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkOyBcclxufVxyXG4gIC5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkOyBcclxuIH0gIFxyXG4gLnBhZGRpbmctdG9we1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZHJvcC1saXN0OmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUtc3RyaXBlZCB7XHJcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/client-call-history/client-call-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/client-call-history/client-call-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientCallHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCallHistoryComponent", function() { return ClientCallHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _consultant_call_history_consultant_call_history_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../consultant-call-history/consultant-call-history.model */ "./src/app/layout/consultant-call-history/consultant-call-history.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClientCallHistoryComponent = /** @class */ (function () {
    function ClientCallHistoryComponent(http, toastr, modalService, router) {
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.model = {};
        this.clientCallHistoryList = [];
        this.clientPositionList = [];
        this.clientList = [];
        this.recruiterList = [];
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__["Properties"]();
        this.showAction = false;
        this.actionsList = new _consultant_call_history_consultant_call_history_model__WEBPACK_IMPORTED_MODULE_8__["ActionsList"]();
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.apName = "";
        this.apValue = "";
        this.loggedInRole = "";
        this.isCreate = false;
        this.pageSize = 10;
        this.getCplPromise = this.http.get(this.urlConstants.CPDropdown);
        this.getClPromise = this.http.get(this.urlConstants.ClientGetAll);
        this.getRlPromise = this.http.get(this.urlConstants.RDropdown);
        //public cchGetAllPromise = this.http.get(this.urlConstants.CCHGetAll);
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ClientCallHistoryComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientCallHistoryComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.joins();
        this.init();
        this.loggedInRole = sessionStorage.getItem("role");
    };
    ClientCallHistoryComponent.prototype.joins = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(function (listofrecords) {
            _this.clientPositionList = listofrecords[0];
            _this.clientList = listofrecords[1];
            _this.recruiterList = listofrecords[2];
            _this.getRecruiterId();
            _this.getTodaysDate();
            _this.initialGetAll();
            _this.spinner(true);
        });
    };
    ClientCallHistoryComponent.prototype.init = function () {
        // this.cchGetAllPromise.subscribe(resp => {
        //   this.clientCallHistoryList = resp as Array<ClientCallHistoryModel>;
        //   this.spinner(true);
        // });
        this.model.properties = [];
    };
    ClientCallHistoryComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CCHGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.clientCallHistoryList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientCallHistoryList.noOfRecords;
        });
    };
    ClientCallHistoryComponent.prototype.getRecruiterId = function () {
        var _this = this;
        var temp = sessionStorage.getItem("username");
        this.recruiterList.forEach(function (rl) {
            if (rl.email === temp) {
                _this.model.calledBy = rl.id;
            }
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    ClientCallHistoryComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        var yyyy = today.getFullYear();
        var temp = yyyy + "-" + mm + "-" + dd;
        this.model.calledDate = temp;
    };
    ClientCallHistoryComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    ClientCallHistoryComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getCCHById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ClientCallHistoryComponent.prototype.getCCHById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.CCHGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
        });
    };
    ClientCallHistoryComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        this.model["cpId"] = temp.clientPosition.id;
        this.model["calledBy"] = temp.calledBy.id;
        return this.model;
    };
    ClientCallHistoryComponent.prototype.propertiesListIncrement = function (event, i) {
        switch (event.id) {
            case "decrease": {
                this.model.properties.splice(i, 1);
                break;
            }
            case "increase": {
                if (this.model.properties == null) {
                    this.model.properties = [];
                    this.model.properties.push({
                        name: this.apName,
                        value: this.apValue
                    });
                    this.apName = "";
                    this.apValue = "";
                }
                else if (this.model.properties.length == 0) {
                    this.model.properties.push({
                        name: this.apName,
                        value: this.apValue
                    });
                    this.apName = "";
                    this.apValue = "";
                }
                else {
                    var propertyExist = void 0;
                    for (var i_1 = 0; i_1 < this.model.properties.length; i_1++) {
                        if (this.model.properties[i_1].name == this.apName &&
                            this.model.properties[i_1].value == this.apValue) {
                            propertyExist = true;
                        }
                        else {
                            propertyExist = false;
                        }
                    }
                    if (propertyExist) {
                        this.toastr.error(this.properties.PROPERTY_EXIST, this.properties.PROPERTIES);
                    }
                    else {
                        this.model.properties.push({
                            name: this.apName,
                            value: this.apValue
                        });
                        this.apName = "";
                        this.apValue = "";
                    }
                }
                break;
            }
        }
    };
    ClientCallHistoryComponent.prototype.actions = function (value, trashContent, form) {
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
    ClientCallHistoryComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    ClientCallHistoryComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
        this.getRecruiterId();
        this.getTodaysDate();
    };
    ClientCallHistoryComponent.prototype.create = function (clientCallHistoryForm) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.CCHCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CLI_C_H);
            _this.init();
            _this.getRecruiterId();
            _this.isCreate = false;
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.getTodaysDate();
            _this.formReset();
            _this.spinner(true);
            clientCallHistoryForm.resetForm();
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CLI_C_H);
            _this.spinner(true);
        });
    };
    ClientCallHistoryComponent.prototype.update = function (clientCallHistoryForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.CCHUpdate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CLI_C_H);
            _this.formButtonsToggler = true;
            _this.formReset();
            _this.init();
            _this.getRecruiterId();
            _this.getTodaysDate();
            _this.spinner(true);
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            clientCallHistoryForm.resetForm();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CLI_C_H);
            _this.spinner(true);
        });
    };
    ClientCallHistoryComponent.prototype.cancelForm = function (clientCallHistoryForm) {
        clientCallHistoryForm.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    ClientCallHistoryComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CCHDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CLI_C_H);
            _this.init();
            _this.getRecruiterId();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.getTodaysDate();
            _this.close();
            _this.initialGetAll();
            _this.formReset();
            _this.spinner(true);
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CLI_C_H);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientCallHistoryComponent.prototype.open = function (event, content) {
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
    ClientCallHistoryComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientCallHistoryComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ClientCallHistoryComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientCallHistoryComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientCallHistoryComponent.prototype, "getScreenSize", null);
    ClientCallHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-call-history",
            template: __webpack_require__(/*! ./client-call-history.component.html */ "./src/app/layout/client-call-history/client-call-history.component.html"),
            styles: [__webpack_require__(/*! ./client-call-history.component.scss */ "./src/app/layout/client-call-history/client-call-history.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ClientCallHistoryComponent);
    return ClientCallHistoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/client-call-history/client-call-history.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/client-call-history/client-call-history.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClientCallHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCallHistoryModule", function() { return ClientCallHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_call_history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-call-history-routing.module */ "./src/app/layout/client-call-history/client-call-history-routing.module.ts");
/* harmony import */ var _client_call_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-call-history.component */ "./src/app/layout/client-call-history/client-call-history.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientCallHistoryModule = /** @class */ (function () {
    function ClientCallHistoryModule() {
    }
    ClientCallHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _client_call_history_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientCallHistoryRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["ActionListModule"]
            ],
            declarations: [_client_call_history_component__WEBPACK_IMPORTED_MODULE_4__["ClientCallHistoryComponent"]]
        })
    ], ClientCallHistoryModule);
    return ClientCallHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-call-history-client-call-history-module.js.map