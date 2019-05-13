export class URLConstants {
    /*Client Application Status*/
    CASCreate: string = 'admin/cAStatus/create';
    CASGetAll: string = 'admin/cAStatus/getAll';

    /*Client Postion Status*/
    CPSCreate: string = 'admin/cPStatus/create';
    CPSGetAll: string = 'admin/cPStatus/getAll';

    /*Consultant Status */
    CSCreate: string = 'admin/consultantStatus/create';
    CSGetAll: string = 'admin/consultantStatus/getAll';

    /*Client Position */
    CPCreate: string = 'clientPosition/create';
    CPGetAll: string = 'clientPosition/getAll';
    CPUpdate: string = 'clientPosition/update';
    CPDelete: string = 'clientPosition/delete?';

    /*Consultant */
    CCreate: string = 'consultant/create';
    CGetAll: string = 'consultant/getAll';
    CUpdate: string = 'consultant/update';
    CDelete: string = 'consultant/id/';
    CUpload: string = 'uploadFile/create';

    /* Client Application */
    CACreate: string = 'clientApplication/create';
    CAGetAll: string = 'clientApplication/getAll';
    CAUpdate: string = 'clientApplication/update';
    CADelete: string = 'clientApplication/id/'


    /* Client Call History */
    CCHCreate: string = 'clientCallHistory/create';
    CCHGetAll: string = 'clientCallHistory/getAll';
    CCHUpdate: string = 'clientCallHistory/update';
    CCHDelete: string = 'clientCallHistory/id/'

    /* consultant Call History */
    CoCHCreate: string = 'consultantCallHistory/create';
    CoCHGetAll: string = 'consultantCallHistory/getAll';
    CoCHUpdate: string = 'consultantCallHistory/update';
    CoCHDelete: string = 'consultantCallHistory/id/'

    /* Recruiter */
    RCreate: string = 'recruiter/create';
    RGetAll: string = 'recruiter/getAll';
    RUpdate: string = 'recruiter/update';
    RDelete: string = 'recruiter/delete';

    /*Client*/
    ClientCreate: string = 'client/create';
    ClientGetAll: string = 'client/getAll';
    
    /** Reporting */
    ReportingGetAll:string = 'report/getAll';
}