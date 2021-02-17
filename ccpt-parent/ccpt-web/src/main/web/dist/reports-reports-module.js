(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/layout/reports/reports-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/reports/reports-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/layout/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <!-- <div\n    class=\"spinner padding-top justify-content-md-center\"\n    *ngIf=\"!listReturned\"\n  >\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3\">\n            <div class=\"card-header bg-dark text-clr-white\">\n              <span class=\"link\"\n                (click)=\"selectLeftTable(constantProperties.DASHBOARD_RP)\">{{ constantProperties.DASHBOARD_RP }}</span>\n              <span class=\"pull-right\">\n                <select class=\"form-control form-control-sm\" name=\"rpChoosenDays\" [(ngModel)]=\"rpChoosenDays\"\n                  (change)=\"rpGetAllByDays()\">\n                  <option *ngFor=\"let nod of noOfDays\" [ngValue]=\"nod.value\">{{ nod.key }}\n                  </option>\n                </select>\n              </span>\n            </div>\n            <div [ngbCollapse]=\"showLeftTable != constantProperties.DASHBOARD_RP\"\n              *ngIf=\"(ccptReportCC | json) != ({} | json)\" class=\"card-body\">\n              <table class=\"table table-sm table-striped\">\n                <thead>\n                  <tr>\n                    <th>{{ constantProperties.RECRUITER }}</th>\n                    <th>{{ constantProperties.TH_NOC }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let val of ccptReportCC | keyvalue\">\n                    <td>{{ val.key }}</td>\n                    <td>{{ val.value }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3 \">\n            <div class=\"card-header bg-dark text-clr-white\">\n              <span class=\"link\"\n                (click)=\"selectLeftTable(constantProperties.CON_C_H)\">{{ constantProperties.CON_C_H }}</span>\n              <span class=\"pull-right\">\n                <select class=\"form-control form-control-sm\" name=\"cochChoosenDays\" [(ngModel)]=\"cochChoosenDays\"\n                  (change)=\"cochGetAllByDays()\">\n                  <option *ngFor=\"let nod of noOfDays\" [ngValue]=\"nod.value\">{{ nod.key }}\n                  </option>\n                </select>\n              </span>\n            </div>\n            <div [ngbCollapse]=\"showLeftTable != constantProperties.CON_C_H\" *ngIf=\"ccptReportCOCH.length != 0\"\n              class=\"card-body\">\n              <table class=\"table table-sm table-striped\">\n                <thead>\n                  <tr>\n                    <th>{{ constantProperties.TH_NAME }}</th>\n                    <th>{{ constantProperties.TH_COUNT }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"link link-style\" placement=\"top\" ngbTooltip=\"click for details\"\n                    *ngFor=\"let cch of ccptReportCOCH\" (click)=\"\n                      open(\n                        contentCoCH,\n                        cch.recruiterId,\n                        'ConsultantCallHistory'\n                      )\n                    \">\n                    <td>{{ cch.fullName }}</td>\n                    <td>{{ cch.count }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3\">\n            <div (click)=\"getGraphData()\" class=\"link card-header bg-dark text-clr-white\">\n              {{ constantProperties.DASHBOARD_CAS }}\n            </div>\n            <div [ngbCollapse]=\"showRightTable != constantProperties.DASHBOARD_CAS\" *ngIf=\"caByStatusList.length\"\n              class=\"card-body table-overflow\">\n              <div [style.height.px]=\"stackChartHeight\">\n                <canvas baseChart id=\"activeCAChart\" [datasets]=\"barChartCAByStatusData\"\n                  [labels]=\"barChartCAByStautsLabels\" [colors]=\"stackbarChartColors\" [options]=\"barChartOptions\"\n                  [legend]=\"stackBarChartLegend\" [chartType]=\"barChartType\">\n                </canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header bg-dark text-clr-white\">\n          Client Call History\n          <span class=\"pull-right\">\n            <select class=\"form-control form-control-sm\" name=\"clchChoosenDays\" [(ngModel)]=\"clchChoosenDays\"\n              (change)=\"clchGetAllByDays()\">\n              <option *ngFor=\"let nod of noOfDays\" [ngValue]=\"nod.value\">{{nod.key}}\n              </option>\n            </select>\n          </span>\n        </div>\n        <div *ngIf=\"ccptReportCLCH.length != 0\" class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Count</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cch of ccptReportCLCH\" class=\"link\" placement=\"top\" ngbTooltip=\"click for details\"\n                data-toggle=\"tooltip\" (click)=\"open(contentClch, cch.recruiterId, 'ClientCallHistory')\">\n                <td>{{ cch.fullName }}</td>\n                <td>{{ cch.count }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #contentClch let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.CLI_C_H }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>\n              {{ constantProperties.TH_CALLER }}\n            </th>\n            <th>\n              {{ constantProperties.CP }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALL_DATE }}\n            </th>\n            <th width=\"150\">\n              {{ constantProperties.TH_DESC }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of clchByIdList\">\n            <td>{{ aca.calledBy.fullname }}</td>\n            <td>{{ aca.clientPosition.generatedCode }}</td>\n            <td>{{ aca.calledDate }}</td>\n            <td>{{ aca.description }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteCoCHRecord()\">Ok</button> -->\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #contentCoCH let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.CON_C_H }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"table-scroll ht-30\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>\n              {{ constantProperties.TH_SNO }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALLER }}\n            </th>\n            <th>\n              {{ constantProperties.CON }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALL_DATE }}\n            </th>\n            <th width=\"150\">\n              {{ constantProperties.TH_DESC }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of cochByIdList; let i = index\">\n            <td>{{ i + 1 }}.</td>\n            <td>{{ aca.calledBy.fullname }}</td>\n            <td>\n              {{ aca.consultant.fullname }}\n            </td>\n            <td>{{ aca.calledDate }}</td>\n            <td>{{ aca.description }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteCoCHRecord()\">Ok</button> -->\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.table-scroll {\n  height: 10em;\n  overflow-y: scroll; }\n\n.ht-30 {\n  height: 30em !important; }\n\n.text-clr-white {\n  color: white; }\n\n.word-break {\n  word-break: break-all; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.link:hover {\n  cursor: pointer; }\n\n.link-style:hover {\n  color: blue;\n  text-decoration: underline; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n.table-overflow {\n  position: relative;\n  height: 458px;\n  overflow-y: scroll; }\n\n.table-overflow-l {\n  position: relative;\n  height: 458px; }\n\n.table-fixed thead,\n.table-fixed tbody,\n.table-fixed tr,\n.table-fixed td,\n.table-fixed th {\n  display: block; }\n\n.fa-position {\n  position: absolute;\n  margin-left: 158px;\n  margin-top: -18px;\n  color: #2af72a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvRDpcXENDUFQgTUFJTlxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0c1xccmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBRUMsc0JBQXFCLEVBQ3JCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsMkJBQTBCLEVBQzNCOztBQUNEO0VBRUksMEJBQXlCLEVBQzFCOztBQUVIO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYSxFQUNkOztBQUVEOzs7OztFQUtFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFibGUtc2Nyb2xsIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5odC0zMCB7XHJcbiAgaGVpZ2h0OiAzMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtY2xyLXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLndvcmQtYnJlYWtcclxue1xyXG4gd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmxpbms6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGluay1zdHlsZTpob3ZlciB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQge1xyXG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB9XHJcbn1cclxuLnRhYmxlLW92ZXJmbG93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0NThweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnRhYmxlLW92ZXJmbG93LWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDQ1OHB4O1xyXG59XHJcblxyXG4udGFibGUtZml4ZWQgdGhlYWQsXHJcbi50YWJsZS1maXhlZCB0Ym9keSxcclxuLnRhYmxlLWZpeGVkIHRyLFxyXG4udGFibGUtZml4ZWQgdGQsXHJcbi50YWJsZS1maXhlZCB0aCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZhLXBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1OHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gIGNvbG9yOiAjMmFmNzJhO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/reports/reports.component.ts ***!
  \*****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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









var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.alerts = [];
        this.sliders = [];
        //public noOfDays: any = { 'Day': 1, 'Week': 7, 'Month': 30, 'Year': 365 };
        this.noOfDays = [
            { key: 'Day', value: 1 },
            { key: 'Week', value: 7 },
            { key: 'Month', value: 30 },
            { key: 'Year', value: 365 }
        ];
        this.ccptReportCLCH = [];
        this.ccptReportCOCH = [];
        this.ccptReportCC = {};
        this.top5ById = {};
        this.openCP = [];
        this.dyingCP = [];
        this.caByStatusList = [];
        this.activeCA = [];
        this.activeCAById = [];
        this.cochByIdList = [];
        this.clchByIdList = [];
        this.interviewsToday = [];
        this.cpEmptyPostings = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.constantProperties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.rpChoosenDays = 7;
        this.cochChoosenDays = 7;
        this.clchChoosenDays = 7;
        this.listReturned = false;
        this.isCollapsed = true;
        this.showLeftTable = this.constantProperties.DASHBOARD_ITW;
        this.showRightTable = this.constantProperties.DASHBOARD_PT;
        this.selectedRecrd = 0;
        this.closeResult = '';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            translate: 'no'
        };
        this.getAllReportCLCH = this.http.get(this.urlConstants.CCHGetCountByRecruiter + this.clchChoosenDays);
        this.getAllReportCOCH = this.http.get(this.urlConstants.CoCHGetCountByRecruiter + this.cochChoosenDays);
        this.getAllReportCC = this.http.get(this.urlConstants.ReportingGetClosures + this.rpChoosenDays);
        this.getAllCAStatus = this.http.get(this.urlConstants.CASGetAll + '0&pageSize=100&sortBy=id');
        this.getCAStatUPdate = this.http.get(this.urlConstants.DashboardCAStat);
        this.getCPEmptyPostings = this.http.get(this.urlConstants.CPEmptyPostings);
        // public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
        // public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
        // public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
        // public getAllDyingCP = this.http.get(this.urlConstants.ReportingDyingCp);
        this.getAllCAByStatus = this.http.get(this.urlConstants.ReportingGetAllCAByStatus);
        this.getAllDBContent = this.http.get(this.urlConstants.GetAllDashboard);
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            steps: 2,
                            stepValue: 2
                        }
                    }
                ],
                yAxes: [
                    {
                        barPercentage: 1,
                        ticks: {
                            fontSize: 10,
                            callback: function (label, index, labels) {
                                if (/\-/.test(label)) {
                                    return label.split(/\-/);
                                }
                                else {
                                    return label;
                                }
                            }
                        }
                    }
                ]
            }
        };
        this.barChartLabels = [];
        this.barChartCAByStautsLabels = [];
        this.barChartType = 'horizontalBar';
        this.barChartLegend = false;
        this.stackBarChartLegend = true;
        this.barChartActiveCAData = [{ data: [], label: 'Active Client Applications', cpIds: [] }];
        this.barChartColors = [{ backgroundColor: '#343a40' }];
        this.stackbarChartColors = [
            { backgroundColor: '#f88e90' },
            { backgroundColor: '#f88e90' },
            { backgroundColor: '#f88e90' },
            { backgroundColor: '#f88e90' },
            { backgroundColor: '#ffe29a' },
            { backgroundColor: '#ffe29a' },
            { backgroundColor: '#ffe29a' },
            { backgroundColor: '#ffe29a' },
            { backgroundColor: '#46bfbd' }
        ];
        this.barChartCAByStatusData = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(['/login']);
        }
        this.init();
    };
    ReportsComponent.prototype.init = function () {
        var _this = this;
        this.spinner(false);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.getAllReportCC, this.getAllCAStatus, this.getCPEmptyPostings, this.getAllReportCOCH).subscribe(function (listofrecords) {
            _this.ccptReportCC = listofrecords[0];
            _this.caStatusList = listofrecords[1];
            _this.cpEmptyPostings = listofrecords[2];
            _this.ccptReportCOCH = listofrecords[3];
            _this.setActiveCPBarData();
        });
        this.top5ById.properties = [];
    };
    ReportsComponent.prototype.getGraphData = function () {
        var _this = this;
        if (this.caByStatusList.length == 0) {
            this.getAllCAByStatus.subscribe(function (resp) {
                _this.caByStatusList = resp;
                _this.setCAByStatusBarData(_this.caByStatusList);
                _this.selectRightTable(_this.constantProperties.DASHBOARD_CAS);
            });
        }
        else if (this.caByStatusList.length != 0) {
            this.caByStatusList = [];
            this.selectRightTable(this.constantProperties.DASHBOARD_CAS);
        }
    };
    ReportsComponent.prototype.rpGetAllByDays = function () {
        var _this = this;
        var numberOfDays = this.rpChoosenDays;
        this.http.get(this.urlConstants.ReportingGetClosures + numberOfDays).subscribe(function (resp) {
            _this.ccptReportCC = resp;
            if (_this.showLeftTable != _this.constantProperties.DASHBOARD_RP) {
                _this.selectLeftTable(_this.constantProperties.DASHBOARD_RP);
            }
        });
    };
    ReportsComponent.prototype.cochGetAllByDays = function () {
        var _this = this;
        var numberOfDays = this.cochChoosenDays;
        this.http.get(this.urlConstants.CoCHGetCountByRecruiter + numberOfDays).subscribe(function (resp) {
            _this.ccptReportCOCH = resp;
            if (_this.showLeftTable != _this.constantProperties.CON_C_H) {
                _this.selectLeftTable(_this.constantProperties.CON_C_H);
            }
        });
    };
    ReportsComponent.prototype.clchGetAllByDays = function () {
        var _this = this;
        this.spinner(false);
        var numberOfDays = this.clchChoosenDays;
        this.http.get(this.urlConstants.CCHGetCountByRecruiter + numberOfDays).subscribe(function (resp) {
            _this.ccptReportCLCH = resp;
            _this.spinner(true);
        });
    };
    ReportsComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ReportsComponent.prototype.getAllCoCHByID = function (recrd, days) {
        var _this = this;
        this.spinner(false);
        this.cochByIdList = [];
        this.http.get(this.urlConstants.CoCHGetByRecruiterId + recrd + '&days=' + days).subscribe(function (resp) {
            _this.cochByIdList = resp;
            _this.spinner(true);
        });
    };
    ReportsComponent.prototype.getAllClCHByID = function (recrd, days) {
        var _this = this;
        this.spinner(false);
        this.clchByIdList = [];
        this.http.get(this.urlConstants.CCHGetByRecruiterId + recrd + '&days=' + days).subscribe(function (resp) {
            _this.clchByIdList = resp;
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ReportsComponent.prototype.open = function (content, selected, type) {
        var _this = this;
        if (selected) {
            this.selectedRecrd = selected;
        }
        this.modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        if (type == 'ConsultantCallHistory') {
            this.getAllCoCHByID(this.selectedRecrd, this.cochChoosenDays);
        }
        if (type == 'ClientCallHistory') {
            this.getAllClCHByID(this.selectedRecrd, this.clchChoosenDays);
        }
    };
    ReportsComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ReportsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /**
     * Looping and assigning the count to display on bar UI
     * Store cpId and pass when clicked on the bar
     */
    ReportsComponent.prototype.setActiveCPBarData = function () {
        var _this = this;
        this.activeCA.forEach(function (ca) {
            _this.barChartLabels.push(ca.generatedCode);
            _this.barChartActiveCAData[0].data.push('' + ca.count);
            _this.barChartActiveCAData[0].cpIds.push('' + ca.cpId);
        });
        this.chartHeight = 55 * this.activeCA.length;
    };
    /**
     * data list of client applications by status
     */
    ReportsComponent.prototype.setCAByStatusBarData = function (data) {
        var _this = this;
        this.barChartCAByStatusData = [];
        var CAStatusOder = [];
        this.caStatusList.list.filter(function (csl) {
            for (var i = 1; i <= _this.caStatusList.list.length; i++) {
                if (csl.ordr == i) {
                    CAStatusOder[i - 1] = csl.description;
                }
            }
        });
        var uniqueClientName = data.map(function (item) { return item.clientName; }).filter(function (value, index, self) { return self.indexOf(value) === index; });
        this.stackChartHeight = uniqueClientName.length * 60;
        var uniqueStatus = [];
        var tempUniqueStatus = data.map(function (item) { return item.statusCode; }).filter(function (value, index, self) { return self.indexOf(value) === index; });
        if (CAStatusOder.length) {
            CAStatusOder.forEach(function (cp) {
                tempUniqueStatus.forEach(function (tus) {
                    if (cp === tus) {
                        uniqueStatus.push(tus);
                    }
                });
            });
        }
        if (uniqueStatus.length) {
            uniqueStatus.forEach(function (us) {
                var temp = { data: [], label: '', stack: 'a' };
                uniqueClientName.forEach(function (ucn) {
                    var unique = data.filter(function (dt) { return dt.clientName == ucn && dt.statusCode == us; });
                    temp.data.push(unique[0].count);
                });
                _this.barChartCAByStautsLabels = uniqueClientName;
                _this.barChartCAByStatusData.push(temp);
            });
        }
        if (this.barChartCAByStatusData.length) {
            for (var i = 0; i < this.barChartCAByStatusData.length; i++) {
                this.barChartCAByStatusData[i].label = uniqueStatus[i];
            }
        }
    };
    /**
     * @param event eventdata
     * Click on bar chart and get the id of respective bar
     */
    ReportsComponent.prototype.chartClicked = function (event) {
        var index = event.active[0]._index;
        this.open(this.contentACA, this.barChartActiveCAData[0].cpIds[index], 'activeClientApplication');
    };
    ReportsComponent.prototype.selectLeftTable = function (value) {
        if (this.showLeftTable != value) {
            this.showLeftTable = value;
        }
        else {
            this.showLeftTable = '';
        }
    };
    ReportsComponent.prototype.selectRightTable = function (value) {
        if (this.showRightTable != value) {
            this.showRightTable = value;
        }
        else {
            this.showRightTable = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentACA'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ReportsComponent.prototype, "contentACA", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/layout/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/layout/reports/reports.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/reports/reports.module.ts ***!
  \**************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.component */ "./src/app/layout/reports/reports.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/layout/reports/reports-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_8__["ReportsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["StatModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["ActionListModule"]
            ],
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map