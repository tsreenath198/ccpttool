(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-bank-search-bank-module"],{

/***/ "./src/app/layout/search-bank/search-bank-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/search-bank/search-bank-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SearchBankRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBankRoutingModule", function() { return SearchBankRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_bank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bank.component */ "./src/app/layout/search-bank/search-bank.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _search_bank_component__WEBPACK_IMPORTED_MODULE_2__["SearchBankComponent"]
    }
];
var SearchBankRoutingModule = /** @class */ (function () {
    function SearchBankRoutingModule() {
    }
    SearchBankRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchBankRoutingModule);
    return SearchBankRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/search-bank/search-bank.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/search-bank/search-bank.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-book'\" [heading1]=\"'Guides'\" [icon2]=\"'fa-search'\" [heading2]=\"'Search'\">\n  </app-page-header>\n\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\" (keyup)=\"search()\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Profile\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let sbl of sbList.list | paginate: paginateConfig; let i = index\" (click)=\"setModel(sbl.id)\">\n              <td>\n                {{ sbl.profile }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"sbList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"searchBankForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">\n                  Edit\n                </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model.profile\">\n                <th>Profile</th>\n                <td>{{ model.profile }}</td>\n              </tr>\n              <tr *ngIf=\"model.logicOr\">\n                <th>Any of Keywords</th>\n                <td>{{ model.logicOr }}</td>\n              </tr>\n              <tr *ngIf=\"model.logicAnd\">\n                <th>All of Keywords</th>\n                <td>{{ model.logicAnd }}</td>\n              </tr>\n              <tr *ngIf=\"model.refine1\">\n                <th>Refine 1</th>\n                <td>{{ model.refine1 }}</td>\n              </tr>\n              <tr *ngIf=\"model.refine2\">\n                <th>Refine 2</th>\n                <td>{{ model.refine2 }}</td>\n              </tr>\n              <tr *ngIf=\"model.functionalArea\">\n                <th>Functional Area</th>\n                <td>{{ model.functionalArea }}</td>\n              </tr>\n              <!-- <tr *ngFor=\"let ap of model.properties; let i = index\">\n                  <th>{{ap.name}}</th>\n                  <td>{{ap.value}}</td>\n                </tr> -->\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Profile<span class=\"required\">*</span></label>\n                <input class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.profile\"\n                  name=\"profile\" [ngClass]=\"{ 'is-invalid': f.submitted && profile.invalid }\" #profile=\"ngModel\"\n                  required />\n                <div class=\"invalid-feedback\">\n                  profile is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Any of Keywords (Logic Or)</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.logicOr\" name=\"logicOr\" #logicOr=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>All of Keywords (Logic And)</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.logicAnd\" name=\"logicAnd\" #logicAnd=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>SWS-Refine1</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.refine1\" name=\"refine1\" #refine1=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>SWS-Refine2</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.refine2\" name=\"refine2\" #refine2=\"ngModel\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Functional Area</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.functionalArea\" name=\"functionalArea\" #functionalArea=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"col-md-12 ml-3\" *ngIf=\"model.properties.length > 0\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.name\"\n                        class=\"form-control\"\n                        name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.value\"\n                        class=\"form-control\"\n                        name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i\n                        class=\"fa fa-minus\"\n                        aria-hidden=\"true\"\n                        id=\"decrease\"\n                        *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"\n                      ></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i\n                      class=\"fa fa-plus\"\n                      aria-hidden=\"true\"\n                      id=\"increase\"\n                      *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"\n                    ></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/search-bank/search-bank.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/search-bank/search-bank.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.bl-trans {\n  border-left: 6px solid transparent; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC1iYW5rL0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXHNlYXJjaC1iYW5rXFxzZWFyY2gtYmFuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUNBQWtDLEVBQ25DOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2VhcmNoLWJhbmsvc2VhcmNoLWJhbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJsLXRyYW5zIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/search-bank/search-bank.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/search-bank/search-bank.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBankComponent", function() { return SearchBankComponent; });
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








var SearchBankComponent = /** @class */ (function () {
    function SearchBankComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.sbList = [];
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
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getScreenSize();
    }
    SearchBankComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    SearchBankComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.initialGetAll();
        this.spinner(true);
    };
    SearchBankComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.SearchGetAll).subscribe(resp => {
        //     this.sbList = resp as any;
        //     this.spinner(true);
        // });
        this.model.properties = [];
    };
    SearchBankComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    SearchBankComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.SearchGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.sbList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.sbList.noOfRecords;
        });
    };
    SearchBankComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        //this.config.editable = true;
        this.enableButtonType = "U";
    };
    SearchBankComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "U";
        // this.config.editable = false;
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    SearchBankComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.SearchGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    SearchBankComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    SearchBankComponent.prototype.propertiesListIncrement = function (event, i) {
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
    SearchBankComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
    };
    SearchBankComponent.prototype.create = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.SearchCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.SEARCH);
            _this.init();
            _this.formReset();
            searchBankForm.resetForm();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.isCreate = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.SEARCH);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    SearchBankComponent.prototype.update = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.SearchUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.SEARCH);
            _this.init();
            searchBankForm.resetForm();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.SEARCH);
            _this.spinner(true);
        });
    };
    SearchBankComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    SearchBankComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.SearchDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.SEARCH);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.SEARCH);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    SearchBankComponent.prototype.open = function (event, content) {
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
    SearchBankComponent.prototype.close = function () {
        this.modalRef.close();
    };
    SearchBankComponent.prototype.getDismissReason = function (reason) {
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
    SearchBankComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    SearchBankComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    SearchBankComponent.prototype.search = function () {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        if (this.currSearchTxt.length == 0) {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
            this.initialGetAll();
        }
        else if (this.currSearchTxt.length > 3) {
            var temp = this.http.get(this.urlConstants.SearchAllSearch + this.currSearchTxt);
            temp.subscribe(function (resp) {
                _this.sbList.list = resp;
                _this.paginateConfigDeclare(_this.sbList.list.length, 1, _this.sbList.list.length);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchBankComponent.prototype, "getScreenSize", null);
    SearchBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search-bank",
            template: __webpack_require__(/*! ./search-bank.component.html */ "./src/app/layout/search-bank/search-bank.component.html"),
            styles: [__webpack_require__(/*! ./search-bank.component.scss */ "./src/app/layout/search-bank/search-bank.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], SearchBankComponent);
    return SearchBankComponent;
}());



/***/ }),

/***/ "./src/app/layout/search-bank/search-bank.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/search-bank/search-bank.module.ts ***!
  \**********************************************************/
/*! exports provided: SearchBankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBankModule", function() { return SearchBankModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _search_bank_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-bank-routing.module */ "./src/app/layout/search-bank/search-bank-routing.module.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _search_bank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bank.component */ "./src/app/layout/search-bank/search-bank.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SearchBankModule = /** @class */ (function () {
    function SearchBankModule() {
    }
    SearchBankModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _search_bank_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchBankRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_search_bank_component__WEBPACK_IMPORTED_MODULE_6__["SearchBankComponent"]]
        })
    ], SearchBankModule);
    return SearchBankModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-bank-search-bank-module.js.map