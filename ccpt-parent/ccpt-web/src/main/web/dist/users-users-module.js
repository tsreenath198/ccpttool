(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/layout/users/users-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/users/users-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/users/users.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-user'\" [heading1]=\"'Administration'\" [icon2]=\"'fa-user-circle'\" [heading2]=\"'Users'\">\n  </app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"let ul of usersList.list | paginate: paginateConfig ; let i = index\" (click)=\"setModel(ul.id)\">\n              <td>{{ul.username}}</td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"ul.id\" [isTrash]=\"trash\" (trash)=\"open($event)\">\n                </app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"usersList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <form name=\"form\" id=\"UserForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                                Dropdown\n                            </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Username<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"uname\" [(ngModel)]=\"model.username\" [disabled]=\"readOnlyForm == 'R'\"\n                [ngClass]=\"{'is-invalid': f.submitted && uname.invalid}\" #uname=\"ngModel\" required>\n                <option *ngFor=\"let gar of getAllR.list\" [ngValue]=\"gar.email\">{{gar.fullname}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                username is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Password<span class=\"required\">*</span></label>\n              <div class=\"input-group mb-3\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\"\n                  [readonly]=\"readOnlyForm == 'R'\" name=\"pwd\" [ngClass]=\"{'is-invalid': f.submitted && pwd.invalid}\"\n                  #pwd=\"ngModel\" #password required>\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"toogle\" (click)=\"toogle(password)\">\n                    <i class=\"fa fa-eye\" *ngIf=\"!viewPassword\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-eye-slash\" *ngIf=\"viewPassword\" aria-hidden=\"true\"></i></span>\n                </div>\n              </div>\n              <div class=\"invalid-feedback\">\n                password is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Role<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"role\" [(ngModel)]=\"model.role\" [disabled]=\"readOnlyForm == 'R'\"\n                [ngClass]=\"{'is-invalid': f.submitted && role.invalid}\" #role=\"ngModel\" required>\n                <option *ngFor=\"let rl of rolesList\">{{rl}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                role is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"model.properties.length>0\">\n          <div class=\"col-md-12\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea rows=\"5\" cols=\"5\" type=\"password\" class=\"form-control\" name=\"description\"\n                [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.description\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/users/users.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL0Q6XFxjY3B0dG9vbC5naXRcXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0MsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmctdG9we1xyXG4gICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAuZHJvcC1saXN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGFibGUtc3RyaXBlZCB7XHJcbiAgICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIH1cclxuIH0gICJdfQ== */"

/***/ }),

/***/ "./src/app/layout/users/users.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/users/users.component.ts ***!
  \*************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _users_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.model */ "./src/app/layout/users/users.model.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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









var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, router, toastr, modalService, el) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.el = el;
        this.model = {};
        this.usersList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.rolesModel = new _users_model__WEBPACK_IMPORTED_MODULE_2__["UserRoles"]();
        this.rolesList = [];
        this.getAllR = [];
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.apName = "";
        this.apValue = "";
        this.isCreate = false;
        this.showAction = false;
        this.actionsList = new _users_model__WEBPACK_IMPORTED_MODULE_2__["ActionsList"]();
        this.action = null;
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    UsersComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.http
            .get(this.urlConstants.RGetAll + "0&pageSize=20000&sortBy=id")
            .subscribe(function (resp) {
            _this.getAllR = resp;
        });
        this.init();
        this.initialGetAll();
        this.spinner(true);
        this.rolesList = this.rolesModel.roles;
        this.viewPassword = false;
    };
    UsersComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
        //     this.usersList = resp as any;
        //     this.spinner(true);
        // });
        this.model.properties = [];
    };
    UsersComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.UserGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.usersList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.usersList.noOfRecords;
        });
    };
    UsersComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    UsersComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    UsersComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getUserById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    UsersComponent.prototype.getUserById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.UserGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
            _this.spinner(true);
        });
    };
    UsersComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    UsersComponent.prototype.propertiesListIncrement = function (event, i) {
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
    UsersComponent.prototype.actions = function (value, trashContent, form) {
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
    UsersComponent.prototype.toogle = function (html) {
        if (html.type === "password") {
            html.type = "text";
            this.viewPassword = true;
        }
        else {
            html.type = "password";
            this.viewPassword = false;
        }
    };
    UsersComponent.prototype.formReset = function () {
        this.model = { properties: [] };
    };
    UsersComponent.prototype.create = function (usersForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.UserCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.USER);
            usersForm.resetForm();
            _this.init();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.USER);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    UsersComponent.prototype.update = function (usersForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.UserUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.USER);
            _this.init();
            usersForm.resetForm();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.USER);
            _this.spinner(true);
        });
    };
    UsersComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.UserDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.USER);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.USER);
            _this.spinner(true);
        });
    };
    UsersComponent.prototype.cancelForm = function (usersForm) {
        this.init();
        usersForm.resetForm();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    UsersComponent.prototype.open = function (event, content) {
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
    UsersComponent.prototype.close = function () {
        this.modalRef.close();
    };
    UsersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    UsersComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UsersComponent.prototype, "getScreenSize", null);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/layout/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/layout/users/users.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/layout/users/users.model.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/users/users.model.ts ***!
  \*********************************************/
/*! exports provided: UserRoles, ActionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoles", function() { return UserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
var UserRoles = /** @class */ (function () {
    function UserRoles() {
        this.roles = ["User", "Admin", "Manager"];
    }
    return UserRoles;
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

/***/ "./src/app/layout/users/users.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/users/users.module.ts ***!
  \**********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/layout/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map