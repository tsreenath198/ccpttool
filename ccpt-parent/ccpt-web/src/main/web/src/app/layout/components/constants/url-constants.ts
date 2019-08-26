export class URLConstants {
    /*Client Application Status*/
    CASCreate = 'caStatus';
    CASGetAll = 'caStatus/?pageNo=';
    CASUpdate = 'caStatus';
    CASDelete = 'caStatus/';
    CASGetById = 'caStatus/';

    /*Client Postion Status*/
    CPSCreate = 'cpStatus';
    CPSGetAll = 'cpStatus/?pageNo=';
    CPSUpdate = 'cpStatus';
    CPSDelete = 'cpStatus/';
    CPSGetById = 'cpStatus/';

    /*Consultant Status*/
    CSCreate = 'conStatus';
    CSGetAll = 'conStatus/?pageNo=';
    CSUpdate = 'conStatus';
    CSDelete = 'conStatus/';
    CSGetById = 'conStatus/';

    /*Client Position */
    CPCreate = 'clientPosition';
    CPGetAll = 'clientPosition/?pageNo=';
    CPUpdate = 'clientPosition';
    CPDelete = 'clientPosition/';
    CPGetById = 'clientPosition/';
    CPDropdown = 'clientPosition/getAllCps';
    /*Consultant */
    CCreate = 'consultant';
    CGetAll = 'consultant/?pageNo=';
    CUpdate = 'consultant';
    CDelete = 'consultant/';
    CGetById = 'consultant/';
    CUpload = 'file/save';
    CActivate = 'consultant/activate/';
    CDropdown = 'consultant/getAllConsultants';
    CSearch = 'consultant/search?searchKey=';

    /* Client Application */
    CACreate = 'clientApplication';
    CAGetAll = 'clientApplication/?pageNo=';
    CAUpdate = 'clientApplication';
    CADelete = 'clientApplication/';
    CAGetById = 'clientApplication/';
    CABodyMail = 'clientApplication/showBodyMail?caId='
    CAJobConfirmed = "clientApplication/getJobConfirmedCAs"
    CASearch = "clientApplication/search?clientId="


    /* Client Call History */
    CCHCreate = 'clientCallHistory';
    CCHGetAll = 'clientCallHistory/?pageNo=';
    CCHUpdate = 'clientCallHistory';
    CCHDelete = 'clientCallHistory/';
    CCHGetById = 'clientCallHistory/';
    CCHGetCountByRecruiter = 'clientCallHistory/getAllCchCountByRecruiters?days=';
    CCHGetByRecruiterId = 'clientCallHistory/getAllCchByRecruiterId?rId=';

    /* consultant Call History */
    CoCHCreate = 'consultantCallHistory';
    CoCHGetAll = 'consultantCallHistory/?pageNo=';
    CoCHUpdate = 'consultantCallHistory';
    CoCHDelete = 'consultantCallHistory/';
    CoCHGetById = 'consultantCallHistory/';
    CoCHGetCountByRecruiter = 'consultantCallHistory/getAllconCHCountByRecruiters?days=';
    CoCHGetByRecruiterId = 'consultantCallHistory/getAllconCHByRecruiterId?rId=';

    /* Recruiter */
    RCreate = 'recruiter';
    RGetAll = 'recruiter/?pageNo=';
    RUpdate = 'recruiter';
    RDelete = 'recruiter/';
    RGetById = 'recruiter/';
    RGetByName = 'recruiter/name/';
    RDropdown = 'recruiter/getAllCreators';
    RLeadEmails = 'recruiter/getAllLeadEmails'
    RLeadGetById = 'recruiter/getLeadEmailById/'

    /*Client*/
    ClientCreate = 'client';
    ClientGetAll = 'client/?pageNo=';
    ClientUpdate = 'client';
    ClientDelete = 'client/';
    ClientGetById = 'client/';
    ClientDropdown = 'client/getAllClients';

    /*Other Contacts */
    OCCreate = 'contact';
    OCGetAll = 'contact/?pageNo=';
    OCUpdate = 'contact';
    OCDelete = 'contact/';
    OCGetById = 'contact/';

    /*Search */
    SearchCreate = 'search';
    SearchGetAll = 'search/?pageNo=';
    SearchUpdate = 'search';
    SearchDelete = 'search/';
    SearchGetById = 'search/';

    /** Reporting */
    ReportingGetAllCLCH = 'report/getAllClientCallHistorysByDays?days=';
    ReportingGetAllCOCH = 'report/getAllConsultantCallHistorysByDays?days=';
    ReportingGetAllTop5CP = 'report/getTop5CP';
    ReportingGetClosures = 'report/getClosedCountOfAllRecruitersFromLastGivenDays?days=';
    ReportingGetAllOpenCP = 'report/getAllOpenCP';
    ReportingGetAllActiveCA = 'clientApplication/getAllActiveCACountByCpID';
    ReportingGetAllActiveCAById = 'clientApplication/getAllActiveCAByCpID?cpId=';
    ReportingGetAllInterviewsToday = 'clientApplication/getAllInterviewsFromToday';
    ReportingDyingCp = 'report/getLastWeekDyingCP'

    /**Email Template */
    EmailTemplateCreate = 'template';
    EmailTemplateGetAll = 'template/?pageNo=';
    EmailTemplateDelete = 'template/';
    EmailTemplateGetById = 'template/';
    EmailTemplateUpdate = 'template';
    EmailTemplateBuildContent = 'template/build/';
    EmailTemplateSend = 'sendEmail';
    EmailGetClientApps = 'template/getClientApps';
    EmailGetShortlistCA = 'template/getShortListedCA'
    GetInterviewDetailsEmail = 'template/getInterviewTemplate'

    /**SMS template */
    SMSTemplateGetAll = 'template/sms/?pageNo=';
    SMSTemplateCreate = 'template/sms';
    SMSTemplateDelete = 'template/sms/';
    SMSTemplateGetById = 'template/sms/';
    SMSTemplateUpdate = 'template/sms';
    SMSTemplateBuildContent = 'template/sms/build/';
    SMSTemplateSend = 'sms/send';

    /**User setup */
    UserLogin = 'user/login';
    UserCreate = 'user';
    UserGetAll = 'user/?pageNo=';
    UserUpdate = 'user';
    UserDelete = 'user/';
    UserGetById = 'user/';
    SecretLogin = 'user/secretLogin'

    /**Payments */
    PaymentCreate = 'payment';
    PaymentGetAll = 'payment/?pageNo=';
    PaymentUpdate = 'payment';
    PaymentDelete = 'payment/';
    PaymentGetById = 'payment/';
    PaymentActivateById = 'payment/';
    PaymentGetExcel = 'payment/downloadExcel?paymentId='

    /**File */
    FileUpload = 'uploadFile/save?';
    FileDownload = 'uploadFile/download/';
    FileDelete = 'uploadFile/'
    getCRF = 'uploadFile/getCRFResume?caId=' ;
    saveCRF = 'uploadFile/saveCrf?caId='
}
