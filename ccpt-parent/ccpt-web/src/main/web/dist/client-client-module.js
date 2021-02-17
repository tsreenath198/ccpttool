(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/layout/client/client-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/client/client-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/layout/client/client.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client/client.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-building'\" [heading1]=\"'Client'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" placeholder=\"search...\"\n            [(ngModel)]=\"currSearchTxt\" /></div>\n      </div>\n      <div class=\"table-responsive mt-2 table-wrapper-scroll-y my-custom-scrollbar\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Name\n              </th>\n              <th>\n                Phone\n              </th>\n              <th>\n                Email\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let cl of clientList.list | filter: currSearchTxt | paginate: paginateConfig; let i = index\"\n              (click)=\"setModel(cl.id)\">\n              <td>\n                {{ cl.name }}\n              </td>\n              <td>\n                {{ cl.phone }}\n              </td>\n              <td>\n                {{ cl.email }}\n              </td>\n              <!-- <td width=\"140\">\n                <app-action [trashContent]=\"trashContent\" [uploadContent]=\"uploadContent\"\n                  [downloadContent]=\"downloadContent\" [id]=\"cl.id\" [isTrash]=\"trash\" [isUpload]=\"upload\"\n                  [isDownload]=\"download\" (upload)=\"open($event)\" (download)=\"open($event)\" (trash)=\"open($event)\">\n                </app-action>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"clientList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\" col-md-5\">\n      <form name=\"form\" id=\"clientForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\" *ngIf=\"loggedInRole != 'User'\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"emptyForm(f)\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\"\n              class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"editForm()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"emptyForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, uploadContent)\">File Upload</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model.name\">\n                <th>Client Name</th>\n                <td>{{ model.name }}</td>\n              </tr>\n              <tr *ngIf=\"model.contactPersonName\">\n                <th>Contact Person Name</th>\n                <td>{{ model.contactPersonName }}</td>\n              </tr>\n              <tr *ngIf=\"model.contactPersonDesignation\">\n                <th>Contact Person Designation</th>\n                <td>{{ model.contactPersonDesignation }}</td>\n              </tr>\n              <tr *ngIf=\"model.industryType.name\">\n                <th>Industry Type</th>\n                <td>{{ model.industryType.name }}</td>\n              </tr>\n              <tr *ngIf=\"model.website\">\n                <th>Website</th>\n                <td>{{ model.website }}</td>\n              </tr>\n              <tr *ngIf=\"model.phone\">\n                <th>Phone</th>\n                <td>{{ model.phone }}</td>\n              </tr>\n              <tr *ngIf=\"model.email\">\n                <th>Email</th>\n                <td>{{ model.email }}</td>\n              </tr>\n              <tr *ngIf=\"model.guaranteePeriod\">\n                <th>Guarantee Period</th>\n                <td>{{ model.guaranteePeriod }}</td>\n              </tr>\n              <tr *ngIf=\"model.creditPeriod\">\n                <th>Credit Period</th>\n                <td>{{ model.creditPeriod }}</td>\n              </tr>\n              <tr *ngIf=\"model.servicetaxNo\">\n                <th>Service Tax no.</th>\n                <td>{{ model.servicetaxNo }}</td>\n              </tr>\n              <tr *ngIf=\"model.serviceCharge\">\n                <th>Service Charge</th>\n                <td>{{ model.serviceCharge }}</td>\n              </tr>\n              <tr *ngIf=\"model.gst\">\n                <th>GST</th>\n                <td>{{ model.gst }}</td>\n              </tr>\n              <tr *ngIf=\"model.description\">\n                <th>Description</th>\n                <td>\n                  <p [innerHTML]=\"model.description\"></p>\n                </td>\n              </tr>\n              <tr *ngIf=\"model.address\">\n                <th>Address</th>\n                <td>{{ model.address }}</td>\n              </tr>\n              <tr *ngIf=\"model.mapLocation\">\n                <th>Map Location</th>\n                <td>{{ model.mapLocation }}</td>\n              </tr>\n              <tr *ngIf=\"model.address != model.billingAddress\">\n                <th>Billing Address</th>\n                <td>{{ model.billingAddress }}</td>\n              </tr>\n              <tr *ngFor=\"let ap of model.properties\">\n                <th>{{ ap.name }}</th>\n                <td>{{ ap.value }}</td>\n              </tr>\n              <tr *ngFor=\"let cc of model.clientContacts\">\n                <th>Contact</th>\n                <td>\n                  {{ cc.fullname }}<br />\n                  {{ cc.email }}<br />\n                  {{ cc.phone }}\n                </td>\n              </tr>\n              <tr *ngFor=\"let fl of model.files\">\n                <th>Files</th>\n                <td class=\"file-download\" (click)=\"downloadFile(fl.id)\">{{ fl.fileName }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Client Name<span class=\"required\">*</span></label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.name\" name=\"code\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && code.invalid }\" #code=\"ngModel\" #clientName\n                  (blur)=\"transformTitleCase(clientName)\" required />\n                <div class=\"invalid-feedback\">\n                  client name is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Industry Type</label>\n                <select class=\"form-control \" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.industryId\"\n                  name=\"industryType\" [ngClass]=\"{ 'is-invalid': f.submitted && industryType.invalid }\" #con=\"ngModel\">\n                  <option *ngFor=\"let itl of itList.list\" [ngValue]=\"itl.id\">{{ itl.name }}</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Consultant is mandatory\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Salutation<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"gender\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.salutation\" [ngClass]=\"{ 'is-invalid': f.submitted && gender.invalid }\"\n                  #gender=\"ngModel\" required>\n                  <option *ngFor=\"let cs of properties.SALUTATION\">\n                    {{ cs }}\n                  </option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  gender is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5\" style=\"margin-left:-20px;\">\n              <div class=\"form-group\">\n                <label>Contact Person Name</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.contactPersonName\"\n                  name=\"cpn\" [ngClass]=\"{ 'is-invalid': f.submitted && cpn.invalid }\" #cpn=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Designation</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.contactPersonDesignation\" name=\"cpd\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && cpd.invalid }\" #cpd=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Phone</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.phone\" name=\"phone\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" #phone=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.email\" name=\"email\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" #email=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Guarantee Period</label>\n                <input type=\"text\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.guaranteePeriod\" name=\"guaranteePeriod\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && guaranteePeriod.invalid }\" #guaranteePeriod=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Credit Period</label>\n                <input class=\"form-control\" type=\"text\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.creditPeriod\" name=\"creditPeriod\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && creditPeriod.invalid }\" #creditPeriod=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Service Tax no</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.servicetaxNo\"\n                  name=\"servicetaxNo\" [ngClass]=\"{ 'is-invalid': f.submitted && servicetaxNo.invalid }\"\n                  #servicetaxNo=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Service Charge</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.serviceCharge\"\n                  name=\"serviceCharge\" [ngClass]=\"{ 'is-invalid': f.submitted && serviceCharge.invalid }\"\n                  #serviceCharge=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>GST</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.gst\" name=\"gst\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && gst.invalid }\" #gst=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Website</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.website\" name=\"web\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && web.invalid }\" #web=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <input type=\"checkbox\" [(ngModel)]=\"model.shareContactInfo\"\n                  name=\"shareContactInfo\" />&nbsp;\n                  <label>Share Contact Info</label>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                  <div class=\"col-md-5 pt-2\">\n                    <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5 pt-2\">\n                    <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <angular-editor [(ngModel)]=\"model.description\" name=\"description\" [config]=\"config\"></angular-editor>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Address</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.address\" name=\"add\" [ngClass]=\"{ 'is-invalid': f.submitted && add.invalid }\"\n                  #add=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 pb-2\">\n              <input type=\"checkbox\" class=\"\" [(ngModel)]=\"address\" (change)=\"billngAddressMatch()\"\n                name=\"interviewCheckbox\" />&nbsp;<label>Billing address is same as address</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Billing Address</label>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.billingAddress\" name=\"billingAddress\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && billingAddress.invalid }\"\n                  #billingAddress=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Map Location</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.mapLocation\"\n                  name=\"mapLoc\" [ngClass]=\"{ 'is-invalid': f.submitted && web.invalid }\" #mapLoc=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <strong>Add Contacts</strong>\n          <div class=\"row\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-hover table-striped\">\n                <tbody>\n                  <tr *ngFor=\"let cc of model.clientContacts; let i = index\">\n                    <td>\n                      <input class=\"form-control form-control-sm\" [readonly]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"cc.fullname\" name=\"fullname{{ i }}\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && fullname.invalid }\" placeholder=\"fullname\"\n                        #fullname=\"ngModel\" />\n                    </td>\n                    <td>\n                      <input class=\"form-control form-control-sm\" type=\"email\" [readonly]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"cc.email\" name=\"email{{ i }}\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" placeholder=\"email\"\n                        #email=\"ngModel\" />\n                    </td>\n                    <td>\n                      <!--pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==12) return false;\"-->\n                      <input class=\"form-control form-control-sm\" type=\"string\" [readonly]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"cc.phone\" name=\"phone{{ i }}\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" placeholder=\"phone\"\n                        #phone=\"ngModel\" />\n                    </td>\n                    <td width=\"20\">\n                      <i class=\"fa fa-minus\" *ngIf=\"model.clientContacts.length > 1\" style=\"font-size:15px\"\n                        aria-hidden=\"true\" id=\"decrease\" (click)=\"contactListIncrement($event.target, i)\"></i>\n                      <i class=\"fa fa-plus\" style=\"font-size:15px\" *ngIf=\"i + 1 == model.clientContacts.length\"\n                        aria-hidden=\"true\" id=\"increase\" (click)=\"contactListIncrement($event.target, i)\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"modal-body\" *ngIf=\"model?.files?.length > 0\">\n                <table class=\"table\">\n                  <thead>\n                    <th>File Name</th>\n                    <th>Description</th>\n                    <th>Action</th>\n                  </thead>\n                  <tbody *ngFor=\"let fl of model.files\">\n                    <td>{{ fl.fileName }}</td>\n                    <td>{{ fl.Description }}</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-secondary btn-sm\"\n                        (click)=\"downloadFile(fl.id)\">Download</button>\n                    </td>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n\n        <div class=\"row text-center\" *ngIf=\"loggedInRole != 'User'\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\"\n              (click)=\"update(f)\">Update</button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"emptyForm(f)\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ properties.APP_STATUS }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{ properties.CONFIRM_DELETE }} ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<ng-template #uploadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ properties.UPLOAD }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <input class=\"form-control\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    <textarea class=\"form-control mt-3\" placeholder=\"Comments\" cols=\"5\" rows=\"5\" [(ngModel)]=\"comments\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"uploadFiles()\">Upload</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<ng-template #downloadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Client {{ properties.DOWNLOAD }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"model.files.length > 0; else emptyMsg\">\n    <table class=\"table\">\n      <thead>\n        <th>File Name</th>\n        <th>Description</th>\n        <th>Action</th>\n      </thead>\n      <tbody *ngFor=\"let fl of model.files\">\n        <td>{{ fl.fileName }}</td>\n        <td>{{ fl.Description }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"downloadFile(fl.id)\">Download</button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #emptyMsg>\n  <h3 class=\"text-center\">No Files to download</h3>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/client/client.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.file-download:hover {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC9EOlxcQ0NQVCBNQUlOXFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxjbGllbnRcXGNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNIO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFlBQVU7RUFDViwyQkFBMEIsRUFDMUI7O0FBQ0Q7RUFFRywwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDsgXHJcbn1cclxuLnBhZGRpbmctdG9we1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uZHJvcC1saXN0OmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlsZS1kb3dubG9hZDpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6Ymx1ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuIH1cclxuIC50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/client/client.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/client/client.component.ts ***!
  \***************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientComponent = /** @class */ (function () {
    function ClientComponent(http, toastr, modalService, router, storageService) {
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.storageService = storageService;
        this.model = {};
        this.clientList = [];
        this.itList = [];
        this.currSearchTxt = "";
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.comments = "";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
        this.fileList = [];
        this.address = false;
        this.showAction = false;
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.download = "download";
        this.upload = "upload";
        this.apName = "";
        this.apValue = "";
        this.loggedInRole = "";
        this.isCreate = false;
        this.getAllIT = this.http.get(this.urlConstants.ITGetAll + '0&pageSize=100000&sortBy=id');
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no"
        };
        this.paginateConfig = {
            itemsPerPage: this.properties.ITEMSPERPAGE,
            currentPage: 1,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ClientComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.loggedInRole = sessionStorage.getItem("role");
        this.init();
        this.setClientContactModel();
        this.initialGetAll();
        this.getIndustryType();
        this.spinner(true);
        this.storageService.clientId = null;
    };
    ClientComponent.prototype.init = function () {
        this.model.properties = [];
        this.model.files = [];
        this.model.serviceCharge = "8.33";
        this.model.guaranteePeriod = "3 months";
        this.model.creditPeriod = "1 month";
        this.model.phone = "+91 ";
        this.setAdditionalDefaultProps();
    };
    ClientComponent.prototype.getIndustryType = function () {
        var _this = this;
        this.getAllIT.subscribe(function (resp) {
            _this.itList = resp;
        });
    };
    ClientComponent.prototype.setClientContactModel = function () {
        this.model.clientContacts = [
            { fullname: "", email: "", phone: "+91 " }
        ];
    };
    ClientComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.ClientGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.clientList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientList.noOfRecords;
        });
    };
    ClientComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientComponent.prototype.setAdditionalDefaultProps = function () {
        this.model.properties.push({ name: "Company Size", value: "" }, { name: "Establishment Year", value: "" }, { name: "Branches", value: "" }, { name: "Certification", value: "" });
    };
    ClientComponent.prototype.editForm = function () {
        this.readOnlyForm = "";
        this.enableButtonType = "U";
    };
    ClientComponent.prototype.setModel = function (id) {
        this.getById(id);
        this.readOnlyForm = "U";
        this.enableButtonType = "E";
        this.showAction = true;
    };
    ClientComponent.prototype.getById = function (id) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.get(this.urlConstants.ClientGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
            _this.spinner(true);
        });
    };
    ClientComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        this.model["industryId"] = temp.industryType.id;
        return this.model;
    };
    ClientComponent.prototype.formReset = function () {
        this.model = { properties: [] };
        this.model.serviceCharge = "8.33";
        this.model.guaranteePeriod = "3 months";
        this.model.creditPeriod = "1 month";
        this.model.phone = "+91 ";
    };
    ClientComponent.prototype.create = function (clientForm) {
        var _this = this;
        if (!this.http.checkAdditionPropValueExist(this.model.properties)) {
            this.toastr.error("Please provide all property values", this.properties.CLIENT);
        }
        else {
            this.isCreate = true;
            this.spinner(false);
            var temp = this.http.post(this.model, this.urlConstants.ClientCreate);
            temp.subscribe(function (resp) {
                _this.successHandle();
                clientForm.resetForm();
                _this.setClientContactModel();
                _this.isCreate = false;
                _this.paginateConfig.currentPage = 1;
                _this.initialGetAll();
                _this.createCPReq(resp);
            }, function (err) {
                _this.errorHandle(err);
                _this.isCreate = false;
            });
        }
    };
    ClientComponent.prototype.successHandle = function () {
        this.toastr.success(this.properties.CREATE, this.properties.CLIENT);
        this.init();
        this.formReset();
        this.spinner(true);
    };
    ClientComponent.prototype.createCPReq = function (resp) {
        var decision = confirm(this.properties.CONFIRM_CP_NEW);
        if (decision == true) {
            /**set consultant id in storage service*/
            this.storageService.clientId = resp.id;
            this.router.navigate(["/layout/client-position"]);
        }
    };
    ClientComponent.prototype.update = function (clientForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.ClientUpdate);
        temp.subscribe(function (resp) {
            _this.successHandle();
            _this.setClientContactModel();
            clientForm.resetForm();
            _this.initialGetAll();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.errorHandle(err);
        });
    };
    ClientComponent.prototype.emptyForm = function (cchForm) {
        cchForm.resetForm();
        this.formReset();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.init();
        this.setClientContactModel();
    };
    ClientComponent.prototype.contactListIncrement = function (event, i) {
        switch (event.id) {
            case "decrease": {
                this.model.clientContacts.splice(i, 1);
                break;
            }
            case "increase": {
                this.model.clientContacts.push({
                    fullname: "",
                    email: "",
                    phone: "+91 "
                });
                break;
            }
        }
    };
    ClientComponent.prototype.propertiesListIncrement = function (event, i) {
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
    ClientComponent.prototype.billngAddressMatch = function () {
        if (this.address === true) {
            this.model.billingAddress = this.model.address;
        }
        else {
            this.model.billingAddress = "";
        }
    };
    ClientComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.ClientDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.successHandle();
            _this.close();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.initialGetAll();
        }, function (err) {
            _this.errorHandle(err);
        });
    };
    ClientComponent.prototype.errorHandle = function (err) {
        this.toastr.error(err.error.message, this.properties.CLIENT);
        this.spinner(true);
    };
    ClientComponent.prototype.getFilesById = function (id) {
        var _this = this;
        this.spinner(false);
        this.http.get("/uploadFile/id?id=" + id).subscribe(function (resp) {
            _this.fileList.push(resp);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientComponent.prototype.open = function (event, content) {
        var _this = this;
        this.selectedRecrdToDel = 0;
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
    ClientComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientComponent.prototype.getDismissReason = function (reason) {
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
    /** Get Uploaded files */
    ClientComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    /**Download file */
    ClientComponent.prototype.downloadFile = function (id) {
        this.http.get(this.urlConstants.FileDownload + id).subscribe(function (resp) { }, function (err) {
            if (err.status == 200)
                window.open(err.url);
        });
    };
    /** Upload documents of respective consultant */
    ClientComponent.prototype.uploadFiles = function () {
        var _this = this;
        var files = this.getFiles();
        var formData = new FormData();
        formData.append("file", files[0].rawFile, files[0].name);
        var params = "refId=" +
            this.selectedRecrdToDel +
            "&refType=Client&comments=" +
            this.comments;
        this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(function (resp) {
            var temp = resp;
            _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
            _this.toastr.success(temp.message, "Client");
            _this.close();
        }, function (err) {
            _this.toastr.success(err.error.message, "Client");
        });
    };
    ClientComponent.prototype.transformTitleCase = function (ip) {
        var temp = ip.value.length === 0
            ? ""
            : ip.value.replace(/\w\S*/g, function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); });
        ip.value = temp;
    };
    ClientComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientComponent.prototype, "getScreenSize", null);
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client",
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/layout/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/layout/client/client.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_7__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_7__["StorageService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/client.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/client/client.module.ts ***!
  \************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.component */ "./src/app/layout/client/client.component.ts");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/layout/client/client-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__["AngularEditorModule"]
            ],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map