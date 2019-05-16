export class URLConstants {
    /*Client Application Status*/
    CASCreate: string = 'admin/cAStatus/create';
    CASGetAll: string = 'admin/cAStatus/getAll';
    CASUpdate: string = 'admin/cAStatus/update';
    CASDelete: string = 'admin/cAStatus/id/'

    /*Client Postion Status*/
    CPSCreate: string = 'admin/cPStatus/create';
    CPSGetAll: string = 'admin/cPStatus/getAll';
    CPSUpdate: string = 'admin/cPStatus/update';
    CPSDelete: string = 'admin/cPStatus/id/'

    /*Consultant Status*/
    CSCreate: string = 'admin/consultantStatus/create';
    CSGetAll: string = 'admin/consultantStatus/getAll';
    CSUpdate: string = 'admin/consultantStatus/update';
    CSDelete: string = 'admin/consultantStatus/id/'

    /*Client Position */
    CPCreate: string = 'clientPosition/create';
    CPGetAll: string = 'clientPosition/getAll';
    CPUpdate: string = 'clientPosition/update';
    CPDelete: string = 'clientPosition/id/';

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
    RDelete: string = 'recruiter/id/';

    /*Client*/
    ClientCreate: string = 'client/create';
    ClientGetAll: string = 'client/getAll';
    ClientUpdate: string = 'client/update';
    ClientDelete: string = 'client/id/';

    /** Reporting */
    ReportingGetAll: string = 'report/getAll';

    /** Messages */
    DeleteMsg: string = "Deleted Successfully";
    SuccessMsg: string = "Created Successfully ";
    UpdateMsg: string = "Updated Successfully";
}