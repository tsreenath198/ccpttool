(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultant-call-history-consultant-call-history-module"],{

/***/ "./src/app/layout/consultant-call-history/consultant-call-history-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/consultant-call-history/consultant-call-history-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ConsultantCallHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantCallHistoryRoutingModule", function() { return ConsultantCallHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consultant_call_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultant-call-history.component */ "./src/app/layout/consultant-call-history/consultant-call-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _consultant_call_history_component__WEBPACK_IMPORTED_MODULE_2__["ConsultantCallHistoryComponent"]
    }
];
var ConsultantCallHistoryRoutingModule = /** @class */ (function () {
    function ConsultantCallHistoryRoutingModule() {
    }
    ConsultantCallHistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultantCallHistoryRoutingModule);
    return ConsultantCallHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consultant-call-history/consultant-call-history.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/consultant-call-history/consultant-call-history.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon2]=\"'fa-users'\" [icon1]=\"'fa-phone'\" [heading1]=\"'Calls'\"\n    [heading2]=\"'Consultant Call History'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" />\n        </div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <!-- (click)=\"sort('caller')\" -->\n              <th>\n                Caller\n                <!-- <span class=\"fa fa-sort\" *ngIf=\"key =='caller'\" [ngClass]=\"{'fa fa-chevron-up':reverse,'fa fa-chevron-down':!reverse}\"></span> -->\n              </th>\n              <!-- (click)=\"sort('consultant')\" -->\n              <th>\n                Consultant\n                <!-- <span class=\"fa fa-sort\" *ngIf=\"key =='consultant'\" [ngClass]=\"{'fa fa-chevron-up':reverse,'fa fa-chevron-down':!reverse}\"></span> -->\n              </th>\n              <th>\n                Client Position\n              </th>\n              <th width=\"150\">\n                Called Date\n              </th>\n            </tr>\n          </thead>\n          <tbody class=\"overflow-ele-scroll\">\n            <!-- | orderBy: key : reverse -->\n            <tr *ngFor=\"let cchl of consultantCallHistoryList.list  | paginate: paginateConfig; let i = index\"\n              (click)=\"setModel(cchl.id)\">\n              <td>\n                {{ cchl.calledBy.fullname }}\n              </td>\n              <td>\n                {{ cchl.consultant.fullname }}\n              </td>\n              <td>\n                <span *ngIf=\"cchl.clientPosition != null\">{{cchl.clientPosition.generatedCode}}</span>\n                <span *ngIf=\"cchl.clientPosition == null\">&nbsp;</span>\n              </td>\n              <td>\n                {{ cchl.calledDate }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\"\n        *ngIf=\"consultantCallHistoryList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        <!-- <ngb-pagination [collectionSize]=\"consultantListLength\" [(page)]=\"page\" [ellipses]=\"false\"\n          (pageChange)=\"pageChange($event)\" [maxSize]=\"pageSize\" [pageSize]=\"pageSize\" [rotate]=\"true\"\n          [boundaryLinks]=\"true\">\n        </ngb-pagination> -->\n      </div>\n    </div>\n\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientPositionForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"form-group col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Called By<span class=\"required\">*</span></label>\n              <select class=\"form-control\" [disabled]=\"readOnlyForm == 'R'\" name=\"cn\" [(ngModel)]=\"model.calledBy\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && cn.invalid }\" #cn=\"ngModel\" required>\n                <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n                  {{ rl.name }}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Called By is mandatory\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Called Date <span class=\"required\">*</span></label>\n              <input class=\"form-control\" type=\"date\" name=\"calledDate\" [readonly]=\"readOnlyForm == 'R'\"\n                max=\"9999-12-31\" placeholder=\"Called Date\" [(ngModel)]=\"model.calledDate\" required />\n            </div>\n            <div class=\"invalid-feedback\">\n              Called date is mandatory\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <hr />\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Client Position<span class=\"required\">*</span></label>\n\n              <select class=\"form-control\" [disabled]=\"readOnlyForm == 'R'\" name=\"cp\" [(ngModel)]=\"model.cpId\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && cp.invalid }\" #cp=\"ngModel\" required>\n                <option *ngFor=\"let cpl of clientPositionList\" [ngValue]=\"cpl.id\">\n                  {{ cpl.name }}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Client Position is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Consultant<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"consultant\" [disabled]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.consultantId\" (change)=\"openSearchCon($event.target.value,searchConsultant)\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && consultant.invalid }\" #consultant=\"ngModel\" required>\n                <option *ngFor=\"let consultant of consultantList\" [ngValue]=\"consultant.id\">{{ consultant.name }}\n                </option>\n                <option value=\"more\">More</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Consultant is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Notes<span class=\"required\">*</span></label>\n              <textarea class=\"form-control\" name=\"description\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" [ngClass]=\"{ 'is-invalid': f.submitted && description.invalid }\"\n                #description=\"ngModel\" cols=\"10\" rows=\"10\" required></textarea>\n              <div class=\"invalid-feedback\">\n                Notes is mandatory\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                    [readonly]=\"readOnlyForm == 'R'\" (keyup)=\"enter($event)\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{properties.CON_C_H}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{properties.CONFIRM_DELETE}} ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #searchConsultant let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Search Consultant</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n          (keyup)=\"popupSearchConsultant()\" [(ngModel)]=\"searchCon\" />\n      </div>\n    </div>\n    <div *ngIf=\"searchConsultantList.length > 0 ; else noDataFound\" class=\"table-responsive tableFixHead  mt-2\"\n      id=\"viewTable\" [style.height.px]=\"screenHeight\">\n      <table class=\"table table-sm table-hover table-striped\">\n        <thead>\n          <tr>\n            <th>\n              Name\n            </th>\n            <th>\n              Phone\n            </th>\n            <th>Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let cl of searchConsultantList ; let i = index\" (click)=setSearch(cl);>\n            <td class=\"table-data-padding \">\n              {{ cl.fullname }}\n            </td>\n            <td>\n              {{ cl.phone }}\n            </td>\n            <td>\n              {{ cl.email }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #noDataFound>\n      <span *ngIf=\"searchCon.length > 2\" class=\"text-center\">\n        <h3>No Data Found</h3>\n      </span>\n    </ng-template>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/consultant-call-history/consultant-call-history.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/consultant-call-history/consultant-call-history.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnN1bHRhbnQtY2FsbC1oaXN0b3J5L0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGNvbnN1bHRhbnQtY2FsbC1oaXN0b3J5XFxjb25zdWx0YW50LWNhbGwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUVJLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb25zdWx0YW50LWNhbGwtaGlzdG9yeS9jb25zdWx0YW50LWNhbGwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG50aGVhZCA+IHRyID4gdGgge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kcm9wLWxpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUtc3RyaXBlZCB7XHJcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/consultant-call-history/consultant-call-history.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/consultant-call-history/consultant-call-history.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConsultantCallHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantCallHistoryComponent", function() { return ConsultantCallHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _consultant_call_history_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant-call-history.model */ "./src/app/layout/consultant-call-history/consultant-call-history.model.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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










var ConsultantCallHistoryComponent = /** @class */ (function () {
    function ConsultantCallHistoryComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.consultantCallHistoryList = [];
        this.currSearchTxt = "";
        this.searchCon = "";
        this.searchConsultantList = [];
        this.pagedConsultantList = [];
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.consultantList = [];
        this.clientPositionList = [];
        this.recruiterList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_6__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__["Properties"]();
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.actionsList = new _consultant_call_history_model__WEBPACK_IMPORTED_MODULE_3__["ActionsList"]();
        this.action = null;
        this.isCreate = false;
        this.apName = "";
        this.apValue = "";
        this.key = "name";
        this.reverse = false;
        this.page = 1;
        this.pageSize = 20;
        this.incr = 0;
        this.getCplPromise = this.http.get(this.urlConstants.CPDropdown);
        this.getClPromise = this.http.get(this.urlConstants.CDropdown);
        this.getRlPromise = this.http.get(this.urlConstants.RDropdown);
        this.cochGetAllPromise = this.http.get(this.urlConstants.CoCHGetAll);
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ConsultantCallHistoryComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight - 237;
    };
    ConsultantCallHistoryComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.joins();
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    ConsultantCallHistoryComponent.prototype.joins = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(function (listofrecords) {
            _this.clientPositionList = listofrecords[0];
            _this.consultantList = listofrecords[1];
            _this.recruiterList = listofrecords[2];
            _this.callAfterFormReset();
        });
    };
    ConsultantCallHistoryComponent.prototype.init = function () {
        // this.spinner(false);
        // this.cochGetAllPromise.subscribe(resp => {
        //   this.consultantCallHistoryList = resp as Array<ConsultantCallHistoryModel>;
        //   this.spinner(true);
        //   // this.pagedConsultantList = resp as any;
        //   // this.consultantListLength = this.consultantCallHistoryList.length;
        //   // this.pageChange(this.page);
        // });
        this.model.properties = [];
        this.page = 1;
    };
    ConsultantCallHistoryComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CoCHGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.consultantCallHistoryList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.consultantCallHistoryList.noOfRecords;
        });
    };
    ConsultantCallHistoryComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    ConsultantCallHistoryComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getConsultantById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ConsultantCallHistoryComponent.prototype.getConsultantById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.CoCHGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
        });
    };
    ConsultantCallHistoryComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        var consultant = {
            name: temp.fullname,
            id: temp.id,
            phone: temp.phone,
            email: temp.email
        };
        this.consultantList.push(consultant);
        this.model = temp;
        this.model["consultantId"] = temp.consultant.id;
        this.model["calledBy"] = temp.calledBy.id;
        this.model["cpId"] = temp.clientPosition ? temp.clientPosition.id : 0;
        this.model.properties =
            this.model.properties == null ? [] : this.model.properties;
        return this.model;
    };
    ConsultantCallHistoryComponent.prototype.propertiesListIncrement = function (event, i) {
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
    ConsultantCallHistoryComponent.prototype.actions = function (value, trashContent, form) {
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
    ConsultantCallHistoryComponent.prototype.enter = function (event) {
        if (event.keyCode === 13) {
            this.propertiesListIncrement(event.target, 0);
        }
    };
    ConsultantCallHistoryComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    ConsultantCallHistoryComponent.prototype.formReset = function () {
        this.model = { calledBy: 0, calledDate: "" };
        this.model.properties = [];
    };
    ConsultantCallHistoryComponent.prototype.create = function (consultantCallHistory) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        var temp = this.http.post(this.model, this.urlConstants.CoCHCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CON_C_H);
            _this.init();
            consultantCallHistory.resetForm();
            _this.formReset();
            _this.callAfterFormReset();
            _this.spinner(true);
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_C_H);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    ConsultantCallHistoryComponent.prototype.update = function (consultantCallHistory) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.CoCHUpdate);
        temp.subscribe(function (resp) {
            consultantCallHistory.resetForm();
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CON_C_H);
            _this.init();
            _this.callAfterFormReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_C_H);
            _this.spinner(true);
        });
    };
    ConsultantCallHistoryComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.callAfterFormReset();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    ConsultantCallHistoryComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CoCHDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CON_C_H);
            _this.init();
            _this.close();
            _this.formReset();
            _this.callAfterFormReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_C_H);
            _this.spinner(true);
        });
    };
    ConsultantCallHistoryComponent.prototype.getRecruiterId = function () {
        var _this = this;
        var temp = sessionStorage.getItem("username");
        this.recruiterList.forEach(function (rl) {
            if (rl.email === temp) {
                _this.model.calledBy = rl.id;
            }
        });
    };
    ConsultantCallHistoryComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        var yyyy = today.getFullYear();
        var temp = yyyy + "-" + mm + "-" + dd;
        this.model.calledDate = temp;
    };
    ConsultantCallHistoryComponent.prototype.callAfterFormReset = function () {
        this.getRecruiterId();
        this.getTodaysDate();
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ConsultantCallHistoryComponent.prototype.open = function (event, content) {
        var _this = this;
        if (event) {
            this.selectedRecrdToDel = event;
        }
        this.modalRef = this.modalService.open(content, {
            size: "lg",
            backdrop: "static"
        });
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsultantCallHistoryComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ConsultantCallHistoryComponent.prototype.getDismissReason = function (reason) {
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
    // public pageChange(event) {
    //   const from = ((event - 1) * this.pageSize);
    //   const lst = this.consultantCallHistoryList;
    //   const uplst = lst.slice(from, from + this.pageSize);
    //   this.pagedConsultantList = uplst;
    // }
    ConsultantCallHistoryComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    ConsultantCallHistoryComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ConsultantCallHistoryComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ConsultantCallHistoryComponent.prototype.popupSearchConsultant = function () {
        var _this = this;
        if (this.searchCon.length > 2) {
            var request = this.http.get(this.urlConstants.CSearch + this.searchCon);
            request.subscribe(function (resp) {
                _this.searchConsultantList = resp;
            });
        }
        else if (this.searchCon.length == 0) {
            this.searchConsultantList = [];
        }
    };
    ConsultantCallHistoryComponent.prototype.openSearchCon = function (value, content) {
        if (value == "more") {
            this.searchConsultantList = [];
            this.open(this.model.id, content);
        }
    };
    ConsultantCallHistoryComponent.prototype.setSearch = function (data) {
        var temp = {
            name: data.fullname,
            id: data.id,
            phone: data.phone,
            email: data.email
        };
        this.consultantList.push(temp);
        this.model.consultantId = data.id;
        this.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConsultantCallHistoryComponent.prototype, "getScreenSize", null);
    ConsultantCallHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-consultant-call-history",
            template: __webpack_require__(/*! ./consultant-call-history.component.html */ "./src/app/layout/consultant-call-history/consultant-call-history.component.html"),
            styles: [__webpack_require__(/*! ./consultant-call-history.component.scss */ "./src/app/layout/consultant-call-history/consultant-call-history.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ConsultantCallHistoryComponent);
    return ConsultantCallHistoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/consultant-call-history/consultant-call-history.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/consultant-call-history/consultant-call-history.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ConsultantCallHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantCallHistoryModule", function() { return ConsultantCallHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _consultant_call_history_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultant-call-history-routing.module */ "./src/app/layout/consultant-call-history/consultant-call-history-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _consultant_call_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultant-call-history.component */ "./src/app/layout/consultant-call-history/consultant-call-history.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConsultantCallHistoryModule = /** @class */ (function () {
    function ConsultantCallHistoryModule() {
    }
    ConsultantCallHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _consultant_call_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsultantCallHistoryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["ActionListModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            declarations: [_consultant_call_history_component__WEBPACK_IMPORTED_MODULE_6__["ConsultantCallHistoryComponent"]]
        })
    ], ConsultantCallHistoryModule);
    return ConsultantCallHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=consultant-call-history-consultant-call-history-module.js.map