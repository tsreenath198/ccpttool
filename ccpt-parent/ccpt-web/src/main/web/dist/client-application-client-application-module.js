(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-application-client-application-module"],{

/***/ "./src/app/layout/client-application/client-application-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/client-application/client-application-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClientApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationRoutingModule", function() { return ClientApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-application.component */ "./src/app/layout/client-application/client-application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_application_component__WEBPACK_IMPORTED_MODULE_2__["ClientApplicationComponent"]
    }
];
var ClientApplicationRoutingModule = /** @class */ (function () {
    function ClientApplicationRoutingModule() {
    }
    ClientApplicationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientApplicationRoutingModule);
    return ClientApplicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client-application/client-application.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/client-application/client-application.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa-paper-plane'\" [heading1]=\"'Client Applications'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <select class=\"form-control form-control-sm\" [(ngModel)]=\"currSearch.client\" name=\"sel1\"\n                (change)=\"filterSearchCp()\">\n                <option [ngValue]=\"0\" hidden selected> Client</option>\n                <option [ngValue]=\"-1\">All</option>\n                <option *ngFor=\"let cl of clientList\" [ngValue]=\"cl.id\">\n                  {{ cl.name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-4\" *ngIf=\"currSearch.client != 0 && currSearch.client != -1\">\n              <select class=\"form-control form-control-sm\" [(ngModel)]=\"currSearch.clientPos\" name=\"sel2\"\n                (change)=\"searchSelect()\">\n                <option [ngValue]=\"0\" hidden selected> Client Position</option>\n                <option [ngValue]=\"-1\">All</option>\n                <option *ngFor=\"let cl of searchCp\" [ngValue]=\"cl.id\">\n                  {{ cl.name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-2\">\n              <select class=\"form-control form-control-sm\" [(ngModel)]=\"currSearch.status\" name=\"sel3\"\n                (change)=\"searchSelect()\">\n                <option [ngValue]=\"null\" hidden selected>Status</option>\n                <option [ngValue]=\"-1\">All</option>\n                <option *ngFor=\"let st of searchStatusType\" [ngValue]=\"st\">\n                  {{ st }}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-3\">\n              <input class=\"form-control form-control-sm\" placeholder=\"Name/Email/Phone\" [(ngModel)]=\"currSearch.key\"\n                (keyup)=\"searchSelect()\" name=\"sel4\" />\n            </div>\n          </div>\n          <div class=\"row mt-2\">\n            <div class=\"col-md-4\">\n              <b class=\"pull-left\">Filter list count : {{ clientApplicationList?.list?.length }}</b>\n            </div>\n            <div class=\"col-md-2\">\n              <button *ngIf=\"isSerach\" type=\"button\" class=\"btn btn-secondary btn-sm ml-3\"\n                (click)=\"generateSearchParams()\">\n                Search\n              </button>\n            </div>\n            <div class=\"col-md-2\">\n              <button *ngIf=\"isSerach\" type=\"button\" class=\"btn btn-secondary btn-sm ml-3\" (click)=\"cancelSearch()\">\n                Cancel\n              </button>\n            </div>\n            <div class=\"col-md-4\">\n              <span class=\"pull-right mr-3\" *ngIf=\"appIds.length > 0\">\n                <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                  <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                    <a class=\"dropdown-item drop-list\" (click)=\"\n                        mailSelectedApplications(\n                          appIds,\n                          sendMailContent,\n                          'shortlistedCandidates'\n                        )\n                      \">Email Shortlisted Candidates</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"\n                        mailSelectedApplications(\n                          appIds,\n                          sendMailContent,\n                          'interviewSchedule'\n                        )\n                      \">Email Interview Schedule</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"\n                        mailSelectedApplications(\n                          appIds,\n                          sendMailContent,\n                          'statusVerification'\n                        )\n                      \">Status Verification Email</a>\n                  </div>\n                </div>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"table-responsive mt-2 table-wrapper-scroll-y my-custom-scrollbar\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-sm table-hover table-striped\">\n          <thead>\n            <tr>\n              <th width=\"15px\">\n                <input class=\"check\" type=\"checkbox\" [(ngModel)]=\"selectAllCAFlag\"\n                  *ngIf=\"currSearch.client === selectedCPToSearch\" (change)=\"onSelectApplication($event, 0, 'all')\" />\n              </th>\n              <th>\n                Consultant\n              </th>\n              <th width=\"300\">\n                Client Position\n              </th>\n              <th>\n                Status\n              </th>\n              <th>\n                Creator\n              </th>\n              <th>\n                Sent On\n              </th>\n            </tr>\n          </thead>\n          <tbody class=\"overflow-ele-scroll\">\n            <tr class=\"table-data-padding\" *ngFor=\"\n                let cal of clientApplicationList.list\n                  | paginate: paginateConfig;\n                let i = index\n              \">\n              <td class=\"checkbox\" width=\"15px\">\n                <label>\n                  <input class=\"check\" type=\"checkbox\" [checked]=\"\n                      currSearch.client === selectedCPToSearch &&\n                      selectAllCAFlag !== undefined &&\n                      selectAllCAFlag === true\n                    \" (change)=\"onSelectApplication($event, cal.id, 'single')\" />\n                </label>\n              </td>\n              <td container=\"body\" class=\"click-data\" [autoClose]=\"'outside'\" [ngbPopover]=\"popContent1\"\n                [popoverTitle]=\"popTitle1\">\n                {{ cal.consultant.fullname }}\n              </td>\n              <td width=\"300\" container=\"body\" class=\"click-data\" [autoClose]=\"'outside'\" [ngbPopover]=\"popContent2\"\n                [popoverTitle]=\"popTitle2\">\n                {{ cal.clientPosition.generatedCode }}\n              </td>\n\n              <td (click)=\"setModel(cal.id)\">{{ cal.status.code }}</td>\n              <td (click)=\"setModel(cal.id)\">{{ cal.creator.aliasName }}</td>\n\n              <td (click)=\"setModel(cal.id)\">{{ cal.sentOn }}</td>\n\n              <ng-template #popContent1>{{ cal.consultant.phone }}<br />{{\n                  cal.consultant.email\n                }}</ng-template>\n              <ng-template #popTitle1><b>Consultant Details</b></ng-template>\n              <ng-template #popContent2>{{ cal.clientPosition.client.phone }}<br />{{\n                  cal.clientPosition.client.email\n                }}<br />{{ cal.clientPosition.client.address }}\n              </ng-template>\n              <ng-template #popTitle2><b>Client Details</b></ng-template>\n              <!-- <td width=\"140\">\n                        <app-action [trashContent]=\"trashContent\" [uploadContent]=\"uploadContent\"\n                        [downloadContent]=\"downloadContent\" [id]=\"cal.id\" [isTrash]=\"trash\" [isUpload]=\"upload\"\n                        [isDownload]=\"download\" (upload)=\"open($event)\" (download)=\"open($event)\" (trash)=\"open($event)\">\n                      </app-action>\n                    </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-12 justify-content-center mb-5\"\n        *ngIf=\"clientApplicationList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientApplicationForm\" (ngSubmit)=\"f.form.valid && createAll(f, consultantCall)\" #f=\"ngForm\"\n        novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == '' || enableButtonType == 'U'\"\n              class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != \"\" ? \"Close\" : \"Clear\" }}\n            </button>\n            <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n              <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                <!-- <button class=\"btn btn-secondary\" >\n                        Dropdown\n                    </button> -->\n                <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                  <a class=\"dropdown-item drop-list\" (click)=\"enableFormEditable()\">Edit</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, uploadContent)\">File Upload</a>\n                  <a class=\"dropdown-item drop-list\" *ngIf=\"model.status.description == 'Interview Scheduled'\" (click)=\"\n                      getInterviewDetailsEmail(model.id, sendMailContent)\n                    \">Email Interview Schedule</a>\n                  <a class=\"dropdown-item drop-list\" *ngIf=\"model.status.description == 'Interview Scheduled'\"\n                    (click)=\"getInterviewDetailsSms(model.id, sendSMSContent)\">Sms Interview Schedule</a>\n                  <a class=\"dropdown-item drop-list\" *ngIf=\"model.status.description == 'Job Confirmed'\"\n                    (click)=\"setPaymentModel(model, createPayment)\">Create Payment</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, createFAQs)\">FAQ's</a>\n                  <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, trashContent)\">Delete</a>\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model?.clientPosition?.generatedCode\">\n                <th width=\"200px\">Client Position</th>\n                <td>{{ model.clientPosition.generatedCode }}</td>\n              </tr>\n              <tr *ngIf=\"model?.consultant?.fullname\">\n                <th>Consultant</th>\n                <td>{{ model.consultant.fullname }}</td>\n              </tr>\n              <tr *ngIf=\"model?.status?.description\">\n                <th>Application Status</th>\n                <td>{{ model.status.description }}</td>\n              </tr>\n              <tr *ngIf=\"model?.sentOn\">\n                <th>Sent On</th>\n                <td>{{ model.sentOn }}</td>\n              </tr>\n              <tr *ngIf=\"model.interviewDate\">\n                <th>Interview Date</th>\n                <td>{{ model.interviewDate | date }}</td>\n              </tr>\n              <tr *ngIf=\"model.interviewLocation\">\n                <th>Interview Location</th>\n                <td>{{ model.interviewLocation }}</td>\n              </tr>\n              <tr *ngIf=\"model.interviewTime\">\n                <th>Interview Time</th>\n                <td>{{ model.interviewTime }}</td>\n              </tr>\n              <tr *ngIf=\"model.interviewMode\">\n                <th>Interview Mode</th>\n                <td>{{ model.interviewMode }}</td>\n              </tr>\n              <tr *ngIf=\"model.description\">\n                <th>Description</th>\n                <td>\n                  <p [innerHTML]=\"model.description\"></p>\n                </td>\n              </tr>\n              <tr *ngFor=\"let ap of model.properties\">\n                <th>{{ ap.name }}</th>\n                <td>{{ ap.value }}</td>\n              </tr>\n              <tr>\n                <th>CRF</th>\n                <td>\n                  <span *ngIf=\"isCRF; else noCRF\">\n                    <span class=\"crf\" (click)=\"downloadFile(crfFile.id)\">{{ crfFile.fileName }}\n                    </span>\n                    <span class=\"pull-right\">\n                      <i class=\"fa fa-trash\" (click)=\"deleteCRF(crfFile.id)\" aria-hidden=\"true\"></i>\n                    </span>\n                  </span>\n                  <ng-template #noCRF>\n                    <button class=\"btn btn-secondary btn-sm ml-2\" type=\"button\" (click)=\"uploadCRF(uploadContent)\">\n                      Upload CRF\n                    </button>\n                  </ng-template>\n                </td>\n              </tr>\n              <tr *ngFor=\"let fl of model.files\">\n                <th>Files</th>\n                <td class=\"crf\" (click)=\"downloadFile(fl.id)\">\n                  {{ fl.fileName }}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Client Position<span class=\"required\">*</span></label>\n                <span *ngIf=\"readOnlyForm == 'U' || readOnlyForm == ''\">\n                  <select class=\"form-control\" name=\"cp\" [(ngModel)]=\"model.cpId\"\n                    [ngClass]=\"{ 'is-invalid': f.submitted && cp.invalid }\" #cp=\"ngModel\" required>\n                    <option *ngFor=\"let cpl of clientPositionList\" [ngValue]=\"cpl.id\">{{ cpl.name }}\n                    </option>\n                  </select>\n                  <div class=\"invalid-feedback\">\n                    Client Position is mandatory\n                  </div>\n                </span>\n                <span *ngIf=\"readOnlyForm == 'R'\">\n                  <input type=\"text\" class=\"form-control\" name=\"generatedcode\" #generatedcode=\"ngModel\" readonly\n                    [(ngModel)]=\"cpGeneratedCode\" />\n                </span>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Consultant<span class=\"required\">*</span></label>\n                <select class=\"form-control\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.consultantId\"\n                  name=\"con\" [ngClass]=\"{ 'is-invalid': f.submitted && con.invalid }\" #con=\"ngModel\" (change)=\"\n                    openSearchCon($event.target.value, searchConsultant)\n                  \" required>\n                  <option *ngFor=\"let cl of consultantList\" [ngValue]=\"cl.id\">{{\n                    cl.name\n                  }}</option>\n                  <option value=\"more\">More</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Consultant is mandatory\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Client Application Status<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"cas\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.caStatus\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && cas.invalid }\" #cas=\"ngModel\" required>\n                  <option *ngFor=\"let casl of clientApplicationStatusList.list\" [ngValue]=\"casl.code\">\n                    {{ casl.description }}\n                  </option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Client Apllication Status is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Creator<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"creator\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.creatorId\" [ngClass]=\"{ 'is-invalid': f.submitted && cas.invalid }\" required>\n                  <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n                    {{ rl.name }}\n                  </option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Client Apllication Status is mandatory\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Sent On</label>\n              <input type=\"date\" class=\"form-control\" name=\"senton\" #senton=\"ngModel\" [readonly]=\"readOnlyForm == 'R'\"\n                [(ngModel)]=\"model.sentOn\" max=\"9999-12-31\" />\n              <div class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-th\"></span>\n              </div>\n            </div>\n            <div class=\"col-md-6 mt-4\" *ngIf=\"readOnlyForm == ''\"></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" data-provide=\"datepicker\">\n                <!-- <input class=\"mt-2\" type=\"checkbox\" (change)=\"checkInterviewSchedule()\"\n                  [(ngModel)]=\"isInterviewScheduled\" name=\"interviewCheckbox\" />&nbsp;<small>Interview Scheduled</small> -->\n                <div *ngIf=\"model.caStatus == 'Interview Scheduled'\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label class=\"pt-2\">Interview Date<span class=\"required\">*</span></label>\n                      <input type=\"date\" class=\"form-control\" name=\"intDate\" #intDate=\"ngModel\"\n                        [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.interviewDate\" [ngClass]=\"{\n                          'is-invalid': f.submitted && intDate.invalid\n                        }\" (change)=\"dateChange()\" required />\n\n                      <div class=\"invalid-feedback\">\n                        Interview Date is mandatory\n                      </div>\n                      <div class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-th\"></span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <label class=\"pt-2\">Interview Time<span class=\"required\">*</span></label>\n                      <input type=\"time\" class=\"form-control\" name=\"intTime\" #intTime=\"ngModel\"\n                        [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.interviewTime\" [ngClass]=\"{\n                          'is-invalid': f.submitted && intTime.invalid\n                        }\" required />\n                      <div class=\"invalid-feedback\">\n                        Interview Time is mandatory\n                      </div>\n                      <div class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-th\"></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label class=\"pt-2\">Interview Location<span class=\"required\">*</span></label>\n                      <input class=\"form-control\" name=\"loc\" [readonly]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"model.interviewLocation\" required />\n                      <div class=\"invalid-feedback\">\n                        Interview Location is mandatory\n                      </div>\n                      <div class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-th\"></span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <label class=\"pt-2\">Interview Mode<span class=\"required\">*</span></label>\n                      <select class=\"form-control\" name=\"mode\" [disabled]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"model.interviewMode\" required>\n                        <option *ngFor=\"let im of interviewMode\" [ngValue]=\"im.value\">{{ im.key }}</option>\n                      </select>\n                      <div class=\"invalid-feedback\">\n                        Interview Mode is mandatory\n                      </div>\n                      <div class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-th\"></span>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                      <label class=\"pt-2\">Online Id</label>\n                      <input class=\"form-control\" name=\"onlineId\" [readonly]=\"readOnlyForm == 'R'\"\n                        [(ngModel)]=\"model.onlineId\" />\n                      <div class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-th\"></span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"model?.properties?.length > 0\">\n              <div class=\"col-md-12 ml-3\">\n                <div class=\"form-group\">\n                  <label>Additional Properties</label>\n                  <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                    <div class=\"col-md-5 pt-2\">\n                      <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-5 pt-2\">\n                      <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                        [readonly]=\"readOnlyForm == 'R'\" />\n                    </div>\n                    <div class=\"col-md-2 pt-2\">\n                      <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                        (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <angular-editor [(ngModel)]=\"model.description\" name=\"description\" [config]=\"config\"></angular-editor>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"model?.files?.length > 0\">\n            <div class=\"col-md-12\">\n              <div class=\"modal-body\">\n                <table class=\"table\">\n                  <thead>\n                    <th>File Name</th>\n                    <th>Description</th>\n                    <th>Action</th>\n                  </thead>\n                  <tbody *ngFor=\"let fl of model.files\">\n                    <td>{{ fl.fileName }}</td>\n                    <td>{{ fl.Description }}</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"downloadFile(fl.id)\">\n                        Download\n                      </button>\n                    </td>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12 form-group\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\"\n                  (click)=\"enableFormEditable()\">Edit</button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"enableButtonType == ''\" class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != \"\" ? \"Close\" : \"Clear\" }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Client Application</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">\n      Ok\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #downloadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Consultant {{ this.properties.DOWNLOAD }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"model.files.length > 0; else emptyMsg\">\n    <table class=\"table\">\n      <thead>\n        <th>File Name</th>\n        <th>Description</th>\n        <th>Action</th>\n      </thead>\n      <tbody *ngFor=\"let fl of model.files\">\n        <td>{{ fl.fileName }}</td>\n        <td>{{ fl.Description }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"downloadFile(fl.id)\">\n            Download\n          </button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #emptyMsg>\n  <h3 class=\"text-center\">No Files to download</h3>\n</ng-template>\n<ng-template #uploadContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ urlConstants.UploadFilesMsg }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <input class=\"form-control\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    <textarea class=\"form-control mt-3\" placeholder=\"comments\" cols=\"5\" rows=\"5\" [(ngModel)]=\"comments\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"uploadFiles()\">\n      Upload\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #sendMailContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Send Mail</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>E-Mail</label>\n    <!-- <ng-multiselect-dropdown [placeholder]=\"'choose numbers..'\" [data]=\"mailIdForMails\" [(ngModel)]=\"sendEmailModel.to\"\n        [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\">\n      </ng-multiselect-dropdown>  -->\n\n    <!-- \n      (onSelectAll)=\"onSelectAll($event)\" -->\n    <!-- <div class=\"form-group\">\n          <select\n            class=\"form-control \"\n            [(ngModel)]=\"sendTo\"\n            name=\"sel1\"\n            (change)=\"onItemSelect(sendTo)\"\n          >\n            <option [ngValue]=\"null\" hidden selected>Choose action</option>\n            <option *ngFor=\"let cl of consultantList\" [ngValue]=\"cl\">\n              {{cl.name}}\n            </option>\n          </select>\n        </div> -->\n    <input type=\"text\" [(ngModel)]=\"sendEmailModel.toEmails\" [readonly]=\"loggedInRole != 'Admin'\" class=\"form-control\"\n      name=\"to\" />\n    <div *ngIf=\"loggedInRole == 'Admin'\">\n      <label>Cc</label>\n      <input type=\"text\" [(ngModel)]=\"sendEmailModel.cc\" class=\"form-control\" name=\"cc\" />\n    </div>\n    <label>Bcc</label>\n    <input type=\"text\" [(ngModel)]=\"sendEmailModel.bcc\" class=\"form-control\" name=\"bcc\" />\n    <label>Subject</label>\n    <input class=\"form-control\" [(ngModel)]=\"sendEmailModel.subject\" name=\"sub\" />\n    <label>Message Body</label>\n    <angular-editor [(ngModel)]=\"sendEmailModel.body\" name=\"body\" [config]=\"config\">\n    </angular-editor>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"sendEmailReq()\">\n      Send\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #createPayment let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Create Payment</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"form\" id=\"paymentsForm\" (ngSubmit)=\"paymentform.form.valid && createPaymentForm(paymentform)\"\n      #paymentform=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Joining Date<span class=\"required\">*</span></label>\n            <input type=\"date\" class=\"form-control\" name=\"joiningDate\" [(ngModel)]=\"paymentModel.joiningDate\"\n              #joiningDate=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Joining date is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Annual Package<span class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"annualPackage\" [(ngModel)]=\"paymentModel.annualPackage\"\n              #annualPackage=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Annual package is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Contact Person Designation<span class=\"required\">*</span></label>\n            <input class=\"form-control\" [(ngModel)]=\"paymentModel.contactPersonDesignation\"\n              name=\"contactPersonDesignation\" #contactPersonDesignation=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Contact person designation is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"setPaymentGst\">\n          <div class=\"form-group\">\n            <label>Company Gst<span class=\"required\">*</span></label>\n            <input class=\"form-control\" [(ngModel)]=\"paymentModel.gst\" name=\"gst\" #gst=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Gst is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"setPaymentWebsite\">\n          <div class=\"form-group\">\n            <label>Company Website<span class=\"required\">*</span></label>\n            <input class=\"form-control\" [(ngModel)]=\"paymentModel.gst\" name=\"website\" #website=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Website is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"setPaymentBA\">\n          <div class=\"form-group\">\n            <label>Billing Address<span class=\"required\">*</span></label>\n            <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"paymentModel.billingAddress\" name=\"billingAddress\"\n              #billingAddress=\"ngModel\"></textarea>\n\n            <div class=\"invalid-feedback\">\n              Biling Address is mandatory\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Description<span class=\"required\">*</span></label>\n            <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"paymentModel.description\" name=\"description\"\n              #description=\"ngModel\"></textarea>\n\n            <div class=\"invalid-feedback\">\n              Description is mandatory\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <div class=\"row pull-right\">\n        <div class=\"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-secondary ml-3\" [disabled]=\"creating\">\n            {{ creating ? \"loading...\" : (\"Create\" | translate) }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary ml-3\" (click)=\"c('Close click')\">\n            Close\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n<ng-template #sendSMSContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Send SMS</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>Number</label>\n    <div class=\"form-group\">\n      <input class=\"form-control\" [(ngModel)]=\"sendSmsModel.contactNumbers\" name=\"tonumbers\" #tonumbers=\"ngModel\" />\n    </div>\n    <label>Message Body</label>\n    <textarea class=\"form-control\" cols=\"5\" rows=\"8\" [(ngModel)]=\"sendSmsModel.message\" name=\"body\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"sendSmsReq()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Send\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #consultantCall let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">\n      Consultant Call History<span class=\"required\">*</span>\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>Description</label>\n    <textarea class=\"form-control\" required cols=\"5\" rows=\"8\" [(ngModel)]=\"conchModel.description\"\n      name=\"body\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createConCallHistory()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Send\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #createFAQs let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">\n      Frequently Asked Questions<span class=\"required\">*</span>\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n            <tr *ngFor=\"let cc of faqModel.questions; let i = index\">\n              <td>\n                <input class=\"form-control\" [(ngModel)]=\"faqModel.questions[i]\" name=\"fq{{ i }}\"\n                  placeholder=\"question\" />\n              </td>\n              <td>\n                <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\"\n                  (click)=\"faqListIncrement($event.target, i)\"></i>\n                <br />\n                <i class=\"fa fa-plus\" *ngIf=\"i + 1 == faqModel.questions.length\" aria-hidden=\"true\" id=\"increase\"\n                  (click)=\"faqListIncrement($event.target, i)\"></i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createFAQ()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Create\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #searchConsultant let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Search Consultant</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"search...\" (keyup)=\"popupSearchConsultant()\"\n          [(ngModel)]=\"searchCon\" />\n      </div>\n    </div>\n    <div *ngIf=\"searchConsultantList.length > 0; else noDataFound\" class=\"table-responsive tableFixHead mt-2\"\n      id=\"viewTable\">\n      <table class=\"table table-sm table-hover table-striped\">\n        <thead>\n          <tr>\n            <th>\n              Name\n            </th>\n            <th>\n              Phone\n            </th>\n            <th>Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let cl of searchConsultantList; let i = index\" (click)=\"setSearch(cl)\">\n            <td class=\"table-data-padding\">\n              {{ cl.fullname }}\n            </td>\n            <td>\n              {{ cl.phone }}\n            </td>\n            <td>\n              {{ cl.email }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #noDataFound>\n      <span *ngIf=\"searchCon.length > 2\" class=\"text-center\">\n        <h3>No Data Found</h3>\n      </span>\n    </ng-template>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/client-application/client-application.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/client-application/client-application.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.crf:hover {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n\n.checkbox {\n  padding-top: 15px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC1hcHBsaWNhdGlvbi9EOlxcY2NwdHRvb2wuZ2l0XFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxjbGllbnQtYXBwbGljYXRpb25cXGNsaWVudC1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNiOztBQUNEO0VBQ0EsZUFBYyxFQUNiOztBQUNEO0VBQ0csV0FBVSxFQUNaOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0MsZ0JBQWU7RUFDZixZQUFVO0VBQ1YsMkJBQTBCLEVBQzFCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ25COztBQUNEO0VBQ0UsY0FBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50LWFwcGxpY2F0aW9uL2NsaWVudC1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJlcXVpcmVkIHtcclxuICAgICBjb2xvcjogcmVkOyBcclxuICB9XHJcbiAgLnBhZGRpbmctdG9we1xyXG4gICBwYWRkaW5nLXRvcDogNjBweDtcclxuIH1cclxuIC5jcmY6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOmJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiB9XHJcbiAuY2hlY2tib3ggIHtcclxuICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5kcm9wLWxpc3Q6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/client-application/client-application.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/client-application/client-application.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationComponent", function() { return ClientApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
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









var ClientApplicationComponent = /** @class */ (function () {
    function ClientApplicationComponent(http, toastr, modalService, router, storageService) {
        this.http = http;
        this.toastr = toastr;
        this.modalService = modalService;
        this.router = router;
        this.storageService = storageService;
        this.model = {};
        this.faqModel = {};
        this.conchModel = {};
        this.paymentModel = {};
        this.bodyMailModel = {};
        this.clientApplicationList = [];
        this.pagedCAList = [];
        this.consultantList = [];
        this.clientList = [];
        this.clientApplicationStatusList = [];
        this.clientPositionList = [];
        this.recruiterList = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_4__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"]();
        this.creating = false;
        this.interviewMode = [
            { key: "Face to Face", value: "F2F" },
            { key: "Telephone", value: "TEL" },
            { key: "Video Call", value: "VID" }
        ];
        this.searchStatusType = ["Active", "Inactive"];
        this.showAction = false;
        this.currSearch = { client: 0, clientPos: 0, status: "Active", key: null };
        this.searchCon = "";
        this.searchConsultantList = [];
        this.isSerach = false;
        this.formButtonsToggler = true;
        this.editButtonToggler = true;
        this.showProperties = false;
        this.selectedRecrd = 0;
        this.closeResult = "";
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.download = "download";
        this.upload = "upload";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({});
        this.apName = "";
        this.apValue = "";
        this.loggedInRole = "";
        this.comments = "";
        this.isCreate = false;
        this.pageSize = 20;
        this.cpGeneratedCode = "";
        this.fileList = [];
        this.appIds = [];
        this.refType = this.properties.CA;
        this.setPaymentGst = false;
        this.setPaymentWebsite = false;
        this.setPaymentBA = false;
        this.sendEmailModel = {};
        this.sendSmsModel = {};
        this.keyword = "name";
        this.selectedCPToSearch = -1;
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no"
        };
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0
        };
        this.getAllCAS = this.http.get(this.urlConstants.CASGetAll + "0&pageSize=20&sortBy=id");
        this.getAllC = this.http.get(this.urlConstants.CDropdown);
        this.getAllCP = this.http.get(this.urlConstants.CPDropdown);
        this.getAllR = this.http.get(this.urlConstants.RDropdown);
        this.getAllCl = this.http.get(this.urlConstants.ClientDropdown);
        this.getScreenSize();
    }
    ClientApplicationComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientApplicationComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.loggedInRole = sessionStorage.getItem("role");
        this.getAllDropdowns();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.init();
        this.checkIsConsultantExist();
        this.initialGetAll();
        this.spinner(true);
    };
    ClientApplicationComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    /**Checks if storage service have any saved consultants */
    ClientApplicationComponent.prototype.checkIsConsultantExist = function () {
        if (this.storageService.consultantId) {
            this.model.consultantId = this.storageService.consultantId;
        }
    };
    ClientApplicationComponent.prototype.init = function () {
        this.model.properties = [];
        this.faqModel.questions = [""];
        this.model.files = [];
        this.model.caStatus = "New";
        this.page = 1;
        this.isCRF = false;
    };
    ClientApplicationComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CAGetAllByStatus +
            pageNumber +
            "&pageSize=50&sortBy=id&status=Active");
        temp.subscribe(function (resp) {
            _this.clientApplicationList = resp;
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientApplicationList.noOfRecords;
            _this.tabCheck = "Active CA";
        });
    };
    ClientApplicationComponent.prototype.getAllDropdowns = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.getAllCAS, this.getAllC, this.getAllCP, this.getAllR, this.getAllCl
        // forkJoin on works for observables that complete
        ).subscribe(function (listofrecords) {
            _this.clientApplicationStatusList = listofrecords[0];
            _this.consultantList = listofrecords[1];
            _this.clientPositionList = listofrecords[2];
            _this.recruiterList = listofrecords[3];
            _this.clientList = listofrecords[4];
            _this.getRecruiterId();
            _this.searchCp = _this.clientPositionList;
        });
    };
    ClientApplicationComponent.prototype.getRecruiterId = function () {
        var _this = this;
        var temp = sessionStorage.getItem("username");
        this.recruiterList.forEach(function (rl) {
            if (rl.email === temp) {
                _this.model.creatorId = rl.id;
            }
        });
    };
    ClientApplicationComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
        this.model.caStatus = "New";
    };
    ClientApplicationComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        this.enableButtonType = "U";
    };
    ClientApplicationComponent.prototype.setModel = function (id) {
        this.getCAById(id);
        this.readOnlyForm = "U";
        this.enableButtonType = "E";
        this.showAction = true;
    };
    ClientApplicationComponent.prototype.getCAById = function (id) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.get(this.urlConstants.CAGetById + id);
        temp.subscribe(function (resp) {
            _this.model = _this.mapToUpdateModel(resp);
            var crf = _this.http.get(_this.urlConstants.getCRF + _this.model.id);
            crf.subscribe(function (resp) {
                _this.crfFile = resp;
                if (_this.crfFile != null) {
                    _this.isCRF = true;
                }
                else {
                    _this.isCRF = false;
                }
                _this.spinner(true);
            }, function (err) {
                _this.toastr.error(err.error.error, err.message);
                console.log(err);
            });
        });
    };
    ClientApplicationComponent.prototype.selectEvent = function (item) {
        // do something with selected item
        this.model.cpId = item.id;
        console.log("1", item);
    };
    ClientApplicationComponent.prototype.onChangeSearch = function (val) {
        console.log("2", val);
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    ClientApplicationComponent.prototype.onFocused = function (e) {
        console.log("3", e);
        // do something when input is focused
    };
    ClientApplicationComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        var consultant = {
            name: temp.consultant.fullname,
            id: temp.consultant.id,
            phone: temp.consultant.phone,
            email: temp.consultant.email
        };
        this.consultantList.push(consultant);
        this.model = temp;
        this.cpGeneratedCode = temp.clientPosition.generatedCode;
        this.model["cpId"] = temp.clientPosition.id;
        this.model["consultantId"] = temp.consultant.id;
        this.model["caStatus"] = temp.status.code;
        this.model["creatorId"] = temp.creator.id;
        return this.model;
    };
    ClientApplicationComponent.prototype.faqListIncrement = function (event, i) {
        switch (event.id) {
            case "decrease": {
                this.faqModel.questions.splice(i, 1);
                break;
            }
            case "increase": {
                this.faqModel.questions.push("");
                break;
            }
        }
    };
    ClientApplicationComponent.prototype.propertiesListIncrement = function (event, i) {
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
    ClientApplicationComponent.prototype.onSelectApplication = function (event, id, type) {
        if (event.target.checked) {
            if (type === "single")
                this.appIds.push(id);
            else
                this.appIds = this.clientApplicationList.list.map(function (r) { return r.id; });
        }
        else {
            if (type === "single")
                for (var i = 0; i < this.appIds.length; i++) {
                    if (id == this.appIds[i]) {
                        this.appIds.splice(i, 1);
                    }
                }
            else
                this.appIds = [];
        }
    };
    ClientApplicationComponent.prototype.checkUser = function () {
        var _this = this;
        if (this.loggedInRole != "Admin") {
            this.http
                .get(this.urlConstants.RLeadGetById + this.model.creatorId)
                .subscribe(function (resp) {
                var temp = resp;
                _this.sendEmailModel.toEmails = temp.toEmails;
                _this.sendEmailModel.bcc = "";
            });
        }
    };
    ClientApplicationComponent.prototype.mailSelectedApplications = function (Ids, sendMailContent, type) {
        var _this = this;
        this.spinner(false);
        var temp;
        if (type == "interviewSchedule") {
            temp = this.http.post(Ids, this.urlConstants.EmailGetShortlistCA);
        }
        else if (type == "shortlistedCandidates") {
            temp = this.http.post(Ids, this.urlConstants.EmailGetClientApps);
        }
        else if (type == "statusVerification") {
            temp = this.http.post(Ids, this.urlConstants.EmailGetReqUpdate);
        }
        temp.subscribe(function (resp) {
            _this.sendEmailModel = resp;
            _this.spinner(true);
            _this.appIds = [];
            _this.selectedCPToSearch = -1;
            _this.checkUser();
            _this.open(0, sendMailContent);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
            _this.appIds = [];
        });
    };
    ClientApplicationComponent.prototype.getInterviewDetailsEmail = function (id, sendMailContent) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.post(id, this.urlConstants.GetInterviewDetailsEmail);
        temp.subscribe(function (resp) {
            _this.sendEmailModel = resp;
            _this.spinner(true);
            _this.appIds = [];
            _this.open(0, sendMailContent);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
            _this.appIds = [];
        });
    };
    ClientApplicationComponent.prototype.getInterviewDetailsSms = function (id, sendSmsContent) {
        var _this = this;
        this.spinner(false);
        var reqId = { caId: id };
        var temp = this.http.post(reqId, this.urlConstants.SMSTemplateBuildContent + "ClientInterviewConfirmation");
        temp.subscribe(function (resp) {
            _this.sendSmsModel = resp;
            _this.spinner(true);
            _this.open(0, sendSmsContent);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
            _this.appIds = [];
        });
    };
    ClientApplicationComponent.prototype.createFAQ = function () {
        var _this = this;
        this.creating = true;
        var temp = this.http.post(this.faqModel, this.urlConstants.FAQSaveInCA +
            this.model.id +
            "&userId=" +
            this.model.creatorId);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.FAQ);
            _this.faqModel = {};
            _this.creating = false;
            _this.close();
        }, function (err) {
            _this.creating = false;
            _this.toastr.error(err.error.message, _this.properties.FAQ);
        });
    };
    ClientApplicationComponent.prototype.sendSmsReq = function () {
        var _this = this;
        this.spinner(false);
        this.creating = true;
        var temp = this.http.post(this.sendSmsModel, this.urlConstants.SMSTemplateSend);
        temp.subscribe(function (resp) {
            /**Check if any new consultants exists in emails to which send  */
            _this.close();
            _this.creating = false;
            _this.sendSmsModel = {};
            _this.toastr.success("Sms sent successfully", "Sent!");
            _this.spinner(true);
        }, function (err) {
            _this.creating = false;
            _this.toastr.error(err.error.message, _this.properties.CP);
            _this.spinner(true);
        });
    };
    ClientApplicationComponent.prototype.createAll = function (form, consultantCall) {
        this.open(this.model.id, consultantCall);
        this.caForm = form;
    };
    ClientApplicationComponent.prototype.createConCallHistory = function () {
        var _this = this;
        this.creating = true;
        this.conchModel.calledBy = this.model.creatorId;
        this.conchModel.consultantId = this.model.consultantId;
        this.conchModel.cpId = this.model.cpId;
        this.conchModel.calledDate = this.setTodaysDate();
        var temp = this.http.post(this.conchModel, this.urlConstants.CoCHCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CON_C_H);
            _this.create(_this.caForm);
            _this.conchModel = {};
            _this.creating = false;
            _this.close();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_C_H);
            _this.creating = false;
        });
    };
    ClientApplicationComponent.prototype.create = function (clientApplicationForm) {
        var _this = this;
        this.spinner(false);
        this.isCreate = true;
        var temp = this.http.post(this.model, this.urlConstants.CACreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CA);
            _this.init();
            _this.formReset();
            clientApplicationForm.resetForm();
            _this.spinner(true);
            _this.isCreate = false;
            _this.paginateConfig.currentPage = 1;
            _this.initialGetAll();
            _this.getRecruiterId();
            _this.emptyStorage();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.isCreate = false;
            _this.spinner(true);
        });
    };
    ClientApplicationComponent.prototype.emptyStorage = function () {
        this.storageService.consultantId = 0;
        this.model.consultantId = 0;
    };
    ClientApplicationComponent.prototype.dblSetModel = function (data) {
        this.model = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = "U";
        this.enableButtonType = "U";
        this.showAction = true;
    };
    ClientApplicationComponent.prototype.update = function (clientApplicationForm) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.update(this.model, this.urlConstants.CAUpdate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CA);
            _this.formReset();
            _this.init();
            clientApplicationForm.resetForm();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            if (!_this.isSerach) {
                _this.initialGetAll();
            }
            _this.getRecruiterId();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
        });
        this.formReset();
    };
    ClientApplicationComponent.prototype.cancelForm = function (clientApplicationForm) {
        clientApplicationForm.resetForm();
        this.init();
        this.formReset();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.showAction = false;
        this.getRecruiterId();
    };
    ClientApplicationComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CADelete + this.selectedRecrd);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CA);
            _this.init();
            _this.close();
            _this.formReset();
            _this.initialGetAll();
            _this.spinner(true);
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
            _this.getRecruiterId();
        }, function (err) {
            if (err.status === 200) {
                _this.init();
                _this.close();
                _this.formReset();
                return _this.toastr.success(_this.properties.DELETE, _this.properties.CA);
            }
            _this.spinner(true);
            _this.toastr.error(err.error.message, _this.properties.CA);
        });
    };
    ClientApplicationComponent.prototype.sendEmailReq = function () {
        var _this = this;
        this.spinner(false);
        this.sendEmailModel.target = "";
        var temp = this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend);
        temp.subscribe(function (resp) {
            _this.sendEmailModel = {};
            _this.toastr.success("Email/Emails sent successfully", _this.properties.CA);
            _this.close();
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CA);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientApplicationComponent.prototype.open = function (event, content) {
        var _this = this;
        this.selectedRecrd = 0;
        if (event) {
            this.selectedRecrd = event;
        }
        this.modalRef = this.modalService.open(content, {
            size: "lg",
            backdrop: "static"
        });
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    /**Download file */
    ClientApplicationComponent.prototype.downloadFile = function (id) {
        this.http.get(this.urlConstants.FileDownload + id).subscribe(function (resp) { }, function (err) {
            if (err.status == 200)
                window.open(err.url);
        });
    };
    ClientApplicationComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientApplicationComponent.prototype.getDismissReason = function (reason) {
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
    /** Get Uploaded files */
    ClientApplicationComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    ClientApplicationComponent.prototype.uploadCRF = function (content) {
        this.refType = "crf";
        this.open(this.model.id, content);
    };
    ClientApplicationComponent.prototype.deleteCRF = function (id) {
        var _this = this;
        var temp = this.http
            .delete(this.urlConstants.FileDelete + id)
            .subscribe(function (resp) {
            var crf = _this.http.get(_this.urlConstants.getCRF + _this.model.id);
            crf.subscribe(function (resp) {
                _this.crfFile = resp;
                if (_this.crfFile != null) {
                    _this.isCRF = true;
                }
                else {
                    _this.isCRF = false;
                }
            }, function (err) {
                _this.toastr.error(err.error.error, err.message);
                console.log(err);
            });
        });
    };
    /** Upload documents of respective consultant */
    ClientApplicationComponent.prototype.uploadFiles = function () {
        var _this = this;
        var files = this.getFiles();
        var formData = new FormData();
        formData.append("file", files[0].rawFile, files[0].name);
        if ((this.refType = "crf")) {
            var params = this.selectedRecrd + "&comments=" + this.comments;
            this.http.upload(this.urlConstants.saveCRF + params, formData).subscribe(function (resp) {
                var temp = resp;
                _this.comments = "";
                _this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({});
                _this.toastr.success(temp.message, _this.properties.CLIENT);
                _this.getCAById(_this.model.id);
                _this.refType = _this.properties.CA;
                _this.close();
            }, function (err) {
                _this.toastr.error(err.error.message, _this.properties.CLIENT);
            });
        }
        else {
            var params = "refId=" +
                this.selectedRecrd +
                "&refType=" +
                this.refType +
                "&comments=" +
                this.comments;
            this.http
                .upload(this.urlConstants.FileUpload + params, formData)
                .subscribe(function (resp) {
                var temp = resp;
                _this.toastr.success(temp.message, _this.properties.CLIENT);
                _this.close();
            }, function (err) {
                _this.toastr.error(err.error.message, _this.properties.CLIENT);
            });
        }
    };
    // public pageChange(event) {
    //   const from = (event - 1) * this.pageSize;
    //   const lst = this.clientApplicationList;
    //   const uplst = lst.slice(from, from + this.pageSize);
    //   this.pagedCAList = uplst;
    // }
    ClientApplicationComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientApplicationComponent.prototype.setCP = function (value) {
        this.model.cpId = value.id;
    };
    ClientApplicationComponent.prototype.checkInterviewSchedule = function () {
        var _this = this;
        if (this.model.caStatus == "Interview Scheduled") {
            this.model.interviewMode = this.properties.F2F;
            this.clientPositionList.forEach(function (cl) {
                if (cl.id == _this.model.cpId) {
                    var location_1 = cl.name.split("-");
                    _this.model.interviewLocation = location_1[2];
                }
            });
        }
        else {
            this.model.interviewDate = "";
            this.model.interviewLocation = "";
            this.model.interviewTime = "";
            this.model.interviewMode = "";
        }
    };
    ClientApplicationComponent.prototype.setPaymentModel = function (model, createPayment) {
        this.paymentModel.invoiceDate = this.setTodaysDate();
        this.paymentModel.companyName = model.clientPosition.client.name;
        if (model.clientPosition.client.website != null) {
            this.paymentModel.companyWebsite = model.clientPosition.client.website;
            this.setPaymentWebsite = false;
        }
        else {
            this.setPaymentWebsite = true;
        }
        if (model.clientPosition.client.gst != null) {
            this.paymentModel.companyGstNum = model.clientPosition.client.gst;
            this.setPaymentGst = false;
        }
        else {
            this.setPaymentGst = true;
        }
        if (model.clientPosition.client.billingAddress != null) {
            this.paymentModel.billingAddress =
                model.clientPosition.client.billingAddress;
            this.setPaymentBA = false;
        }
        else {
            this.setPaymentBA = true;
        }
        this.paymentModel.companyGstNum = model.clientPosition.client.gst;
        this.paymentModel.creditPeriod = model.clientPosition.client.creditPeriod;
        this.paymentModel.gauranteePeriod =
            model.clientPosition.client.guaranteePeriod;
        this.paymentModel.contactPerson =
            model.clientPosition.client.contactPersonName;
        this.paymentModel.contactPersonNum = model.clientPosition.client.phone;
        this.paymentModel.contactPersonEmail = model.clientPosition.client.email;
        this.paymentModel.designation = model.clientPosition.role;
        this.paymentModel.serviceCharge = model.clientPosition.client.serviceCharge;
        this.paymentModel.candidateName = model.consultant.fullname;
        this.paymentModel.phone = this.properties.PHONE;
        this.paymentModel.branchHeadName = this.properties.HEAD;
        this.paymentModel.branchLocation = this.properties.LOCATION;
        this.open(model.id, createPayment);
    };
    ClientApplicationComponent.prototype.setTodaysDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        var yyyy = today.getFullYear();
        var temp = yyyy + "-" + mm + "-" + dd;
        return temp;
    };
    ClientApplicationComponent.prototype.createPaymentForm = function (form) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.post(this.paymentModel, this.urlConstants.PaymentCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.PAYMENT);
            form.resetForm();
            _this.close();
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.PAYMENT);
            _this.spinner(true);
        });
    };
    ClientApplicationComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        this.initialGetAll();
    };
    ClientApplicationComponent.prototype.searchSelect = function () {
        this.isSerach = true;
    };
    ClientApplicationComponent.prototype.filterSearchCp = function () {
        var _this = this;
        this.isSerach = true;
        this.searchCp = [];
        this.currSearch.clientPos = 0;
        var temp1 = this.clientList.filter(function (cl) { return cl.id == _this.currSearch.client; });
        if (this.currSearch.client != -1) {
            this.clientPositionList.filter(function (cpl) {
                var temp = cpl.name.split(/\-/, 1);
                if (temp1[0].name == temp) {
                    _this.searchCp.push(cpl);
                }
            });
        }
    };
    /**?clientId=1&clientPosId=2&status=1&searchKey=ff */
    ClientApplicationComponent.prototype.generateSearchParams = function () {
        var url = this.urlConstants.CASearch;
        if (this.currSearch.client != 0 && this.currSearch.client != -1) {
            var temp = "clientId=" + this.currSearch.client;
            url = url + temp;
        }
        if (this.currSearch.clientPos != 0 && this.currSearch.clientPos != -1) {
            var temp = "&clientPosId=" + this.currSearch.clientPos;
            url = url + temp;
        }
        if (this.currSearch.status != null && this.currSearch.status != "-1") {
            var temp = "&statusType=" + this.currSearch.status;
            url = url + temp;
        }
        if (this.currSearch.key != null) {
            var temp = "&searchKey=" + this.currSearch.key;
            url = url + temp;
        }
        this.search(url);
    };
    ClientApplicationComponent.prototype.search = function (url) {
        var _this = this;
        this.paginateConfig.currentPage = 1;
        var temp = this.http.get(url);
        temp.subscribe(function (resp) {
            _this.clientApplicationList.list = resp;
            _this.paginateConfigDeclare(_this.clientApplicationList.list.length, 1, _this.clientApplicationList.list.length);
            _this.selectedCPToSearch = _this.currSearch.client;
        });
    };
    ClientApplicationComponent.prototype.cancelSearch = function () {
        this.isSerach = false;
        this.searchCp = this.clientPositionList;
        this.currSearch = { client: 0, clientPos: 0, status: "Active", key: null };
        this.initialGetAll();
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
    };
    ClientApplicationComponent.prototype.showActive = function () {
        if (this.tabCheck != "Active CA") {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        }
        this.initialGetAll();
    };
    ClientApplicationComponent.prototype.showInactive = function () {
        var _this = this;
        if (this.tabCheck != "Inactive CA") {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        }
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CAGetAllByStatus +
            pageNumber +
            "&pageSize=50&sortBy=id&status=Inactive");
        temp.subscribe(function (resp) {
            _this.clientApplicationList = resp;
            _this.paginateConfig.totalItems = _this.clientApplicationList.noOfRecords;
            _this.tabCheck = "Inactive CA";
        });
    };
    ClientApplicationComponent.prototype.showAll = function () {
        var _this = this;
        if (this.tabCheck != "All CA") {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        }
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CAGetAll + pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(function (resp) {
            _this.clientApplicationList = resp;
            _this.paginateConfig.totalItems = _this.clientApplicationList.noOfRecords;
            _this.tabCheck = "All CA";
        });
    };
    ClientApplicationComponent.prototype.popupSearchConsultant = function () {
        var _this = this;
        if (this.searchCon.length > 2) {
            var request = this.http.get(this.urlConstants.CSearch + this.searchCon);
            request.subscribe(function (resp) {
                _this.searchConsultantList = resp;
            });
        }
        else if (this.searchCon.length == 0) {
            this.searchConsultantList = [];
        }
    };
    ClientApplicationComponent.prototype.openSearchCon = function (value, content) {
        if (value == "more") {
            this.searchConsultantList = [];
            this.open(this.model.id, content);
        }
    };
    ClientApplicationComponent.prototype.setSearch = function (data) {
        var temp = {
            name: data.fullname,
            id: data.id,
            phone: data.phone,
            email: data.email
        };
        this.consultantList.push(temp);
        this.model.consultantId = data.id;
        this.close();
    };
    ClientApplicationComponent.prototype.dateChange = function () {
        this.model.interviewMode = " ";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientApplicationComponent.prototype, "getScreenSize", null);
    ClientApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-application",
            template: __webpack_require__(/*! ./client-application.component.html */ "./src/app/layout/client-application/client-application.component.html"),
            styles: [__webpack_require__(/*! ./client-application.component.scss */ "./src/app/layout/client-application/client-application.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["StorageService"]])
    ], ClientApplicationComponent);
    return ClientApplicationComponent;
}());



/***/ }),

/***/ "./src/app/layout/client-application/client-application.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/client-application/client-application.module.ts ***!
  \************************************************************************/
/*! exports provided: ClientApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientApplicationModule", function() { return ClientApplicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-application.component */ "./src/app/layout/client-application/client-application.component.ts");
/* harmony import */ var _client_application_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-application-routing.module */ "./src/app/layout/client-application/client-application-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ClientApplicationModule = /** @class */ (function () {
    function ClientApplicationModule() {
    }
    ClientApplicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _client_application_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientApplicationRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [_client_application_component__WEBPACK_IMPORTED_MODULE_4__["ClientApplicationComponent"]],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]]
        })
    ], ClientApplicationModule);
    return ClientApplicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-application-client-application-module.js.map