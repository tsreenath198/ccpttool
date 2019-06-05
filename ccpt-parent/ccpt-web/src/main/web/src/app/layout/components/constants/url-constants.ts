export class URLConstants {
    /*Client Application Status*/
    CASCreate = 'caStatus';
    CASGetAll = 'caStatus/';
    CASUpdate = 'caStatus';
    CASDelete = 'caStatus/';
    CASGetById = 'caStatus/';

    /*Client Postion Status*/
    CPSCreate = 'admin/cPStatus/create';
    CPSGetAll = 'admin/cPStatus/getAll';
    CPSUpdate = 'admin/cPStatus/update';
    CPSDelete = 'admin/cPStatus/id/';

    /*Consultant Status*/
    CSCreate = 'admin/consultantStatus/create';
    CSGetAll = 'admin/consultantStatus/getAll';
    CSUpdate = 'admin/consultantStatus/update';
    CSDelete = 'admin/consultantStatus/id/';

    /*Client Position */
    CPCreate = 'clientPosition/create';
    CPGetAll = 'clientPosition/getAll';
    CPUpdate = 'clientPosition/update';
    CPDelete = 'clientPosition/id/';

    /*Consultant */
    CCreate = 'consultant/create';
    CGetAll = 'consultant/getAll';
    CUpdate = 'consultant/update';
    CDelete = 'consultant/id/';
    CUpload = 'uploadFile/create';

    /* Client Application */
    CACreate = 'clientApplication/create';
    CAGetAll = 'clientApplication/getAll';
    CAUpdate = 'clientApplication/update';
    CADelete = 'clientApplication/id/';


    /* Client Call History */
    CCHCreate = 'clientCallHistory/create';
    CCHGetAll = 'clientCallHistory/getAll';
    CCHUpdate = 'clientCallHistory/update';
    CCHDelete = 'clientCallHistory/id/';

    /* consultant Call History */
    CoCHCreate = 'consultantCallHistory/create';
    CoCHGetAll = 'consultantCallHistory/getAll';
    CoCHUpdate = 'consultantCallHistory/update';
    CoCHDelete = 'consultantCallHistory/id/';

    /* Recruiter */
    RCreate = 'recruiter/create';
    RGetAll = 'recruiter/getAll';
    RUpdate = 'recruiter/update';
    RDelete = 'recruiter/id/';

    /*Client*/
    ClientCreate = 'client/create';
    ClientGetAll = 'client/getAll';
    ClientUpdate = 'client/update';
    ClientDelete = 'client/id/';

    /*Other Contacts */
    OCCreate = 'contact/create';
    OCGetAll = 'contact/getAll';
    OCUpdate = 'contact/update';
    OCDelete = 'contact/id/';

    /** Reporting */
    ReportingGetAllCLCH = 'report/getAllClientCallHistorysByDays?days=';
    ReportingGetAllCOCH = 'report/getAllConsultantCallHistorysByDays?days=';
    ReportingGetAllTop5CP = 'report/getTop5CP';
    ReportingGetClosures = 'report/getClosedCountOfAllRecruitersFromLastGivenDays?days=';

    /**Email Template */
    EmailTemplateGetAll = 'emailTemplate/getAll';
    EmailTemplateGetById = 'emailTemplate/template/';
    EmailTemplateUpdate = 'emailTemplate/update';
    EmailTemplateSend = 'sendEmail';

    /**SMS template */
    SMSTemplateGetAll = 'sms/getAll';
    SMSTemplateSend = 'sms/send';
    SMSTemplateGetById = 'sms/template/bulkSMSForClientRole/';
    SMSTemplateUpdate = 'sms/update';

    /**User setup */
    UserLogin = 'user/login';
    UserCreate = 'user/create';
    UserGetAll = 'user/getAll'

    /** Messages */
    DeleteMsg = 'Deleted Successfully';
    SuccessMsg = 'Created Successfully ';
    UpdateMsg = 'Updated Successfully';

    UploadFilesMsg = 'Upload Files';
    DownloadFilesMsg = 'Files';
}
