(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-contacts-other-contacts-module"],{

/***/ "./src/app/layout/other-contacts/other-contacts-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: OtherContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherContactsRoutingModule", function() { return OtherContactsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _other_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-contacts.component */ "./src/app/layout/other-contacts/other-contacts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _other_contacts_component__WEBPACK_IMPORTED_MODULE_2__["OtherContactsComponent"]
    }
];
var OtherContactsRoutingModule = /** @class */ (function () {
    function OtherContactsRoutingModule() {
    }
    OtherContactsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OtherContactsRoutingModule);
    return OtherContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/other-contacts/other-contacts.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-address-book'\" [heading1]=\"'Other Contacts'\"> </app-page-header>\n\n  <div class=\"spinner padding-top justify-content-md-center \" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Name\n              </th>\n              <th>\n                Email\n              </th>\n              <th>\n                Phone\n              </th>\n              <!-- <th>\n                      <span class=\"pull-right\">Action</span>\n                  </th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let ocl of OCList.list | paginate: paginateConfig; let i = index\"\n              [ngClass]=\"!ocl.isProfileCompleted ? 'bl-red' : 'bl-trans'\" (click)=\"setModel(ocl.id)\">\n              <td>\n                {{ ocl.name }}\n              </td>\n              <td>\n                {{ ocl.email }}\n              </td>\n              <td>\n                {{ ocl.phone }}\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"ocl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\">\n                </app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"OCList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"otherContactForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">\n                  Edit\n                </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">Close</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <th>Name</th>\n                <td>{{ model.name }}</td>\n              </tr>\n              <tr>\n                <th>Phone</th>\n                <td>{{ model.phone }}</td>\n              </tr>\n              <tr>\n                <th>Email</th>\n                <td>{{ model.email }}</td>\n              </tr>\n              <tr>\n                <th>Notes</th>\n                <td>{{ model.description }}</td>\n              </tr>\n              <tr *ngFor=\"let ap of model.properties; let i = index\">\n                <th>{{ap.name}}</th>\n                <td>{{ap.value}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Name<span class=\"required\">*</span></label>\n                <input class=\"form-control capi form-control-sm\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.name\" name=\"name\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\"\n                  #name=\"ngModel\" #ocName (keyup)=\"transformTitleCase(ocName)\" required />\n                <div class=\"invalid-feedback\">\n                  name is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Phone</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.phone\" name=\"phone\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" #phone=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group \">\n                <label>E-Mail</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.email\" name=\"email\"\n                  #email=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"col-md-12 ml-3\" *ngIf=\"model.properties.length > 0\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Notes</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.description\" name=\"notes\" #notes=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/other-contacts/other-contacts.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n.shrinkBody {\n  flex-shrink: 3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L290aGVyLWNvbnRhY3RzL0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXG90aGVyLWNvbnRhY3RzXFxvdGhlci1jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUI7O0FBR0g7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvb3RoZXItY29udGFjdHMvb3RoZXItY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZHJvcC1saXN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQge1xyXG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB9XHJcbn1cclxuXHJcbi5zaHJpbmtCb2R5IHtcclxuICBmbGV4LXNocmluazogMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/other-contacts/other-contacts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts.component.ts ***!
  \*******************************************************************/
/*! exports provided: OtherContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherContactsComponent", function() { return OtherContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _other_contacts_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-contacts.model */ "./src/app/layout/other-contacts/other-contacts.model.ts");
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









var OtherContactsComponent = /** @class */ (function () {
    function OtherContactsComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.OCList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.showAction = false;
        this.actionsList = new _other_contacts_model__WEBPACK_IMPORTED_MODULE_6__["ActionsList"]();
        this.action = null;
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.isCreate = false;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.apName = "";
        this.apValue = "";
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    OtherContactsComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    OtherContactsComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    OtherContactsComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.OCGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.OCList = resp;
            _this.OCList.list.forEach(function (cl) {
                if (_this.validate(cl.name) ||
                    _this.validate(cl.email) ||
                    _this.validate(cl.phone)) {
                    cl["isProfileCompleted"] = false;
                }
                else {
                    cl["isProfileCompleted"] = true;
                }
            });
            _this.paginateConfig.totalItems = _this.OCList.noOfRecords;
        });
    };
    OtherContactsComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.OCGetAll).subscribe(resp => {
        //     this.OCList = resp as any;
        //     this.OCList.forEach(cl => {
        //         if (this.validate(cl.name) || this.validate(cl.email) || this.validate(cl.phone)) {
        //             cl['isProfileCompleted'] = false;
        //         } else {
        //             cl['isProfileCompleted'] = true;
        //         }
        //     });
        //     this.spinner(true);
        // });
        this.model.properties = [];
        this.model["phone"] = "+91";
    };
    OtherContactsComponent.prototype.validate = function (value) {
        var bool = value == null ? true : false;
        return bool;
    };
    OtherContactsComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        //this.config.editable = true;
        this.enableButtonType = "U";
    };
    OtherContactsComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "U";
        // this.config.editable = false;
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    OtherContactsComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.OCGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    OtherContactsComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    OtherContactsComponent.prototype.propertiesListIncrement = function (event, i) {
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
    OtherContactsComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
        this.model["phone"] = "+91";
    };
    OtherContactsComponent.prototype.create = function (otherContactForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.OCCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CONTACT);
            _this.init();
            _this.formReset();
            otherContactForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CONTACT);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    OtherContactsComponent.prototype.update = function (otherContactForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.OCUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CONTACT);
            _this.init();
            otherContactForm.resetForm();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CONTACT);
            _this.spinner(true);
        });
    };
    OtherContactsComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    OtherContactsComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.OCDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CONTACT);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CONTACT);
            _this.spinner(true);
        });
    };
    OtherContactsComponent.prototype.transformTitleCase = function (ip) {
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
    OtherContactsComponent.prototype.open = function (event, content) {
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
    OtherContactsComponent.prototype.close = function () {
        this.modalRef.close();
    };
    OtherContactsComponent.prototype.getDismissReason = function (reason) {
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
    OtherContactsComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    OtherContactsComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Object)
    ], OtherContactsComponent.prototype, "Router", void 0);
    OtherContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-other-contacts",
            template: __webpack_require__(/*! ./other-contacts.component.html */ "./src/app/layout/other-contacts/other-contacts.component.html"),
            styles: [__webpack_require__(/*! ./other-contacts.component.scss */ "./src/app/layout/other-contacts/other-contacts.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], OtherContactsComponent);
    return OtherContactsComponent;
}());



/***/ }),

/***/ "./src/app/layout/other-contacts/other-contacts.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts.model.ts ***!
  \***************************************************************/
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

/***/ "./src/app/layout/other-contacts/other-contacts.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/other-contacts/other-contacts.module.ts ***!
  \****************************************************************/
/*! exports provided: OtherContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherContactsModule", function() { return OtherContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _other_contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other-contacts-routing.module */ "./src/app/layout/other-contacts/other-contacts-routing.module.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _other_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-contacts.component */ "./src/app/layout/other-contacts/other-contacts.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OtherContactsModule = /** @class */ (function () {
    function OtherContactsModule() {
    }
    OtherContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _other_contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__["OtherContactsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_other_contacts_component__WEBPACK_IMPORTED_MODULE_6__["OtherContactsComponent"]]
        })
    ], OtherContactsModule);
    return OtherContactsModule;
}());



/***/ })

}]);
//# sourceMappingURL=other-contacts-other-contacts-module.js.map