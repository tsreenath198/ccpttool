(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultant-consultant-module"],{

/***/ "./src/app/layout/consultant/consultant-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/consultant/consultant-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ConsultantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantRoutingModule", function() { return ConsultantRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consultant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultant.component */ "./src/app/layout/consultant/consultant.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _consultant_component__WEBPACK_IMPORTED_MODULE_2__["ConsultantComponent"]
    }
];
var ConsultantRoutingModule = /** @class */ (function () {
    function ConsultantRoutingModule() {
    }
    ConsultantRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultantRoutingModule);
    return ConsultantRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consultant/consultant.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/consultant/consultant.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-users'\" [heading1]=\"'Consultants'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control \" placeholder=\"search...\" (keyup)=\"search()\"\n            [(ngModel)]=\"currSearchTxt\" />\n        </div>\n        <div class=\" col-md-4\">\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"idToActivate\"\n              placeholder=\"Consultant ID\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text input-group-text-sm \" (click)=\"activateId()\"\n                id=\"basic-addon2\">Activate</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <button *ngIf=\"inCon\" class=\"btn btn-secondary btn-sm ml-2\" (click)=\"getIncompleteCon()\">Incomplete\n            Consultants</button>\n          <button *ngIf=\"!inCon\" class=\"btn btn-secondary btn-sm ml-2\" (click)=\"getAllCon()\">All Consultants</button>\n        </div>\n        <div class=\"col-md-4\">\n          <input type=\"checkbox\" #showAdvSearch (change)=\"advanceSearchModel = {}\"> Advance Search\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showAdvSearch.checked\">\n        <div class=\"col-md-3\">\n          <label><small>Keywords</small> </label><br>\n          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"advanceSearchModel.skills\">\n        </div>\n        <div class=\"col-md-3\">\n          <label><small>Notice Period</small> </label><br>\n          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"advanceSearchModel.noticePeriod\">\n        </div>\n        <div class=\"col-md-3\">\n          <label><small>Location</small> </label><br>\n          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"advanceSearchModel.location\">\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label><small>Experience From</small></label>\n            <div class=\"form-inline\">\n              <input type=\"text\" name=\"minExpYrs\" class=\"form-control form-control-sm col-md-2\"\n                [(ngModel)]=\"advanceSearchModel.minExpYrs\" min=\"0\" />\n              &nbsp;&nbsp; <small>years</small>&nbsp;<span> /</span>&nbsp;<input type=\"text\"\n                class=\"form-control form-control-sm col-md-2\" name=\"minExpMnths\"\n                [(ngModel)]=\"advanceSearchModel.minExpMnths\" min=\"0\" max=\"11\"\n                (onkeyup)=\"imposeMinMax(this)\" />&nbsp;&nbsp;<small>months</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label><small>Experience To</small></label>\n            <div class=\"form-inline\">\n              <input type=\"text\" name=\"maxExpYrs\" class=\"form-control form-control-sm col-md-2\"\n                [(ngModel)]=\"advanceSearchModel.maxExpYrs\" min=\"0\" />\n              &nbsp;&nbsp; <small>years</small>&nbsp;<span> /</span>&nbsp;<input type=\"text\"\n                class=\"form-control form-control-sm col-md-2\" name=\"maxExpMnths\"\n                [(ngModel)]=\"advanceSearchModel.maxExpMnths\" min=\"0\" max=\"11\" />&nbsp;&nbsp;<small>months</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\" btn btn-secondary btn-sm mt-4\" (click)=\"advanceSearch()\">Search</button>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\" btn btn-secondary btn-sm mt-4\" (click)=\"cancelAdvSearch(showAdvSearch)\">Cancel</button>\n        </div>\n      </div>\n      <div class=\"table-responsive mt-2  table-wrapper-scroll-y my-custom-scrollbar \" id=\"viewTable\"\n        [style.height.px]=\"screenHeight\">\n        <table class=\"table table-sm table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>\n                Name\n              </th>\n              <th>\n                Phone\n              </th>\n              <th>Email</th>\n              <th>\n                Experience/Qualification\n              </th>\n              <!-- <th width=\"140\">\n                    <span class=\"pull-right\">Action</span>\n                  </th> -->\n            </tr>\n          </thead>\n          <tbody class=\"overflow-ele-scroll\">\n            <tr *ngFor=\"let cl of consultantList.list | paginate: paginateConfig; let i = index\"\n              (click)=\"setModel(cl.id)\"\n              [ngClass]=\"{ 'bl-green': cl.isProfileCompleted == 'profileComplete', 'bl-red': cl.isProfileCompleted == 'profileInComplete' }\">\n              <td class=\"table-data-padding \">\n                <dl>\n                  <dt>{{ cl.fullname }}</dt>\n                  <dd data-toggle=\"tooltip\" title=\"{{ cl.skills }}\">\n                    {{ cl.skills != null ? (cl.skills.length > 30 ? (cl.skills | slice: 0:30) + ' ... ' : cl.skills) : '' }}\n                  </dd>\n                </dl>\n              </td>\n              <td>\n                {{ cl.phone }}\n              </td>\n              <td>\n                {{ cl.email }}\n              </td>\n              <td>\n                {{ cl.experienceYrs != null && cl.experienceYrs != '' ? cl.experienceYrs + 'y' : ''\n                }}{{ cl.experienceMonths != null && cl.experienceMonths != '' ? '-' + cl.experienceMonths + 'm /' : '' }}\n                {{ cl.highestEducation }}\n              </td>\n              <!--  <input type=\"file\" (change)=\"fileChange($event)\" > <span class=\"fa fa-upload pull-right\"></span> -->\n              <!-- <td width=\"140\">\n                    <app-action [trashContent]=\"trashContent\" [uploadContent]=\"uploadContent\"\n                      [downloadContent]=\"downloadContent\" [id]=\"cl.id\" [isTrash]=\"trash\" [isUpload]=\"upload\"\n                      [isDownload]=\"download\" (upload)=\"open($event)\" (download)=\"open($event)\" (trash)=\"open($event)\">\n                    </app-action>\n                  </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"consultantList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        <!-- <ngb-pagination\n          [collectionSize]=\"consultantListLength\"\n          [(page)]=\"page\"\n          [ellipses]=\"false\"\n          (pageChange)=\"pageChange($event)\"\n          [maxSize]=\"pageSize\"\n          [rotate]=\"true\"\n          [boundaryLinks]=\"true\"\n        >\n        </ngb-pagination> -->\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientPositionForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n              (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\"\n              class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, uploadContent)\">File Upload</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model.fullname\">\n                <th>Name</th>\n                <td>{{ model.fullname }}</td>\n              </tr>\n              <tr *ngIf=\"model.dob\">\n                <th>Date of Birth</th>\n                <td>{{ model.dob }}</td>\n              </tr>\n              <tr *ngIf=\"model.phone\">\n                <th>Phone</th>\n                <td>{{ model.phone }}</td>\n              </tr>\n              <tr *ngIf=\"model.email\">\n                <th>Email</th>\n                <td>{{ model.email }}</td>\n              </tr>\n              <tr *ngIf=\"model.highestEducation\">\n                <th>Qualification</th>\n                <td>{{ model.highestEducation }}</td>\n              </tr>\n              <tr *ngIf=\"model.passoutYear\">\n                <th>Passout Year</th>\n                <td>{{ model.passoutYear }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentLocation\">\n                <th>Current Location</th>\n                <td>{{ model.currentLocation }}</td>\n              </tr>\n              <tr *ngIf=\"model.prefferedLocation\">\n                <th>Prefer Location</th>\n                <td>{{ model.prefferedLocation }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentCompany\">\n                <th>Current Company</th>\n                <td>{{ model.currentCompany }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentCTC\">\n                <th>Current CTC</th>\n                <td>{{ model.currentCTC }}</td>\n              </tr>\n              <tr *ngIf=\"model.expectedCTC\">\n                <th>Expected CTC</th>\n                <td>{{ model.expectedCTC }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentJobTitle\">\n                <th>Current Job Title</th>\n                <td>{{ model.currentJobTitle }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentFunctionalArea\">\n                <th>Current Functional Area</th>\n                <td>{{ model.currentFunctionalArea }}</td>\n              </tr>\n              <tr *ngIf=\"model.currentIndustry\">\n                <th>Current Industry</th>\n                <td>{{ model.currentIndustry }}</td>\n              </tr>\n              <tr *ngIf=\"model.monthsInCurrentJob\">\n                <th>Experience in Current Job</th>\n                <td>{{ model.monthsInCurrentJob }} months - {{ model.yearsInCurrentJob }} years</td>\n              </tr>\n              <tr *ngIf=\"model.experienceMonths\">\n                <th>Total Experience</th>\n                <td>{{ model.experienceMonths }} months - {{ model.experienceYrs }} years</td>\n              </tr>\n              <tr *ngIf=\"model.noticePeriod\">\n                <th>Notice period</th>\n                <td>{{ model.noticePeriod }}</td>\n              </tr>\n              <tr *ngIf=\"model.skills\">\n                <th>Skills</th>\n                <td>{{ model.skills }}</td>\n              </tr>\n              <tr *ngIf=\"model.description\">\n                <th>Description</th>\n                <td>\n                  {{ model.description }}\n                </td>\n              </tr>\n              <tr *ngFor=\"let ap of model.properties\">\n                <th>{{ ap.name }}</th>\n                <td>{{ ap.value }}</td>\n              </tr>\n              <tr *ngFor=\"let fl of model.files\">\n                <th>Files</th>\n                <td class=\"file-download\" (click)=\"downloadFile(fl.id)\">{{ fl.fileName }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Salutation<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"gender\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.gender\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && gender.invalid }\" #gender=\"ngModel\" required>\n                  <option *ngFor=\"let gl of GENDER\" [ngValue]=\"gl.value\">{{ gl.key }}</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  gender is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5\" style=\"margin-left:-20px;\">\n              <div class=\"form-group\">\n                <label>Full Name<span class=\"required\">*</span></label>\n                <input class=\"form-control\" name=\"fullname\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.fullname\" [ngClass]=\"{ 'is-invalid': f.submitted && fullname.invalid }\"\n                  #fullname=\"ngModel\" #consultantName (blur)=\"transformTitleCase(consultantName)\" required />\n                <div class=\"invalid-feedback\">\n                  fullname is mandatory\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div class=\"form-group\" data-provide=\"datepicker\">\n                <label>Date of Birth</label>\n                <input style=\"width: 175px; margin-left: -15px\" type=\"date\" class=\"form-control\" name=\"dob\"\n                  [(ngModel)]=\"model.dob\" [ngClass]=\"{ 'is-invalid': f.submitted && dob.invalid }\" #dob=\"ngModel\"\n                  [readonly]=\"readOnlyForm == 'R'\" max=\"9999-12-31\" />\n                <div class=\"input-group-addon\">\n                  <span class=\"glyphicon glyphicon-th\"></span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <!--pattern=\"/^-?\\d+\\.?\\d*$/\"\n                onKeyPress=\"if(this.value.length==12) return false;\" -->\n                <label>Phone</label><input class=\"form-control\" name=\"phone\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.phone\" maxlength=\"14\" onKeyPress=\"if(this.value.length==14) return false;\"\n                  #phone=\"ngModel\" type=\"tel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>E-Mail</label>\n                <!-- ng-pattern=\"/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/\" -->\n                <input class=\"form-control\" name=\"email\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.email\"\n                  #email=\"ngModel\" type=\"email\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Qualification</label>\n                <input class=\"form-control\" name=\"highesteducation\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.highestEducation\" maxlength=\"15\" #highesteducation=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Passout Year</label>\n                <input class=\"form-control\" name=\"passoutyear\" [readonly]=\"readOnlyForm == 'R'\" type=\"number\"\n                  onkeypress=\"if(this.value.length==4) return false;\" max=\"9999\" [(ngModel)]=\"model.passoutYear\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Current Location</label>\n                <input type=\"text\" name=\"currentLocation\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                  [(ngModel)]=\"model.currentLocation\" />\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Prefer Location</label>\n                <input class=\"form-control\" name=\"prefferedLocation\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.prefferedLocation\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngIf=\"isFresher\" class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Expected CTC</label>\n                <input type=\"text\" name=\"expectedCTC\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                  [(ngModel)]=\"model.expectedCTC\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Consultant Status<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"constat\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.conStatus\" [ngClass]=\"{ 'is-invalid': f.submitted && constat.invalid }\"\n                  #constat=\"ngModel\" required>\n                  <option *ngFor=\"let cs of consultantStatusList.list\" [ngValue]=\"cs.code\"> {{ cs.description }}\n                  </option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  consultant status is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Sourced From</label>\n                <select class=\"form-control\" name=\"sourced\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.sourcedFrom\" #sourced=\"ngModel\">\n                  <option *ngFor=\"let cs of properties.CON_SOURCE\" [ngValue]=\"cs\">\n                    {{ cs }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 pb-2\">\n              <input type=\"checkbox\" class=\"\" [(ngModel)]=\"isFresher\" (change)=\"emptyExperience()\"\n                name=\"interviewCheckbox\" />&nbsp;<label>Fresher</label>\n            </div>\n          </div>\n          <div *ngIf=\"!isFresher\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Current Company</label>\n                  <input type=\"text\" name=\"currentCompany\" class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\"\n                    [(ngModel)]=\"model.currentCompany\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Current CTC</label>\n                  <input type=\"text\" name=\"currentCTC\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                    [(ngModel)]=\"model.currentCTC\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Expected CTC</label>\n                  <input type=\"text\" name=\"expectedCTC\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                    [(ngModel)]=\"model.expectedCTC\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Current Job Title</label>\n                  <input type=\"text\" name=\"currentJobTitle\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                    [(ngModel)]=\"model.currentJobTitle\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Current Functional Area</label>\n                  <input type=\"text\" name=\"currentFunctionalArea\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                    [(ngModel)]=\"model.currentFunctionalArea\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Current Industry</label>\n                  <input type=\"text\" name=\"currentIndustry\" [readonly]=\"readOnlyForm == 'R'\" class=\"form-control\"\n                    [(ngModel)]=\"model.currentIndustry\" />\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Experience in Current Job</label>\n                  <div class=\"form-inline\">\n                    <input type=\"text\" name=\"yearsInCurrentJob\" class=\"form-control col-md-2\"\n                      [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.yearsInCurrentJob\" min=\"0\" />&nbsp;&nbsp;\n                    <small>years</small>&nbsp;<span> /</span>&nbsp;<input type=\"text\" class=\"form-control col-md-2\"\n                      name=\"monthsInCurrentJob\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.monthsInCurrentJob\"\n                      min=\"0\" max=\"12\" />&nbsp;&nbsp;<small>months</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Total Experience</label>\n                  <div class=\"form-inline\">\n                    <input type=\"text\" name=\"expyears\" class=\"form-control col-md-2\" [readonly]=\"readOnlyForm == 'R'\"\n                      [(ngModel)]=\"model.experienceYrs\" min=\"0\" />\n                    &nbsp;&nbsp; <small>years</small>&nbsp;<span> /</span>&nbsp;<input type=\"text\"\n                      class=\"form-control col-md-2\" name=\"expmonths\" [readonly]=\"readOnlyForm == 'R'\"\n                      [(ngModel)]=\"model.experienceMonths\" min=\"0\" max=\"11\"\n                      (onkeyup)=\"imposeMinMax(this)\" />&nbsp;&nbsp;<small>months</small>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Notice period</label>\n                  <select class=\"form-control\" name=\"noticeperiod\" [disabled]=\"readOnlyForm == 'R'\"\n                    [(ngModel)]=\"model.noticePeriod\" #noticeperiod=\"ngModel\">\n                    <option *ngFor=\"let cs of properties.DURATION\">\n                      {{ cs }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Skills</label>\n                <textarea class=\"form-control\" cols=\"10\" rows=\"10\" name=\"skills\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.skills\">\n                </textarea>\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"col-md-12 ml-3\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5\">\n                      <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-2\">\n                      <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <textarea class=\"form-control\" name=\"description\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.description\" rows=\"10\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"modal-body\" *ngIf=\"model.files.length > 0\">\n                <table class=\"table\">\n                  <thead>\n                    <th>File Name</th>\n                    <th>Description</th>\n                    <th>Action</th>\n                  </thead>\n                  <tbody *ngFor=\"let fl of model.files\">\n                    <td>{{ fl.fileName }}</td>\n                    <td>{{ fl.description }}</td>\n                    <td>\n                      <i class=\"fa fa-download\" (click)=\"downloadFile(fl.id)\"></i>&nbsp;\n                      <i class=\"fa fa-trash\" (click)=\"trashFile(fl.id, fl)\"></i>\n                    </td>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">\n                Edit\n              </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != '' ? 'Close' : 'Clear' }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Consultant</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">Ok</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #downloadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Consultant {{ urlConstants.DownloadFilesMsg }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"model.files.length > 0; else emptyMsg\">\n    <table class=\"table\">\n      <thead>\n        <th>File Name</th>\n        <th>Description</th>\n        <th>Action</th>\n      </thead>\n      <tbody *ngFor=\"let fl of model.files\">\n        <td>{{ fl.fileName }}</td>\n        <td>{{ fl.Description }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"downloadFile(fl.id)\">Download</button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n<ng-template #emptyMsg>\n  <h3 class=\"text-center\">No Files to download</h3>\n</ng-template>\n<ng-template #uploadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ urlConstants.UploadFilesMsg }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <input class=\"form-control\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    <textarea class=\"form-control mt-3\" placeholder=\"comments\" cols=\"5\" rows=\"5\" [(ngModel)]=\"comments\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"uploadFiles()\">Upload</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/consultant/consultant.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/consultant/consultant.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required {\n  color: red; }\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.file-download:hover {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n.ml-n1 {\n  margin-left: -114px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnN1bHRhbnQvRDpcXENDUFQgTUFJTlxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcY29uc3VsdGFudFxcY29uc3VsdGFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUI7O0FBRUg7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29uc3VsdGFudC9jb25zdWx0YW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5maWxlLWRvd25sb2FkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQge1xyXG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB9XHJcbn1cclxuLm1sLW4xIHtcclxuICBtYXJnaW4tbGVmdDogLTExNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/consultant/consultant.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/consultant/consultant.component.ts ***!
  \***********************************************************/
/*! exports provided: ConsultantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantComponent", function() { return ConsultantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _consultant_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultant.model */ "./src/app/layout/consultant/consultant.model.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConsultantComponent = /** @class */ (function () {
    function ConsultantComponent(http, router, toastr, modalService, storage) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.storage = storage;
        this.model = {};
        this.consultantList = [];
        this.pagedConsultantList = [];
        this.consultantStatusList = [];
        this.formButtonsToggler = true;
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.GENDER = [
            { key: "Mr.", value: "Male" },
            { key: "Mrs.", value: "Female" }
        ];
        this.uploadFileList = [];
        this.fileList = [];
        this.refType = "";
        this.comments = "";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.selectedRecrdToDel = 0;
        this.closeResult = "";
        this.download = "download";
        this.upload = "upload";
        this.apName = "";
        this.apValue = "";
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_5__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_6__["Properties"]();
        this.advanceSearchModel = {};
        this.showAction = false;
        this.actionsList = new _consultant_model__WEBPACK_IMPORTED_MODULE_4__["ActionsList"]();
        this.inCon = true;
        this.isCreate = false;
        this.pageSize = 20;
        this.cSGetAllPromise = this.http.get(this.urlConstants.CSGetAll);
        this.cGetAllPromise = this.http.get(this.urlConstants.CGetAll);
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getScreenSize();
    }
    ConsultantComponent.prototype.getScreenSize = function (event) {
        /* Here we are decreasing screenheight to 237 for pagination */
        this.screenHeight = window.innerHeight - 237;
    };
    ConsultantComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.cSGetAllPromise.subscribe(function (resp) {
            _this.consultantStatusList = resp;
        });
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.init();
        this.initialGetAll();
        this.spinner(true);
        /**Emptying the consultantId in storage */
        this.storage.consultantId = null;
    };
    ConsultantComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    ConsultantComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CGetAllByStatus +
            pageNumber +
            "&pageSize=50&sortBy=id&status=Active");
        temp.subscribe(function (resp) {
            _this.consultantList = resp;
            _this.consultantList.list.forEach(function (cl) {
                if (_this.validate(cl.fullname) &&
                    _this.validate(cl.email) &&
                    _this.validate(cl.phone)) {
                    cl["isProfileCompleted"] = "profileComplete";
                }
                else {
                    cl["isProfileCompleted"] = "profileInComplete";
                }
            });
            _this.paginateConfig.totalItems = _this.consultantList.noOfRecords;
        });
    };
    ConsultantComponent.prototype.init = function () {
        // this.spinner(false);
        // this.cGetAllPromise.subscribe(resp => {
        //   this.consultantList = resp as any;
        //   this.consultantList.forEach(cl => {
        //     if (this.validate(cl.fullname) && this.validate(cl.email) && this.validate(cl.phone)) {
        //       cl['isProfileCompleted'] = 'profileComplete';
        //     }
        //     else {
        //       cl['isProfileCompleted'] = 'profileInComplete';
        //     }
        //   });
        //   this.pageChange(this.page);
        //   this.spinner(true);
        // });
        this.model.properties = [];
        this.model.files = [];
        this.model.conStatus = "Active";
        this.model.phone = "+91 ";
        this.model.sourcedFrom = this.properties.CON_SOURCE[0];
        this.page = 1;
    };
    ConsultantComponent.prototype.validate = function (value) {
        var bool = value ? true : false;
        return bool;
    };
    ConsultantComponent.prototype.validateFile = function (value) {
        if (value == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ConsultantComponent.prototype.defaultValues = function () {
        this.model.properties = [];
        this.model.conStatus = "Active";
        this.model.phone = "+91";
    };
    ConsultantComponent.prototype.setModel = function (id) {
        this.getConsultantById(id);
        this.readOnlyForm = "U";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ConsultantComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        this.enableButtonType = "U";
    };
    ConsultantComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
        this.model.files = [];
        this.model.conStatus = "Active";
        this.model.phone = "+91";
    };
    ConsultantComponent.prototype.create = function (consultantForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.CCreate);
        temp.subscribe(function (resp) {
            _this.spinner(true);
            _this.isCreate = false;
            _this.toastr.success(_this.properties.CREATE, _this.properties.CON);
            consultantForm.resetForm();
            _this.init();
            _this.formReset();
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            /**Creation of client application */
            _this.createCA(resp);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    ConsultantComponent.prototype.createCA = function (resp) {
        var decision = confirm(this.properties.CONFIRM_CA_NEW);
        if (decision == true) {
            /**Assigning consultant id to the storage consultant */
            this.storage.consultantId = resp.id;
            this.router.navigate(["/layout/client-application"]);
        }
    };
    ConsultantComponent.prototype.update = function (consultantForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.CUpdate);
        temp.subscribe(function (resp) {
            consultantForm.resetForm();
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CON);
            _this.formReset();
            _this.init();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.statusText, _this.properties.CON);
            _this.spinner(true);
        });
    };
    ConsultantComponent.prototype.getConsultantById = function (id) {
        var _this = this;
        var temp = this.http.get(this.urlConstants.CGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
            if (_this.model.currentCompany == "" ||
                _this.model.currentCompany == null) {
                _this.isFresher = true;
            }
        });
    };
    ConsultantComponent.prototype.getFilesById = function (id) {
        var _this = this;
        this.http.get("/uploadFile/id?id=" + id).subscribe(function (resp) {
            _this.fileList.push(resp);
        });
    };
    ConsultantComponent.prototype.cancelForm = function (consultantForm) {
        consultantForm.resetForm();
        this.init();
        this.formReset();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.defaultValues();
    };
    ConsultantComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CDelete + this.selectedRecrdToDel);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CON);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            if (err.status === 200) {
                _this.init();
                _this.close();
                _this.formReset();
                return _this.toastr.success(_this.properties.DELETE, _this.properties.CON);
            }
            _this.toastr.error(err.statusText, _this.properties.CON);
            _this.spinner(true);
        });
    };
    ConsultantComponent.prototype.trashFile = function (id, con) {
        var _this = this;
        var temp = this.http.delete(this.urlConstants.FileDelete + id);
        /** Delete the loop code once it fix with Backend API */
        this.model.files.forEach(function (f) {
            if (f.id === id) {
                var ind = _this.model.files.indexOf(f);
                _this.model.files.splice(ind, 1);
            }
        });
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CON);
        }, function (err) {
            if (err.status === 200) {
                return _this.toastr.success(_this.properties.DELETE, _this.properties.CON);
            }
            _this.toastr.error(err.statusText, _this.properties.CON);
        });
    };
    ConsultantComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        this.model["conStatus"] = temp.status.code;
        return this.model;
    };
    ConsultantComponent.prototype.propertiesListIncrement = function (event, i) {
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
    ConsultantComponent.prototype.imposeMinMax = function (el) {
        if (el.value !== "") {
            if (parseInt(el.value) < parseInt(el.min)) {
                el.value = el.min;
            }
            if (parseInt(el.value) > parseInt(el.max)) {
                el.value = el.max;
            }
        }
    };
    ConsultantComponent.prototype.activateId = function () {
        var _this = this;
        var id = this.idToActivate;
        var temp = this.http.get(this.urlConstants.CActivate + id);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.ACTIVATED, _this.properties.CON);
            _this.init();
        });
    };
    ConsultantComponent.prototype.transformTitleCase = function (ip) {
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
    ConsultantComponent.prototype.open = function (event, content) {
        var _this = this;
        this.selectedRecrdToDel = 0;
        if (event) {
            this.selectedRecrdToDel = event;
        }
        // if (event.type === this.download) {
        //     // this.getFilesById(this.selectedRecrdToDel); TODO:Need to fix for multiple downloads
        //     this.http.get('file/download?refType=Consultant&refId=' + this.selectedRecrdToDel).subscribe(resp => {
        //     }, err => {
        //       if (err.status == 200)
        //           window.open(err.url);
        //   });
        // } else {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        //}
    };
    ConsultantComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ConsultantComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    /** Get Uploaded files */
    ConsultantComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    /**Download file */
    ConsultantComponent.prototype.downloadFile = function (id) {
        this.http.get(this.urlConstants.FileDownload + id).subscribe(function (resp) { }, function (err) {
            if (err.status == 200)
                window.open(err.url);
        });
    };
    /** Upload documents of respective consultant */
    ConsultantComponent.prototype.uploadFiles = function () {
        var _this = this;
        var files = this.getFiles();
        var formData = new FormData();
        formData.append("file", files[0].rawFile, files[0].name);
        var params = "refId=" +
            this.selectedRecrdToDel +
            "&refType=Consultant&comments=" +
            this.comments;
        this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(function (resp) {
            var temp = resp;
            _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
            _this.toastr.success(temp.message, "Client");
            _this.close();
        }, function (err) {
            _this.toastr.success(err.error.message, "Client");
        });
        /* let requests = [];
             files.forEach((file) => {
                 let formData = new FormData();
                 formData.append('file', file.rawFile, file.name);
                 console.log(formData);
                 this.http.upload('', formData[0]).subscribe(resp => {
                     console.log("resp=====", resp);
                 })
                 // requests.push(this.uploadService.upload(formData));
             });*/
        /*concat(...requests).subscribe(
              (res) => {
                console.log(res);
              },
              (err) => {
                console.log(err);
              }
            );*/
    };
    ConsultantComponent.prototype.emptyExperience = function () {
        if (this.isFresher) {
            this.model.currentCompany = "";
            this.model.currentCTC = "";
            this.model.expectedCTC = "";
            this.model.currentJobTitle = "";
            this.model.currentFunctionalArea = "";
            this.model.currentIndustry = "";
            this.model.yearsInCurrentJob = "";
            this.model.monthsInCurrentJob = "";
            this.model.experienceYrs = "";
            this.model.experienceMonths = "";
            this.model.noticePeriod = "";
        }
    };
    ConsultantComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ConsultantComponent.prototype.search = function () {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        if (this.currSearchTxt.length == 0) {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
            this.initialGetAll();
        }
        else if (this.currSearchTxt.length > 3) {
            var temp = this.http.get(this.urlConstants.CSearch + this.currSearchTxt);
            temp.subscribe(function (resp) {
                _this.consultantList.list = resp;
                _this.paginateConfigDeclare(_this.consultantList.list.length, 1, _this.consultantList.list.length);
            });
        }
    };
    ConsultantComponent.prototype.advanceSearch = function () {
        var _this = this;
        var temp = this.http.post(this.advanceSearchModel, this.urlConstants.CAdvSearch);
        temp.subscribe(function (resp) {
            _this.consultantList.list = resp;
            _this.paginateConfigDeclare(_this.consultantList.list.length, 1, _this.consultantList.list.length);
        });
    };
    ConsultantComponent.prototype.cancelAdvSearch = function (showSearch) {
        showSearch.checked = false;
        this.advanceSearchModel = {};
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.initialGetAll();
    };
    ConsultantComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        if (this.inCon) {
            this.initialGetAll();
        }
    };
    ConsultantComponent.prototype.getIncompleteCon = function () {
        var _this = this;
        var temp = this.http.get(this.urlConstants.CGetInactive);
        temp.subscribe(function (resp) {
            _this.consultantList.list = resp;
            _this.paginateConfigDeclare(_this.properties.ITEMSPERPAGE, 1, _this.consultantList.list.length);
            _this.inCon = false;
        });
    };
    ConsultantComponent.prototype.getAllCon = function () {
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.initialGetAll();
        this.inCon = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConsultantComponent.prototype, "getScreenSize", null);
    ConsultantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-consultant",
            template: __webpack_require__(/*! ./consultant.component.html */ "./src/app/layout/consultant/consultant.component.html"),
            styles: [__webpack_require__(/*! ./consultant.component.scss */ "./src/app/layout/consultant/consultant.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["StorageService"]])
    ], ConsultantComponent);
    return ConsultantComponent;
}());



/***/ }),

/***/ "./src/app/layout/consultant/consultant.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/consultant/consultant.model.ts ***!
  \*******************************************************/
/*! exports provided: ActionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.actions = [
            { key: "Edit", value: "Edit" },
            { key: "File Upload", value: "File Upload" },
            { key: "Delete", value: "Delete" },
            { key: "Close", value: "Close" }
        ];
    }
    return ActionsList;
}());



/***/ }),

/***/ "./src/app/layout/consultant/consultant.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/consultant/consultant.module.ts ***!
  \********************************************************/
/*! exports provided: ConsultantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantModule", function() { return ConsultantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _consultant_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultant-routing.module */ "./src/app/layout/consultant/consultant-routing.module.ts");
/* harmony import */ var _consultant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultant.component */ "./src/app/layout/consultant/consultant.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConsultantModule = /** @class */ (function () {
    function ConsultantModule() {
    }
    ConsultantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consultant_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConsultantRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["ActionListModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_consultant_component__WEBPACK_IMPORTED_MODULE_7__["ConsultantComponent"]]
        })
    ], ConsultantModule);
    return ConsultantModule;
}());



/***/ })

}]);
//# sourceMappingURL=consultant-consultant-module.js.map