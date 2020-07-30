(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-history-message-history-module"],{

/***/ "./src/app/layout/message-history/message-history-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/message-history/message-history-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MessageHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHistoryRoutingModule", function() { return MessageHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-history.component */ "./src/app/layout/message-history/message-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _message_history_component__WEBPACK_IMPORTED_MODULE_2__["MessageHistoryComponent"]
    }
];
var MessageHistoryRoutingModule = /** @class */ (function () {
    function MessageHistoryRoutingModule() {
    }
    MessageHistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MessageHistoryRoutingModule);
    return MessageHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/message-history/message-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/message-history/message-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-history'\" [heading1]=\"'History'\" [icon2]=\"'fa-comments'\" [heading2]=\"'Messages'\">\n  </app-page-header>\n\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Date\n              </th>\n              <th width=\"150px\">\n                Sent to\n              </th>\n              <th>\n                Message\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let ehl of ehList.list | filter: currSearchTxt | paginate: paginateConfig; let i = index\"\n              (click)=\"setModel(ehl.id)\">\n              <td width=\"100px\">\n                {{ ehl.createdDate | date }}\n              </td>\n              <td width=\"150px\">\n                {{ ehl.contactNumbers }}\n              </td>\n              <td>\n                {{ ehl.message }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"ehList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"searchBankForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">\n                  Edit\n                </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model.createdDate\">\n                <th>Date</th>\n                <td>{{ model?.createdDate | date: 'dd-mm-yyyy' }}</td>\n              </tr>\n              <tr *ngIf=\"model.contactNumbers\">\n                <th>Sent To</th>\n                <td>{{ model.contactNumbers }}</td>\n              </tr>\n              <tr *ngIf=\"model.message\">\n                <th>CC</th>\n                <td>{{ model.message }}</td>\n              </tr>\n              <!-- <tr *ngFor=\"let ap of model.properties; let i = index\">\n                  <th>{{ap.name}}</th>\n                  <td>{{ap.value}}</td>\n                </tr> -->\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>To<span class=\"required\">*</span></label>\n                <input class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactNumbers\"\n                  name=\"contactNumbers\" [ngClass]=\"{ 'is-invalid': f.submitted && contactNumbers.invalid }\"\n                  #contactNumbers=\"ngModel\" required />\n                <div class=\"invalid-feedback\">\n                  to is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Message</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"3\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.message\" name=\"message\" #message=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"col-md-12 ml-3\" *ngIf=\"model.properties.length > 0\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.name\"\n                        class=\"form-control\"\n                        name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input\n                        type=\"text\"\n                        [(ngModel)]=\"ap.value\"\n                        class=\"form-control\"\n                        name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\"\n                      />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i\n                        class=\"fa fa-minus\"\n                        aria-hidden=\"true\"\n                        id=\"decrease\"\n                        *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"\n                      ></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\" [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i\n                      class=\"fa fa-plus\"\n                      aria-hidden=\"true\"\n                      id=\"increase\"\n                      *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"\n                    ></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/message-history/message-history.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/message-history/message-history.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.bl-trans {\n  border-left: 6px solid transparent; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lc3NhZ2UtaGlzdG9yeS9EOlxcY2NwdHRvb2wuZ2l0XFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxtZXNzYWdlLWhpc3RvcnlcXG1lc3NhZ2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUNBQWtDLEVBQ25DOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWVzc2FnZS1oaXN0b3J5L21lc3NhZ2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzEuNWVtO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYmwtdHJhbnMge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZHJvcC1saXN0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQge1xyXG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/message-history/message-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/message-history/message-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHistoryComponent", function() { return MessageHistoryComponent; });
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








var MessageHistoryComponent = /** @class */ (function () {
    function MessageHistoryComponent(http, router, toastr, modalService) {
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
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getScreenSize();
    }
    MessageHistoryComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    MessageHistoryComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.initialGetAll();
        this.spinner(true);
    };
    MessageHistoryComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.SearchGetAll).subscribe(resp => {
        //     this.ehList = resp as any;
        //     this.spinner(true);
        // });
        this.model.properties = [];
    };
    MessageHistoryComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    MessageHistoryComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.SMSHGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.ehList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.ehList.noOfRecords;
        });
    };
    MessageHistoryComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        //this.config.editable = true;
        this.enableButtonType = "U";
    };
    MessageHistoryComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "U";
        // this.config.editable = false;
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    MessageHistoryComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.SMSHGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    MessageHistoryComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    MessageHistoryComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
    };
    MessageHistoryComponent.prototype.create = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.SMSHCreate);
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
    MessageHistoryComponent.prototype.update = function (searchBankForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.SMSHUpdate);
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
    MessageHistoryComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    MessageHistoryComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.SMSHDelete + this.selectedRecrdToDel);
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
    MessageHistoryComponent.prototype.open = function (event, content) {
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
    MessageHistoryComponent.prototype.close = function () {
        this.modalRef.close();
    };
    MessageHistoryComponent.prototype.getDismissReason = function (reason) {
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
    MessageHistoryComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    MessageHistoryComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MessageHistoryComponent.prototype, "getScreenSize", null);
    MessageHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "message-history",
            template: __webpack_require__(/*! ./message-history.component.html */ "./src/app/layout/message-history/message-history.component.html"),
            styles: [__webpack_require__(/*! ./message-history.component.scss */ "./src/app/layout/message-history/message-history.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], MessageHistoryComponent);
    return MessageHistoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/message-history/message-history.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/message-history/message-history.module.ts ***!
  \******************************************************************/
/*! exports provided: MessageHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHistoryModule", function() { return MessageHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _message_history_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-history-routing.module */ "./src/app/layout/message-history/message-history-routing.module.ts");
/* harmony import */ var _message_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message-history.component */ "./src/app/layout/message-history/message-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MessageHistoryModule = /** @class */ (function () {
    function MessageHistoryModule() {
    }
    MessageHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _message_history_routing_module__WEBPACK_IMPORTED_MODULE_7__["MessageHistoryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__["AngularEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_message_history_component__WEBPACK_IMPORTED_MODULE_8__["MessageHistoryComponent"]]
        })
    ], MessageHistoryModule);
    return MessageHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=message-history-message-history-module.js.map