export class URLConstants {
    /*Client Application Status*/
    CASCreate = 'caStatus';
    CASGetAll = 'caStatus/';
    CASUpdate = 'caStatus';
    CASDelete = 'caStatus/';
    CASGetById = 'caStatus/';

    /*Client Postion Status*/
    CPSCreate = 'cpStatus';
    CPSGetAll = 'cpStatus/';
    CPSUpdate = 'cpStatus';
    CPSDelete = 'cpStatus/';
    CPSGetById = 'cpStatus/';

    /*Consultant Status*/
    CSCreate = 'consultantStatus';
    CSGetAll = 'consultantStatus/';
    CSUpdate = 'consultantStatus';
    CSDelete = 'consultantStatus/';
    CSGetById = 'consultantStatus/';

    /*Client Position */
    CPCreate = 'clientPosition';
    CPGetAll = 'clientPosition/';
    CPUpdate = 'clientPosition';
    CPDelete = 'clientPosition/';
    CPGetById = 'clientPosition/';
    CPDropdown = 'clientPosition/getAllCps'
    /*Consultant */
    CCreate = 'consultant';
    CGetAll = 'consultant/';
    CUpdate = 'consultant';
    CDelete = 'consultant/';
    CGetById = 'consultant/';
    CUpload = 'file/save';
    CActivate = 'consultant/activate/'
    CDropdown = 'consultant/getAllConsultants'

    /* Client Application */
    CACreate = 'clientApplication';
    CAGetAll = 'clientApplication/';
    CAUpdate = 'clientApplication';
    CADelete = 'clientApplication/';
    CAGetById = 'clientApplication/';


    /* Client Call History */
    CCHCreate = 'clientCallHistory';
    CCHGetAll = 'clientCallHistory/';
    CCHUpdate = 'clientCallHistory';
    CCHDelete = 'clientCallHistory/';
    CCHGetById = 'clientCallHistory/';
    CCHGetCountByRecruiter = 'clientCallHistory/getAllCchCountByRecruiters';
    CCHGetByRecruiterId = 'clientCallHistory/getAllCchByRecruiterId?rId=';

    /* consultant Call History */
    CoCHCreate = 'consultantCallHistory';
    CoCHGetAll = 'consultantCallHistory/';
    CoCHUpdate = 'consultantCallHistory';
    CoCHDelete = 'consultantCallHistory/';
    CoCHGetById = 'consultantCallHistory/';
    CoCHGetCountByRecruiter = 'consultantCallHistory/getAllconCHCountByRecruiters';
    CoCHGetByRecruiterId = 'consultantCallHistory/getAllconCHByRecruiterId?rId=';

    /* Recruiter */
    RCreate = 'recruiter';
    RGetAll = 'recruiter/';
    RUpdate = 'recruiter';
    RDelete = 'recruiter/';
    RGetById = 'recruiter/';
    RGetByName = 'recruiter/name/';
    RDropdown = 'recruiter/getAllCreators'


    /*Client*/
    ClientCreate = 'client';
    ClientGetAll = 'client/';
    ClientUpdate = 'client';
    ClientDelete = 'client/';
    ClientGetById = 'client/';
    ClientDropdown = 'client/getAllClients'

    /*Other Contacts */
    OCCreate = 'contact';
    OCGetAll = 'contact/';
    OCUpdate = 'contact';
    OCDelete = 'contact/';
    OCGetById = 'contact/';

    /** Reporting */
    ReportingGetAllCLCH = 'report/getAllClientCallHistorysByDays?days=';
    ReportingGetAllCOCH = 'report/getAllConsultantCallHistorysByDays?days=';
    ReportingGetAllTop5CP = 'report/getTop5CP';
    ReportingGetClosures = 'report/getClosedCountOfAllRecruitersFromLastGivenDays?days=';
    ReportingGetAllOpenCP = 'report/getAllOpenCP';
    ReportingGetAllActiveCA = 'clientApplication/getAllActiveCACountByCpID';
    ReportingGetAllActiveCAById = 'clientApplication/getAllActiveCAByCpID?cpId=';
    ReportingGetAllInterviewsToday = 'clientApplication/getAllOneWeekInterviews';

    /**Email Template */
    EmailTemplateCreate = 'template';
    EmailTemplateGetAll = 'template/';
    EmailTemplateDelete = 'template/';
    EmailTemplateGetById = 'template/';
    EmailTemplateUpdate = 'template';
    EmailTemplateBuildContent = 'template/build/';
    EmailTemplateSend = 'sendEmail';

    /**SMS template */
    SMSTemplateGetAll = 'template/sms/';
    SMSTemplateCreate = 'template/sms';
    SMSTemplateDelete = 'template/sms/';
    SMSTemplateGetById = 'template/sms/';
    SMSTemplateUpdate = 'template/sms';
    SMSTemplateBuildContent = 'template/sms/build/';
    SMSTemplateSend = 'sms/send';

    /**User setup */
    UserLogin = 'user/login';
    UserCreate = 'user';
    UserGetAll = 'user/';
    UserUpdate = 'user';
    UserDelete = 'user/';
    UserGetById = 'user/';

    /** Messages */
    DeleteMsg = 'Deleted Successfully';
    SuccessMsg = 'Created Successfully ';
    UpdateMsg = 'Updated Successfully';
    ActivatedMsg = 'Activated Successfully'
    UploadFilesMsg = 'Upload Files';
    DownloadFilesMsg = 'Files';
}
