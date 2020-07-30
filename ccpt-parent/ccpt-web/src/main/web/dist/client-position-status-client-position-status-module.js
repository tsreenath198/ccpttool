(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-position-status-client-position-status-module"],{

/***/ "./src/app/layout/client-position-status/client-position-status-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientPositionStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionStatusRoutingModule", function() { return ClientPositionStatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_position_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-position-status.component */ "./src/app/layout/client-position-status/client-position-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_position_status_component__WEBPACK_IMPORTED_MODULE_2__["ClientPositionStatusComponent"]
    }
];
var ClientPositionStatusRoutingModule = /** @class */ (function () {
    function ClientPositionStatusRoutingModule() {
    }
    ClientPositionStatusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientPositionStatusRoutingModule);
    return ClientPositionStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client-position-status/client-position-status.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-sticky-note'\" [heading1]=\"'Metadata'\" [icon2]=\"'fa-filter'\"\n    [heading2]=\"'Client Position Status'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"> <input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n\n          <tbody>\n            <tr *ngFor=\"let cpsl of clientPositionStatusList.list |   paginate: paginateConfig ; let i = index\"\n              (click)=\"setModel(cpsl.id)\">\n              <td>\n                {{cpsl.description}}</td>\n              <td>\n                {{cpsl.code}}\n              </td>\n              <td>\n                {{cpsl.statusType}}\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"cpsl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"></app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\"\n        *ngIf=\"clientPositionStatusList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientPositionStatusForm\" (ngSubmit)=\"f.form.valid&&create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                              Dropdown\n                          </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Code<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R' || readOnlyForm == 'U'\" maxlength=\"30\"\n                [(ngModel)]=\"model.code\" name=\"code\" [ngClass]=\"{'is-invalid': f.submitted && code.invalid}\"\n                #code=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                code is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Status Type<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"statustype\" [disabled]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.statusType\" [ngClass]=\"{ 'is-invalid': f.submitted && statustype.invalid }\"\n                #statustype=\"ngModel\" required>\n                <option *ngFor=\"let stl of properties.STATUS\" [ngValue]=\"stl\">\n                  {{ stl }}\n                </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Status Type is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Order<span class=\"required\">*</span></label>\n              <input type=\"number\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R' \" [(ngModel)]=\"model.ordr\"\n                name=\"order\" [ngClass]=\"{'is-invalid': f.submitted && order.invalid}\" #order=\"ngModel\" required>\n              <div class=\"invalid-feedback\">\n                order is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description<span class=\"required\">*</span></label>\n              <textarea cols=\"10\" rows=\"10\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" name=\"decription\"\n                [ngClass]=\"{'is-invalid': f.submitted && description.invalid}\" #description=\"ngModel\"\n                required></textarea>\n              <div class=\"invalid-feedback\">\n                description is mandatory\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">Add</button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Client Position Status</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/client-position-status/client-position-status.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC1wb3NpdGlvbi1zdGF0dXMvRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcY2xpZW50LXBvc2l0aW9uLXN0YXR1c1xcY2xpZW50LXBvc2l0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50LXBvc2l0aW9uLXN0YXR1cy9jbGllbnQtcG9zaXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/client-position-status/client-position-status.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClientPositionStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionStatusComponent", function() { return ClientPositionStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _client_position_status_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-position-status.model */ "./src/app/layout/client-position-status/client-position-status.model.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
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









var ClientPositionStatusComponent = /** @class */ (function () {
    function ClientPositionStatusComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.clientPositionStatusList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__["Properties"]();
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.isCreate = false;
        this.showAction = false;
        this.actionsList = new _client_position_status_model__WEBPACK_IMPORTED_MODULE_2__["ActionsList"]();
        this.action = null;
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ClientPositionStatusComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientPositionStatusComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
    };
    ClientPositionStatusComponent.prototype.init = function () {
        var _this = this;
        this.spinner(false);
        this.http.get(this.urlConstants.CPSGetAll).subscribe(function (resp) {
            _this.spinner(true);
            _this.clientPositionStatusList = resp;
        });
    };
    ClientPositionStatusComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CPSGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.clientPositionStatusList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientPositionStatusList.noOfRecords;
        });
    };
    ClientPositionStatusComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    ClientPositionStatusComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    ClientPositionStatusComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ClientPositionStatusComponent.prototype.getById = function (id) {
        var _this = this;
        this.http.get(this.urlConstants.CPSGetById + id).subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
        });
    };
    ClientPositionStatusComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    ClientPositionStatusComponent.prototype.formReset = function () {
        this.model = {};
    };
    ClientPositionStatusComponent.prototype.create = function (clientPositionStatusForm) {
        var _this = this;
        this.isCreate = true;
        this.spinner(false);
        this.http.post(this.model, this.urlConstants.CPSCreate).subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.POS_STATUS);
            _this.init();
            _this.formReset();
            _this.spinner(true);
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            clientPositionStatusForm.resetForm();
            _this.isCreate = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.POS_STATUS);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    ClientPositionStatusComponent.prototype.update = function (clientApplicationStatusForm) {
        var _this = this;
        this.spinner(false);
        this.http.update(this.model, this.urlConstants.CPSUpdate).subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.POS_STATUS);
            _this.formReset();
            _this.init();
            _this.initialGetAll();
            _this.spinner(true);
            clientApplicationStatusForm.resetForm();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.POS_STATUS);
            _this.spinner(true);
        });
    };
    // editableForm(){
    //     if(this.readOnlyForm==true){
    //         this.readOnlyForm=false;
    //     }
    //     if(this.editButtonToggler==true){
    //         this.editButtonToggler=false;
    //     }
    // }
    ClientPositionStatusComponent.prototype.cancelForm = function (clientApplicationStatusForm) {
        this.formReset();
        clientApplicationStatusForm.resetForm();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
    };
    ClientPositionStatusComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        this.http
            .delete(this.urlConstants.CPSDelete + this.selectedRecrdToDel)
            .subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.POS_STATUS);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.POS_STATUS);
            _this.spinner(true);
        });
    };
    ClientPositionStatusComponent.prototype.actions = function (value, trashContent, form) {
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
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientPositionStatusComponent.prototype.open = function (event, content) {
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
    ClientPositionStatusComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientPositionStatusComponent.prototype.getDismissReason = function (reason) {
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
    ClientPositionStatusComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientPositionStatusComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientPositionStatusComponent.prototype, "getScreenSize", null);
    ClientPositionStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-position-status",
            template: __webpack_require__(/*! ./client-position-status.component.html */ "./src/app/layout/client-position-status/client-position-status.component.html"),
            styles: [__webpack_require__(/*! ./client-position-status.component.scss */ "./src/app/layout/client-position-status/client-position-status.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], ClientPositionStatusComponent);
    return ClientPositionStatusComponent;
}());



/***/ }),

/***/ "./src/app/layout/client-position-status/client-position-status.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status.model.ts ***!
  \*******************************************************************************/
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

/***/ "./src/app/layout/client-position-status/client-position-status.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/client-position-status/client-position-status.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClientPositionStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionStatusModule", function() { return ClientPositionStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_position_status_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-position-status-routing.module */ "./src/app/layout/client-position-status/client-position-status-routing.module.ts");
/* harmony import */ var _client_position_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-position-status.component */ "./src/app/layout/client-position-status/client-position-status.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientPositionStatusModule = /** @class */ (function () {
    function ClientPositionStatusModule() {
    }
    ClientPositionStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_position_status_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientPositionStatusRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ],
            declarations: [_client_position_status_component__WEBPACK_IMPORTED_MODULE_5__["ClientPositionStatusComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]]
        })
    ], ClientPositionStatusModule);
    return ClientPositionStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-position-status-client-position-status-module.js.map