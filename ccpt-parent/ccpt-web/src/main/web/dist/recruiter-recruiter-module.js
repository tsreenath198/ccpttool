(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recruiter-recruiter-module"],{

/***/ "./src/app/layout/recruiter/recruiter-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RecruiterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterRoutingModule", function() { return RecruiterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recruiter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recruiter.component */ "./src/app/layout/recruiter/recruiter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _recruiter_component__WEBPACK_IMPORTED_MODULE_2__["RecruiterComponent"]
    }
];
var RecruiterRoutingModule = /** @class */ (function () {
    function RecruiterRoutingModule() {
    }
    RecruiterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecruiterRoutingModule);
    return RecruiterRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/recruiter/recruiter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-user'\" [heading1]=\"'Administration'\" [icon2]=\"'fa-id-card'\" [heading2]=\"'Recruiter'\">\n  </app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7 \">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Details\n              </th>\n              <!-- <th>\n                    <span class=\"pull-right\">Action</span>\n                  </th> -->\n            </tr>\n          </thead>\n          <tbody class=\"overflow-ele-scroll\">\n            <tr *ngFor=\"let rl of recruiterList.list |  paginate: paginateConfig ; let i = index\"\n              (click)=\"setModel(rl.id)\">\n              <td>\n                <dl>\n                  <dt> {{rl.fullname}}</dt>\n                  <dd>{{rl.address}}</dd>\n                </dl>\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"rl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"></app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"recruiterList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientPositionForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm== 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Full Name<span class=\"required\">*</span></label>\n              <input class=\"form-control\" name=\"fullname\" [readonly]=\"readOnlyForm== 'R'\" [(ngModel)]=\"model.fullname\"\n                [ngClass]=\"{'is-invalid': f.submitted && fullname.invalid}\" #fullname=\"ngModel\" #recruiterName\n                (keyup)=\"transformTitleCase(recruiterName)\" required>\n              <div class=\"invalid-feedback\">\n                fullname is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" data-provide=\"datepicker\">\n              <label>Date of Birth</label>\n              <input type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"model.dob\" max=\"9999-12-31\"\n                [ngClass]=\"{'is-invalid': f.submitted && dob.invalid}\" #dob=\"ngModel\" [readonly]=\"readOnlyForm == 'R'\">\n              <div class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-th\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Gender<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"gender\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.gender\"\n                [ngClass]=\"{'is-invalid': f.submitted && gender.invalid}\" #gender=\"ngModel\" required>\n                <option *ngFor=\"let gl of GENDER\" [ngValue]=\"gl\">{{gl}}</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                gender is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Role<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"role\" [(ngModel)]=\"model.role\" [disabled]=\"readOnlyForm == 'R'\"\n                [ngClass]=\"{'is-invalid': f.submitted && role.invalid}\" #role=\"ngModel\" required>\n                <option *ngFor=\"let role of rolesList\" [ngValue]=\"role\">{{role}}</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                role is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <!--pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==12) return false;\" -->\n              <label>Phone<span class=\"required\">*</span></label>\n              <input class=\"form-control\" name=\"phone\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.phone\"\n                [ngClass]=\"{'is-invalid': f.submitted && phone.invalid}\" type=\"text\" #phone=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                phone is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>E-Mail<span class=\"required\">*</span></label>\n              <input class=\"form-control\" name=\"email\" type=\"email\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.email\" [ngClass]=\"{'is-invalid': f.submitted && email.invalid}\" #email=\"ngModel\"\n                required>\n              <div class=\"invalid-feedback\">\n                Email is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Alias<span class=\"required\">*</span></label>\n              <input class=\"form-control\" name=\"alias\" type=\"text\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.aliasName\" [ngClass]=\"{'is-invalid': f.submitted && alias.invalid}\" #alias=\"ngModel\"\n                required>\n              <div class=\"invalid-feedback\">\n                alias name is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Lead Email<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"leadEmail\" [(ngModel)]=\"model.leadEmail\"\n                [disabled]=\"readOnlyForm == 'R'\" [ngClass]=\"{'is-invalid': f.submitted && leadEmail.invalid}\"\n                #leadEmail=\"ngModel\" required>\n                <option *ngFor=\"let le of leadEmailList\" [ngValue]=\"le\">{{le}}</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                role is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Address</label>\n              <textarea class=\"form-control\" cols=\"10\" rows=\"10\" name=\"address\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.address\" [ngClass]=\"{'is-invalid': f.submitted && address.invalid}\"\n                #address=\"ngModel\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"model.properties.length>0\">\n          <div class=\"col-md-12\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea class=\"form-control\" name=\"description\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" rows=\"10\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Recruiter</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/recruiter/recruiter.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlY3J1aXRlci9EOlxcQ0NQVCBNQUlOXFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxyZWNydWl0ZXJcXHJlY3J1aXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVjcnVpdGVyL3JlY3J1aXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kcm9wLWxpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUtc3RyaXBlZCB7XHJcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/recruiter/recruiter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter.component.ts ***!
  \*********************************************************/
/*! exports provided: RecruiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterComponent", function() { return RecruiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _recruiter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recruiter.model */ "./src/app/layout/recruiter/recruiter.model.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
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









var RecruiterComponent = /** @class */ (function () {
    function RecruiterComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.recruiterList = [];
        this.rolesModel = new _recruiter_model__WEBPACK_IMPORTED_MODULE_3__["Roles"]();
        this.rolesList = [];
        this.leadEmailList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_6__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.showAction = false;
        this.actionsList = new _recruiter_model__WEBPACK_IMPORTED_MODULE_3__["ActionsList"]();
        this.action = null;
        this.isCreate = false;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.GENDER = ["Male", "Female", "Other"];
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.apName = "";
        this.apValue = "";
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    RecruiterComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    RecruiterComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
        this.rolesList = this.rolesModel.roles;
    };
    RecruiterComponent.prototype.init = function () {
        var _this = this;
        // this.spinner(false);
        // this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
        //   this.recruiterList = resp as any;
        //   this.spinner(true);
        // });
        this.http.get(this.urlConstants.RLeadEmails).subscribe(function (resp) {
            _this.leadEmailList = resp;
        });
        this.model.properties = [];
        this.model["phone"] = "+91";
    };
    RecruiterComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.RGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.recruiterList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.recruiterList.noOfRecords;
        });
    };
    RecruiterComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    RecruiterComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    RecruiterComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    RecruiterComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.RGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    RecruiterComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    RecruiterComponent.prototype.additionalPropertiesDeclare = function () {
        this.model.properties = [{}];
        this.model["phone"] = "+91";
    };
    RecruiterComponent.prototype.propertiesListIncrement = function (event, i) {
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
    RecruiterComponent.prototype.actions = function (value, trashContent, form) {
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
    RecruiterComponent.prototype.formReset = function () {
        this.model = { properties: [] };
    };
    RecruiterComponent.prototype.create = function (recruiterForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.RCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.RECRUITER);
            _this.init();
            _this.formReset();
            recruiterForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message + err.status, _this.properties.RECRUITER);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    RecruiterComponent.prototype.update = function (recruiterForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.RUpdate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.RECRUITER);
            _this.init();
            _this.formReset();
            recruiterForm.resetForm();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.RECRUITER);
            _this.spinner(true);
        });
    };
    RecruiterComponent.prototype.cancelForm = function (recruiterForm) {
        recruiterForm.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    RecruiterComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.RDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            var response = resp;
            _this.toastr.success(response.message, _this.properties.RECRUITER);
            _this.close();
            _this.init();
            _this.formReset();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.RECRUITER);
            _this.spinner(true);
        });
    };
    RecruiterComponent.prototype.transformTitleCase = function (ip) {
        var temp = ip.value.length === 0
            ? ""
            : ip.value.replace(/\w\S*/g, function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); });
        ip.value = temp;
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    RecruiterComponent.prototype.open = function (event, content) {
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
    RecruiterComponent.prototype.close = function () {
        this.modalRef.close();
    };
    RecruiterComponent.prototype.getDismissReason = function (reason) {
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
    RecruiterComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    RecruiterComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RecruiterComponent.prototype, "getScreenSize", null);
    RecruiterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recruiter",
            template: __webpack_require__(/*! ./recruiter.component.html */ "./src/app/layout/recruiter/recruiter.component.html"),
            styles: [__webpack_require__(/*! ./recruiter.component.scss */ "./src/app/layout/recruiter/recruiter.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], RecruiterComponent);
    return RecruiterComponent;
}());



/***/ }),

/***/ "./src/app/layout/recruiter/recruiter.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter.model.ts ***!
  \*****************************************************/
/*! exports provided: Roles, ActionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
var Roles = /** @class */ (function () {
    function Roles() {
        this.roles = ["Junior Recruiter", "Senior Recruiter"];
    }
    return Roles;
}());

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

/***/ "./src/app/layout/recruiter/recruiter.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/recruiter/recruiter.module.ts ***!
  \******************************************************/
/*! exports provided: RecruiterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterModule", function() { return RecruiterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _recruiter_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recruiter-routing.module */ "./src/app/layout/recruiter/recruiter-routing.module.ts");
/* harmony import */ var _recruiter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recruiter.component */ "./src/app/layout/recruiter/recruiter.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RecruiterModule = /** @class */ (function () {
    function RecruiterModule() {
    }
    RecruiterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _recruiter_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecruiterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_recruiter_component__WEBPACK_IMPORTED_MODULE_5__["RecruiterComponent"]]
        })
    ], RecruiterModule);
    return RecruiterModule;
}());



/***/ })

}]);
//# sourceMappingURL=recruiter-recruiter-module.js.map