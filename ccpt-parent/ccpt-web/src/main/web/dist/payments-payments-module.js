(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./src/app/layout/payments/payments-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/payments/payments-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.component */ "./src/app/layout/payments/payments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"]
    }
];
var PaymentsRoutingModule = /** @class */ (function () {
    function PaymentsRoutingModule() {
    }
    PaymentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PaymentsRoutingModule);
    return PaymentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/payments/payments.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/payments/payments.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-user'\" [heading1]=\"'Administration'\" [icon2]=\"'fa-inr'\" [heading2]=\"'Payments'\">\n  </app-page-header>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 tableFixHead\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Invoice\n              </th>\n              <th>\n                Company\n              </th>\n              <th>\n                Consultant\n                <!-- </th>\n              <th>\n                <span class=\"pull-right\">Action</span>\n              </th> -->\n              </th>\n              <th>Pending Since</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pl of paymentsList.list | paginate: paginateConfig; let i = index\" (click)=\"setModel(pl.id)\"\n              [ngClass]=\"{ 'bl-green': pl.paidStatus == 'Paid', 'bl-red':  pl.paidStatus == 'Unpaid'}\">\n              <td>\n                {{ pl.invoiceDate | date }}\n              </td>\n              <td>\n                {{ pl.companyName }}\n              </td>\n              <td>\n                {{ pl.candidateName }}\n              </td>\n              <td>\n                {{(pl.paidStatus === 'Unpaid' && calculatePendingSince(pl.joiningDate) > 0) ? calculatePendingSince(pl.joiningDate)+' days' : ''}}\n              </td>\n              <!-- <td width=\"100\">\n                <app-action [trashContent]=\"trashContent\" [id]=\"pl.id\" [isTrash]=\"trash\" (trash)=\"open($event)\"> </app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"paymentsList.noOfRecords > properties.ITEMSPERPAGE\">\n          <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"paymentsForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate\n        *ngIf=\"(clientApplicationList.length > 0 && enableButtonType == '') || (clientApplicationList.length < 0 || enableButtonType != '')\">\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n                  Edit\n                </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'R'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                                Dropdown\n                            </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, uploadContent)\">File Upload</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"downloadBif()\">Download BIF</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group \" data-provide=\"datepicker\">\n              <label>Invoice Date<span class=\"required\">*</span></label>\n              <input type=\"date\" class=\"form-control\" name=\"invoiceDate\" [(ngModel)]=\"model.invoiceDate\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && invoiceDate.invalid }\" #invoiceDate=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" (change)=\"setJoiningDate()\" max=\"9999-12-31\" required />\n              <div class=\"invalid-feedback\">\n                Invoice Date is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\" *ngIf=\"readOnlyForm == ''\">\n            <div class=\"form-group\">\n              <label>Client Application<span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"cp\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"caId\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && cp.invalid }\" #cp=\"ngModel\" (change)=\"getCPDetails(caId)\"\n                required>\n                <option *ngFor=\"let cal of clientApplicationList\" [ngValue]=\"cal.id\">{{ cal.name }} </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Client Application is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Company Name<span class=\"required\">*</span></label>\n              <input class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.companyName\"\n                name=\"name\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" #name=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Company name is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Company Website<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.companyWebsite\" name=\"web\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && web.invalid }\" #web=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Company website is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Company Gst<span class=\"required\">*</span></label>\n              <input class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.companyGstNum\"\n                name=\"companyGstNum\" [ngClass]=\"{ 'is-invalid': f.submitted && companyGstNum.invalid }\"\n                #companyGstNum=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Company gst is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Credit Period<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.creditPeriod\"\n                name=\"creditPeriod\" [ngClass]=\"{ 'is-invalid': f.submitted && creditPeriod.invalid }\"\n                #creditPeriod=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Credit period is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Guarentee Period<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.gauranteePeriod\" name=\"gauranteePeriod\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && gauranteePeriod.invalid }\" #gauranteePeriod=\"ngModel\"\n                required />\n              <div class=\"invalid-feedback\">\n                Guarentee period is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Amount Receivable</label>\n              <input type=\"number\" class=\"form-control capi\" [readonly]=\"true\" [(ngModel)]=\"model.amountReceivable\"\n                name=\"amountReceivable\" #amountReceivable=\"ngModel\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Contact person<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactPerson\"\n                name=\"contactPerson\" [ngClass]=\"{ 'is-invalid': f.submitted && contactPerson.invalid }\"\n                #contactPerson=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Contact person is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Contact Person Designation<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactPersonDesignation\"\n                name=\"contactPersonDesignation\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && contactPersonDesignation.invalid }\"\n                #contactPersonDesignation=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Contact person designation is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Contact person Ph.<span class=\"required\">*</span></label>\n              <input class=\"form-control capi\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactPersonNum\"\n                name=\"contactPersonNum\" [ngClass]=\"{ 'is-invalid': f.submitted && contactPersonNum.invalid }\"\n                #contactPersonNum=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Phone is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Contact person email</label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactPersonEmail\"\n                name=\"contactPersonEmail\" [ngClass]=\"{ 'is-invalid': f.submitted && contactPersonEmail.invalid }\"\n                #contactPersonEmail=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Email is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group \" data-provide=\"datepicker\">\n              <label>Joining Date<span class=\"required\">*</span></label>\n              <input type=\"date\" class=\"form-control\" name=\"joiningDate\" [(ngModel)]=\"model.joiningDate\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && joiningDate.invalid }\" #joiningDate=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" required />\n              <div class=\"invalid-feedback\">\n                Joining date is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Candidate Name<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"candidateName\" [(ngModel)]=\"model.candidateName\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && candidateName.invalid }\" candidateName\n                [readonly]=\"readOnlyForm == 'R'\" required />\n              <div class=\"invalid-feedback\">\n                Candidate Name is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Designation<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"designation\" [(ngModel)]=\"model.designation\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && designation.invalid }\" #designation=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" required />\n              <div class=\"invalid-feedback\">\n                Designation is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Annual Package<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"annualPackage\" [(ngModel)]=\"model.annualPackage\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && annualPackage.invalid }\" #annualPackage=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" (blur)=\"calculateAmountReceivable()\" required />\n              <div class=\"invalid-feedback\">\n                Annual package is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Phone<span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.phone\" name=\"phone\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" #phone=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Phone is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Branch Head<span class=\"required\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"branchHeadName\" [(ngModel)]=\"model.branchHeadName\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && branchHeadName.invalid }\" #branchHeadName=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" required />\n              <div class=\"invalid-feedback\">\n                Branch Head Name is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Branch Location <span class=\"required\">*</span></label>\n              <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.branchLocation\"\n                name=\"branchLocation\" [ngClass]=\"{ 'is-invalid': f.submitted && branchLocation.invalid }\"\n                #branchLocation=\"ngModel\" required />\n              <div class=\"invalid-feedback\">\n                Branch location is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Service Charge <span class=\"required\">*</span></label>\n              <input type=\"number\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.serviceCharge\" name=\"serviceCharge\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && serviceCharge.invalid }\" #serviceCharge=\"ngModel\"\n                (blur)=\"calculateAmountReceivable()\" required />\n              <div class=\"invalid-feedback\">\n                Service charge is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Payment Status <span class=\"required\">*</span></label>\n              <select class=\"form-control\" name=\"ps\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.paidStatus\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && ps.invalid }\" #ps=\"ngModel\" required>\n                <option *ngFor=\"let cal of properties.PAYMENT_STATUS\">{{ cal }} </option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Payment Status is mandatory\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\" *ngIf=\"model.paidStatus == 'Paid'\">\n            <div class=\"form-group\" data-provide=\"datepicker\">\n              <label>Paid On <span class=\"required\">*</span></label>\n              <input type=\"date\" class=\"form-control\" name=\"paidOn\" [(ngModel)]=\"model.paidOn\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && paidOn.invalid }\" #paidOn=\"ngModel\"\n                [readonly]=\"readOnlyForm == 'R'\" required />\n              <div class=\"invalid-feedback\">\n                Paid On is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Billing Address<span class=\"required\">*</span></label>\n              <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.billingAddress\" name=\"billingAddress\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && billingAddress.invalid }\" #billingAddress=\"ngModel\"\n                required></textarea>\n              <div class=\"invalid-feedback\">\n                Billing address is mandatory\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"col-md-12 ml-3\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.description\" name=\"description\" #notes=\"ngModel\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Additional Properties</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-5\">\n                  <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                    [readonly]=\"readOnlyForm == 'R'\" />\n                </div>\n                <div class=\"col-md-2\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                    (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"model?.files?.length > 0\">\n          <div class=\"col-md-12 ml-3\">\n            <div class=\"form-group\">\n              <label>Files</label>\n              <div class=\"row\" *ngFor=\"let ap of model.files; let i = index\">\n                <div class=\"col-md-5\">\n                  <span class=\"file-download\" (click)=\"downloadFile(ap.id)\">\n                    {{ ap.fileName }}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" class=\"btn btn-secondary ml-3\"\n              *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #uploadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ properties.UPOAD }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <input class=\"form-control\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    <textarea class=\"form-control mt-3\" placeholder=\"comments\" cols=\"5\" rows=\"5\" [(ngModel)]=\"comments\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"uploadFiles()\">Upload</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/payments/payments.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/payments/payments.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.bl-trans {\n  border-left: 6px solid transparent; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n.file-download:hover {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BheW1lbnRzL0Q6XFxDQ1BUIE1BSU5cXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXHBheW1lbnRzXFxwYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUNBQWtDLEVBQ25DOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUI7O0FBRUg7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMxLjVlbTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJsLXRyYW5zIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbi5maWxlLWRvd25sb2FkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/payments/payments.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/payments/payments.component.ts ***!
  \*******************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _payments_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.model */ "./src/app/layout/payments/payments.model.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.model = {};
        this.paymentsList = [];
        this.clientApplicationList = [];
        this.consultantList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_10__["Properties"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.currSearchTxt = "";
        this.caId = 0;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.apName = "";
        this.apValue = "";
        this.comments = "";
        this.showAction = false;
        this.actionsList = new _payments_model__WEBPACK_IMPORTED_MODULE_2__["ActionsList"]();
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
        this.action = null;
        this.isCreate = false;
        this.getAllCA = this.http.get(this.urlConstants.CAJobConfirmed);
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    PaymentsComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    PaymentsComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
        this.initialGetAll();
        this.spinner(true);
        this.getAllDropdowns();
    };
    PaymentsComponent.prototype.init = function () {
        // this.spinner(false);
        // this.http.get(this.urlConstants.PaymentGetAll).subscribe(resp => {
        //     this.paymentsList = resp as any;
        //     this.spinner(true);
        // });
        this.getTodaysDate();
        this.setDefaultValues();
        this.model.properties = [];
        this.model.files = [];
    };
    PaymentsComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.PaymentGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.paymentsList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.paymentsList.noOfRecords;
        });
    };
    PaymentsComponent.prototype.getAllDropdowns = function () {
        var _this = this;
        this.spinner(false);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.getAllCA
        // forkJoin on works for observables that complete
        ).subscribe(function (listofrecords) {
            _this.clientApplicationList = listofrecords[0];
            _this.spinner(true);
        });
    };
    PaymentsComponent.prototype.validate = function (value) {
        var bool = value == null ? true : false;
        return bool;
    };
    PaymentsComponent.prototype.setDefaultValues = function () {
        this.model.branchHeadName = this.properties.HEAD;
        this.model.phone = this.properties.PHONE;
        this.model.branchLocation = this.properties.LOCATION;
        this.model.paidStatus = this.properties.PAYMENT_STATUS[1];
    };
    PaymentsComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        var yyyy = today.getFullYear();
        var temp = yyyy + "-" + mm + "-" + dd;
        this.model.invoiceDate = temp;
        this.model.joiningDate = temp;
    };
    PaymentsComponent.prototype.setJoiningDate = function () {
        this.model.joiningDate = this.model.invoiceDate;
    };
    PaymentsComponent.prototype.dblSetModel = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
        this.action = null;
    };
    PaymentsComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
    };
    PaymentsComponent.prototype.setModel = function (id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = "R";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    PaymentsComponent.prototype.getById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.PaymentGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            _this.spinner(true);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
        });
    };
    PaymentsComponent.prototype.getCPDetails = function (caId) {
        var _this = this;
        this.spinner(false);
        this.http.get(this.urlConstants.CAGetById + caId).subscribe(function (resp) {
            var temp = resp;
            _this.model.companyName = temp.clientPosition.client.name;
            _this.model.companyWebsite = temp.clientPosition.client.website;
            _this.model.companyGstNum = temp.clientPosition.client.gst;
            _this.model.creditPeriod = temp.clientPosition.client.creditPeriod;
            _this.model.gauranteePeriod = temp.clientPosition.client.guaranteePeriod;
            _this.model.contactPerson = temp.clientPosition.client.contactPersonName;
            _this.model.contactPersonNum = temp.clientPosition.client.phone;
            _this.model.contactPersonEmail = temp.clientPosition.client.email;
            _this.model.designation = temp.clientPosition.role;
            _this.model.billingAddress = temp.clientPosition.client.billingAddress;
            _this.model.serviceCharge = temp.clientPosition.client.serviceCharge;
            _this.model.candidateName = temp.consultant.fullname;
            _this.model.generatedCode = temp.clientPosition.generatedCode;
            _this.spinner(true);
        });
    };
    PaymentsComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        return this.model;
    };
    PaymentsComponent.prototype.propertiesListIncrement = function (event, i) {
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
    PaymentsComponent.prototype.actions = function (value, trashContent, form) {
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
    PaymentsComponent.prototype.formReset = function () {
        this.model = { properties: [] };
    };
    PaymentsComponent.prototype.create = function (paymentsForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.PaymentCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CONTACT);
            _this.init();
            _this.formReset();
            paymentsForm.resetForm();
            _this.isCreate = false;
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CONTACT);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    PaymentsComponent.prototype.update = function (paymentsForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.update(this.model, this.urlConstants.PaymentUpdate);
        temp.subscribe(function (resp) {
            _this.formReset();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CONTACT);
            _this.init();
            paymentsForm.resetForm();
            _this.initialGetAll();
            _this.isCreate = false;
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CONTACT);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    PaymentsComponent.prototype.cancelForm = function (consultantCallHistory) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.init();
    };
    PaymentsComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.PaymentDelete + this.selectedRecrdToDel);
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
    /** Get Uploaded files */
    PaymentsComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    /**Download file */
    PaymentsComponent.prototype.downloadFile = function (id) {
        this.http.get(this.urlConstants.FileDownload + id).subscribe(function (resp) { }, function (err) {
            if (err.status == 200)
                window.open(err.url);
        });
    };
    /** Upload documents of respective consultant */
    PaymentsComponent.prototype.uploadFiles = function () {
        var _this = this;
        var files = this.getFiles();
        var formData = new FormData();
        formData.append("file", files[0].rawFile, files[0].name);
        var params = "refId=" +
            this.selectedRecrdToDel +
            "&refType=Payment&comments=" +
            this.comments;
        this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(function (resp) {
            var temp = resp;
            _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
            _this.toastr.success(temp.message, "Client");
            _this.close();
        }, function (err) {
            _this.toastr.success(err.error.message, "Client");
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    PaymentsComponent.prototype.open = function (event, content) {
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
    PaymentsComponent.prototype.close = function () {
        this.modalRef.close();
    };
    PaymentsComponent.prototype.getDismissReason = function (reason) {
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
    PaymentsComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    /**Download file */
    PaymentsComponent.prototype.downloadBif = function () {
        this.http.get(this.urlConstants.PaymentGetExcel + this.model.id).subscribe(function (resp) { }, function (err) {
            if (err.status == 200)
                window.open(err.url);
        });
    };
    PaymentsComponent.prototype.calculateAmountReceivable = function () {
        if (this.model.annualPackage && this.model.serviceCharge)
            this.model.amountReceivable =
                parseFloat(this.model.annualPackage) *
                    1.18 *
                    parseFloat(this.model.serviceCharge) *
                    0.0075;
    };
    PaymentsComponent.prototype.calculatePendingSince = function (jd) {
        var today = new Date().getTime();
        var joiningDate = new Date(jd).getTime();
        return Math.round(Math.abs(today - joiningDate) / (1000 * 3600 * 24));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PaymentsComponent.prototype, "getScreenSize", null);
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-payments",
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/layout/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/layout/payments/payments.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/payments/payments.model.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/payments/payments.model.ts ***!
  \***************************************************/
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

/***/ "./src/app/layout/payments/payments.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/payments/payments.module.ts ***!
  \****************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments.component */ "./src/app/layout/payments/payments.component.ts");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/layout/payments/payments-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PaymentsModule = /** @class */ (function () {
    function PaymentsModule() {
    }
    PaymentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                _payments_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__["AngularEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"]]
        })
    ], PaymentsModule);
    return PaymentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=payments-payments-module.js.map