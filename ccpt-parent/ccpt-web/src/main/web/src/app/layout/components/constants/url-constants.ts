export class URLConstants {
    /*Client Application Status*/
    CASCreate = 'admin/cAStatus/create';
    CASGetAll = 'admin/cAStatus/getAll';
    CASUpdate = 'admin/cAStatus/update';
    CASDelete = 'admin/cAStatus/id/';

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
    EmailTemplateGetAll = '/getAll';
    EmailTemplateGetById = '/template/';
    EmailTemplateUpdate = '/update';


    /**User setup */
    UserCreate = 'login';

    /** Messages */
    DeleteMsg = 'Deleted Successfully';
    SuccessMsg = 'Created Successfully ';
    UpdateMsg = 'Updated Successfully';

    UploadFilesMsg = 'Upload Files';
    DownloadFilesMsg = 'Files';
}
