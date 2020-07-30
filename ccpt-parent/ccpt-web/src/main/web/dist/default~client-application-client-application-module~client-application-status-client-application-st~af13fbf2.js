(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~client-application-client-application-module~client-application-status-client-application-st~af13fbf2"],{

/***/ "./src/app/layout/components/constants/url-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/constants/url-constants.ts ***!
  \**************************************************************/
/*! exports provided: URLConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLConstants", function() { return URLConstants; });
var URLConstants = /** @class */ (function () {
    function URLConstants() {
        /*Client Application Status*/
        this.CASCreate = 'caStatus';
        this.CASGetAll = 'caStatus/?pageNo=';
        this.CASUpdate = 'caStatus';
        this.CASDelete = 'caStatus/';
        this.CASGetById = 'caStatus/';
        /*Client Postion Status*/
        this.CPSCreate = 'cpStatus';
        this.CPSGetAll = 'cpStatus/?pageNo=';
        this.CPSUpdate = 'cpStatus';
        this.CPSDelete = 'cpStatus/';
        this.CPSGetById = 'cpStatus/';
        /*Consultant Status*/
        this.CSCreate = 'conStatus';
        this.CSGetAll = 'conStatus/?pageNo=';
        this.CSUpdate = 'conStatus';
        this.CSDelete = 'conStatus/';
        this.CSGetById = 'conStatus/';
        /*Client Position */
        this.CPCreate = 'clientPosition';
        this.CPGetAll = 'clientPosition/?pageNo=';
        this.CPUpdate = 'clientPosition';
        this.CPDelete = 'clientPosition/';
        this.CPGetById = 'clientPosition/';
        this.CPDropdown = 'clientPosition/getAllCps';
        this.CPGetAllByStatus = 'clientPosition/getAllByStatus?pageNo=';
        this.CPUpdatePosting = 'clientPosition/updatePosting';
        this.CPEmptyPostings = 'clientPosition/getEmptyData';
        /*Consultant */
        this.CCreate = 'consultant';
        this.CGetAll = 'consultant/?pageNo=';
        this.CUpdate = 'consultant';
        this.CDelete = 'consultant/';
        this.CGetById = 'consultant/';
        this.CUpload = 'file/save';
        this.CActivate = 'consultant/activate/';
        this.CDropdown = 'consultant/getAllConsultants';
        this.CSearch = 'consultant/search?searchKey=';
        this.CAdvSearch = 'consultant/advanceSearch';
        this.CGetInactive = 'consultant/getInactiveConsultants';
        this.CGetAllByStatus = 'consultant/getAllByStatus?pageNo=';
        /* Client Application */
        this.CACreate = 'clientApplication';
        this.CAGetAll = 'clientApplication/?pageNo=';
        this.CAUpdate = 'clientApplication';
        this.CADelete = 'clientApplication/';
        this.CAGetById = 'clientApplication/';
        this.CABodyMail = 'clientApplication/showBodyMail?caId=';
        this.CAJobConfirmed = 'clientApplication/getJobConfirmedCAs';
        this.CASearch = 'clientApplication/search?';
        this.CADropdown = 'clientApplication/getCAStatistics';
        this.CAStatusUpdate = 'clientApplication//updateStatus?status=';
        this.CAGetAllByStatus = 'clientApplication/getAllByStatus?pageNo=';
        /* Client Call History */
        this.CCHCreate = 'clientCallHistory';
        this.CCHGetAll = 'clientCallHistory/?pageNo=';
        this.CCHUpdate = 'clientCallHistory';
        this.CCHDelete = 'clientCallHistory/';
        this.CCHGetById = 'clientCallHistory/';
        this.CCHGetCountByRecruiter = 'report/getAllCchCountByRecruiters?days=';
        this.CCHGetByRecruiterId = 'clientCallHistory/getAllCchByRecruiterId?rId=';
        /* consultant Call History */
        this.CoCHCreate = 'consultantCallHistory';
        this.CoCHGetAll = 'consultantCallHistory/?pageNo=';
        this.CoCHUpdate = 'consultantCallHistory';
        this.CoCHDelete = 'consultantCallHistory/';
        this.CoCHGetById = 'consultantCallHistory/';
        this.CoCHGetCountByRecruiter = 'report/getAllconCHCountByRecruiters?days=';
        this.CoCHGetByRecruiterId = 'consultantCallHistory/getAllconCHByRecruiterId?rId=';
        /* Recruiter */
        this.RCreate = 'recruiter';
        this.RGetAll = 'recruiter/?pageNo=';
        this.RUpdate = 'recruiter';
        this.RDelete = 'recruiter/';
        this.RGetById = 'recruiter/';
        this.RGetByName = 'recruiter/name/';
        this.RDropdown = 'recruiter/getAllCreators';
        this.RLeadEmails = 'recruiter/getAllLeadEmails';
        this.RLeadGetById = 'recruiter/getLeadEmailById/';
        /*Client*/
        this.ClientCreate = 'client';
        this.ClientGetAll = 'client/?pageNo=';
        this.ClientUpdate = 'client';
        this.ClientDelete = 'client/';
        this.ClientGetById = 'client/';
        this.ClientDropdown = 'client/getAllClients';
        /*Other Contacts */
        this.OCCreate = 'contact';
        this.OCGetAll = 'contact/?pageNo=';
        this.OCUpdate = 'contact';
        this.OCDelete = 'contact/';
        this.OCGetById = 'contact/';
        /*Search */
        this.SearchCreate = 'search';
        this.SearchGetAll = 'search/?pageNo=';
        this.SearchUpdate = 'search';
        this.SearchDelete = 'search/';
        this.SearchGetById = 'search/';
        this.SearchAllSearch = 'search/search?searchKey=';
        /**Industry Type */
        this.ITCreate = 'industryType';
        this.ITGetAll = 'industryType/?pageNo=';
        this.ITUpdate = 'industryType';
        this.ITDelete = 'industryType/';
        this.ITGetById = 'industryType/';
        /**Email History */
        this.EHCreate = 'emailHistory';
        this.EHGetAll = 'emailHistory/?pageNo=';
        this.EHUpdate = 'emailHistory';
        this.EHDelete = 'emailHistory/';
        this.EHGetById = 'emailHistory/';
        /**Messages History */
        this.SMSHCreate = 'smsHistory';
        this.SMSHGetAll = 'smsHistory/?pageNo=';
        this.SMSHUpdate = 'smsHistory';
        this.SMSHDelete = 'smsHistory/';
        this.SMSHGetById = 'smsHistory/';
        /** Reporting */
        this.GetAllDashboard = 'dashboard/getAllDashboardContent';
        this.ReportingGetAllTop5CP = 'dashboard/getTop5CP';
        this.ReportingGetClosures = 'report/getClosedCountOfAllRecruitersFromLastGivenDays?days=';
        this.ReportingGetAllOpenCP = 'dashboard/getAllOpenCP';
        this.ReportingGetAllActiveCA = 'dashboard/getAllActiveCACountByCpID';
        this.ReportingGetAllActiveCAById = 'clientApplication/getAllActiveCAByCpID?cpId=';
        this.ReportingGetAllInterviewsToday = 'dashboard/getAllInterviewsFromToday';
        this.ReportingDyingCp = 'dashboard/getLastWeekDyingCP';
        this.ReportingGetAllCAByStatus = 'report/getAllCAbyStatus';
        this.DashboardCAStat = 'dashboard/getDashboardCAStatistics';
        /**Email Template */
        this.EmailTemplateCreate = 'template';
        this.EmailTemplateGetAll = 'template/?pageNo=';
        this.EmailTemplateDelete = 'template/';
        this.EmailTemplateGetById = 'template/';
        this.EmailTemplateUpdate = 'template';
        this.EmailTemplateBuildContent = 'template/build/';
        this.EmailTemplateSend = 'sendEmail';
        this.EmailGetClientApps = 'template/getClientApps';
        this.EmailGetShortlistCA = 'template/getShortListedCA';
        this.EmailGetReqUpdate = 'template/getCAs';
        this.GetInterviewDetailsEmail = 'template/getInterviewTemplate';
        /**SMS template */
        this.SMSTemplateGetAll = 'template/sms/?pageNo=';
        this.SMSTemplateCreate = 'template/sms';
        this.SMSTemplateDelete = 'template/sms/';
        this.SMSTemplateGetById = 'template/sms/';
        this.SMSTemplateUpdate = 'template/sms';
        this.SMSTemplateBuildContent = 'template/sms/build/';
        this.SMSTemplateSend = 'sms/send';
        /**User setup */
        this.UserLogin = 'user/login';
        this.UserCreate = 'user';
        this.UserGetAll = 'user/?pageNo=';
        this.UserUpdate = 'user';
        this.UserDelete = 'user/';
        this.UserGetById = 'user/';
        this.SecretLogin = 'user/secretLogin';
        /**Payments */
        this.PaymentCreate = 'payment';
        this.PaymentGetAll = 'payment/?pageNo=';
        this.PaymentUpdate = 'payment';
        this.PaymentDelete = 'payment/';
        this.PaymentGetById = 'payment/';
        this.PaymentActivateById = 'payment/';
        this.PaymentGetExcel = 'payment/downloadExcel?paymentId=';
        /**Question */
        this.FAQCreate = 'question';
        this.FAQGetAll = 'question/?pageNo=';
        this.FAQUpdate = 'question';
        this.FAQDelete = 'question/';
        this.FAQGetByID = 'question/';
        this.FAQActivateById = 'question/';
        this.FAQSaveInCA = 'question/save?caId=';
        this.FAQSearchByCAId = 'question/searchByCAID?caId=';
        this.FAQSearchBySkills = 'question/searchBySkills?skills=';
        /**File */
        this.FileUpload = 'uploadFile/save?';
        this.FileDownload = 'uploadFile/download/';
        this.FileDelete = 'uploadFile/';
        this.getCRF = 'uploadFile/getCRFResume?caId=';
        this.saveCRF = 'uploadFile/saveCrf?caId=';
        /**backup */
        this.Backup = 'backUpCCPT/backupArchives';
    }
    return URLConstants;
}());



/***/ }),

/***/ "./src/app/shared/services/toastr.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/toastr.service.ts ***!
  \***************************************************/
/*! exports provided: ToastrCustomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrCustomService", function() { return ToastrCustomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrCustomService = /** @class */ (function () {
    function ToastrCustomService(toastr) {
        this.toastr = toastr;
    }
    ToastrCustomService.prototype.success = function (msg, current) {
        this.toastr.success(msg, current);
    };
    ToastrCustomService.prototype.error = function (msg, current) {
        this.toastr.error(msg, current);
    };
    ToastrCustomService.prototype.info = function (msg, current) {
        this.toastr.info(msg, current);
    };
    ToastrCustomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToastrCustomService);
    return ToastrCustomService;
}());



/***/ })

}]);
//# sourceMappingURL=default~client-application-client-application-module~client-application-status-client-application-st~af13fbf2.js.map