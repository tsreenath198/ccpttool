(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frequent-questions-frequent-questions-module"],{

/***/ "./src/app/layout/frequent-questions/frequent-questions-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/frequent-questions/frequent-questions-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: FrequentQuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentQuestionsRoutingModule", function() { return FrequentQuestionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frequent_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frequent-questions.component */ "./src/app/layout/frequent-questions/frequent-questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _frequent_questions_component__WEBPACK_IMPORTED_MODULE_2__["FrequentQuestionsComponent"]
    }
];
var FrequentQuestionsRoutingModule = /** @class */ (function () {
    function FrequentQuestionsRoutingModule() {
    }
    FrequentQuestionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FrequentQuestionsRoutingModule);
    return FrequentQuestionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/frequent-questions/frequent-questions.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/frequent-questions/frequent-questions.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-book'\" [heading1]=\"'Guides'\" [icon2]=\"'fa-question-circle'\" [heading2]='\"FAQs\"'>\n  </app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"> <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"search by skill\"\n            [(ngModel)]=\"currSearchTxt\" (keyup)=\"search()\" /></div>\n        <div class=\"col-md-9\">\n          <select class=\"form-control form-control-sm\" [(ngModel)]=\"currDropSearch\" name=\"sel1\"\n            (change)=\"searchSelect()\">\n            <option [ngValue]=\"null\" hidden selected>--search client application--</option>\n            <option *ngFor=\"let ca of getAllCA\" [ngValue]=\"ca\">\n              {{ ca.name }}\n            </option>\n          </select>\n          <span *ngIf=\"currDropSearch\">\n            <button type=\"button\" class=\"btn btn-secondary  btn-sm ml-3\" (click)=\"cancelSearch()\">\n              Cancel\n            </button>\n          </span>\n        </div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"let ul of faqList.list | paginate: paginateConfig ; let i = index\" (click)=\"setModel(ul.id)\">\n              <td>{{ul.question}}</td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"ul.id\" [isTrash]=\"trash\" (trash)=\"open($event)\">\n                </app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"faqList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <form name=\"form\" id=\"UserForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                                Dropdown\n                            </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Creator<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"uname\" [(ngModel)]=\"model.creatorId\" [disabled]=\"readOnlyForm == 'R'\"\n                [ngClass]=\"{'is-invalid': f.submitted && uname.invalid}\" #uname=\"ngModel\" required>\n                <option *ngFor=\"let gar of getAllR.list\" [ngValue]=\"gar.id\">{{gar.fullname}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                creator is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Client Application<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"ca\" [(ngModel)]=\"model.caId\" [disabled]=\"readOnlyForm == 'R'\"\n                [ngClass]=\"{'is-invalid': f.submitted && ca.invalid}\" #ca=\"ngModel\" required>\n                <option *ngFor=\"let gac of getAllCA\" [ngValue]=\"gac.id\">{{gac.name}}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                application is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Skills<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.skills\" [readonly]=\"readOnlyForm == 'R'\"\n                name=\"skills\" [ngClass]=\"{'is-invalid': f.submitted && skills.invalid}\" #pwd=\"ngModel\" #skills required>\n              <div class=\"invalid-feedback\">\n                skills is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"model.properties.length>0\">\n            <div class=\"col-md-12\" *ngIf=\"model.properties.length > 0\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.name\"\n                        class=\"form-control\"\n                        name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.value\"\n                        class=\"form-control\"\n                        name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i\n                        class=\"fa fa-minus\"\n                        aria-hidden=\"true\"\n                        id=\"decrease\"\n                        *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"\n                      ></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n        </div> -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Questions</label>\n              <textarea rows=\"5\" cols=\"5\" type=\"text\" class=\"form-control\" name=\"question\"\n                [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.question\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Answer</label>\n              <textarea rows=\"5\" cols=\"5\" type=\"text\" class=\"form-control\" name=\"response\"\n                [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.description\"></textarea>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Questions</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"ques\" [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i\n                        class=\"fa fa-plus\"\n                        aria-hidden=\"true\"\n                        id=\"increase\"\n                        *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"questionsListIncrement($event.target, 0)\"\n                      ></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n        </div> -->\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/frequent-questions/frequent-questions.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/frequent-questions/frequent-questions.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZyZXF1ZW50LXF1ZXN0aW9ucy9EOlxcY2NwdHRvb2wuZ2l0XFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxmcmVxdWVudC1xdWVzdGlvbnNcXGZyZXF1ZW50LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZnJlcXVlbnQtcXVlc3Rpb25zL2ZyZXF1ZW50LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzEuNWVtO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kcm9wLWxpc3Q6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUtc3RyaXBlZCB7XHJcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/frequent-questions/frequent-questions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/frequent-questions/frequent-questions.component.ts ***!
  \***************************************************************************/
/*! exports provided: FrequentQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentQuestionsComponent", function() { return FrequentQuestionsComponent; });
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








var FrequentQuestionsComponent = /** @class */ (function () {
    function FrequentQuestionsComponent(http, router, toastr, modalService, el) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.el = el;
        this.model = {};
        this.faqList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_7__["Properties"]();
        this.rolesList = [];
        this.getAllR = [];
        this.getAllCA = [];
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.currDropSearch = null;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.apName = "";
        this.apValue = "";
        this.isCreate = false;
        this.showAction = false;
        this.action = null;
        this.paginateConfig = {
            temsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getScreenSize();
    }
    FrequentQuestionsComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    FrequentQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.http
            .get(this.urlConstants.RGetAll + "0&pageSize=20000&sortBy=id")
            .subscribe(function (resp) {
            _this.getAllR = resp;
            _this.getRecruiterId();
        });
        this.http.get(this.urlConstants.CADropdown).subscribe(function (resp) {
            _this.getAllCA = resp;
        });
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    FrequentQuestionsComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    FrequentQuestionsComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
        //     this.faqList = resp as any;
        //     this.spinner(true);
        // });
    };
    FrequentQuestionsComponent.prototype.getRecruiterId = function () {
        var _this = this;
        var temp = sessionStorage.getItem("username");
        this.getAllR.list.forEach(function (rl) {
            if (rl.email === temp) {
                _this.model.creatorId = rl.id;
            }
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    FrequentQuestionsComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.FAQGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.faqList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.faqList.noOfRecords;
        });
    };
    FrequentQuestionsComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    FrequentQuestionsComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    FrequentQuestionsComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getUserById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    FrequentQuestionsComponent.prototype.getUserById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.FAQGetByID + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
            _this.spinner(true);
        });
    };
    FrequentQuestionsComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        this.model.caId = response.ca.id;
        this.model.creatorId = response.creator.id;
        return this.model;
    };
    FrequentQuestionsComponent.prototype.propertiesListIncrement = function (event, i) {
        switch (event.id) {
            case "decrease": {
                this.model.properties.splice(i, 1);
                break;
            }
            case "increase": {
                if (this.model.properties.length == 0) {
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
    FrequentQuestionsComponent.prototype.formReset = function () {
        this.model = { properties: [] };
        this.getRecruiterId();
    };
    FrequentQuestionsComponent.prototype.create = function (usersForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.FAQCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.USER);
            usersForm.resetForm();
            _this.formReset();
            _this.init();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.getRecruiterId();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.USER);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    FrequentQuestionsComponent.prototype.update = function (usersForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.FAQUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.USER);
            _this.init();
            _this.getRecruiterId();
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
    FrequentQuestionsComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.FAQDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.USER);
            _this.init();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.close();
            _this.formReset();
            _this.getRecruiterId();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.USER);
            _this.spinner(true);
        });
    };
    FrequentQuestionsComponent.prototype.cancelForm = function (usersForm) {
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
    FrequentQuestionsComponent.prototype.open = function (event, content) {
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
    FrequentQuestionsComponent.prototype.close = function () {
        this.modalRef.close();
    };
    FrequentQuestionsComponent.prototype.getDismissReason = function (reason) {
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
    FrequentQuestionsComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    FrequentQuestionsComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    FrequentQuestionsComponent.prototype.search = function () {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        if (this.currSearchTxt.length == 0) {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
            this.initialGetAll();
        }
        else if (this.currSearchTxt.length > 3) {
            var temp = this.http.get(this.urlConstants.FAQSearchBySkills + this.currSearchTxt);
            temp.subscribe(function (resp) {
                _this.faqList.list = resp;
                _this.paginateConfigDeclare(_this.faqList.list.length, 1, _this.faqList.list.length);
            });
        }
    };
    FrequentQuestionsComponent.prototype.searchSelect = function () {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        var temp = this.http.get(this.urlConstants.FAQSearchByCAId + this.currDropSearch.id);
        temp.subscribe(function (resp) {
            _this.faqList.list = resp;
            _this.paginateConfigDeclare(_this.faqList.list.length, 1, _this.faqList.list.length);
        });
    };
    FrequentQuestionsComponent.prototype.cancelSearch = function () {
        this.currDropSearch = null;
        this.initialGetAll();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FrequentQuestionsComponent.prototype, "getScreenSize", null);
    FrequentQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-frequent-questions",
            template: __webpack_require__(/*! ./frequent-questions.component.html */ "./src/app/layout/frequent-questions/frequent-questions.component.html"),
            styles: [__webpack_require__(/*! ./frequent-questions.component.scss */ "./src/app/layout/frequent-questions/frequent-questions.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FrequentQuestionsComponent);
    return FrequentQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/layout/frequent-questions/frequent-questions.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/frequent-questions/frequent-questions.module.ts ***!
  \************************************************************************/
/*! exports provided: FrequentQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequentQuestionsModule", function() { return FrequentQuestionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _frequent_questions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frequent-questions-routing.module */ "./src/app/layout/frequent-questions/frequent-questions-routing.module.ts");
/* harmony import */ var _frequent_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frequent-questions.component */ "./src/app/layout/frequent-questions/frequent-questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FrequentQuestionsModule = /** @class */ (function () {
    function FrequentQuestionsModule() {
    }
    FrequentQuestionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _frequent_questions_routing_module__WEBPACK_IMPORTED_MODULE_6__["FrequentQuestionsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_frequent_questions_component__WEBPACK_IMPORTED_MODULE_7__["FrequentQuestionsComponent"]]
        })
    ], FrequentQuestionsModule);
    return FrequentQuestionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=frequent-questions-frequent-questions-module.js.map