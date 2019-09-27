export class Properties {
  /** Messages */
  DELETE = 'Deleted Successfully';
  CREATE = 'Created Successfully ';
  UPDATE = 'Updated Successfully';
  ACTIVATED = 'Activated Successfully';
  USER_LOGIN = 'User Logged In Successfully';
  UPOAD = 'Upload Files';
  DOWNLOAD = 'Files';
  PROPERTIES = 'Properties';
  PROPERTY_EXIST = 'Property already exists';
  CONFIRM_DELETE = 'Are you sure you want to delete';
  CONFIRM_CP_NEW = 'Do you want to create Client Position';
  CONFIRM_CA_NEW = 'Do you want to create Client Application';
  CONFIRM_ClCH_NEW = 'Do you want to create Client Call History';

  /** Modules */
  APP_NAME = 'CCPT';
  CON = 'Consultant';
  CA = 'Client Application';
  CLIENT = 'Client';
  CONTACT = 'Contact';
  CP = 'Client Position';
  CLI_C_H = 'Client Call History';
  CON_C_H = 'Consultant Call History';
  FAQ = "FAQ's";
  DASHBOARD = 'Dashboard';
  OTHR_CON = 'Other Contacts';
  RECRUITER = 'Recruiter';
  APP_STATUS = 'Client Application Status';
  POS_STATUS = 'Client Position Status';
  CON_STATUS = 'Consultant Status';
  USER = 'User';
  PAYMENT = 'Payment';
  LOGIN = 'Login';
  SEARCH = 'Search';
  EMAIL_HISTORY = 'Email History'

  /** Interview Types */
  F2F = 'Face to Face';

  /** BRANCH DETAILS */
  HEAD = 'Sreenath Thatikonda';
  PHONE = '+919848071296';
  LOCATION = 'Nizamabad';

  /**PAGINATION CONSTANTS */
  ITEMSPERPAGE = 50;

  /**status constants */
  STATUS = ['Active', 'Inactive'];

  /**Dashboard Stack Bar Chart status order */

  SBCStatusOrder = [
    'Rejected By Client',
    'New',
    'Shortlisted',
    'Interview Scheduled',
    'Interview Missed',
    'Accepted By Client',
    'Job Confirmed'
  ];

  /**Consultant source */
  consultantSource = ['Naukri', 'Shine', 'Others'];

  /**Client Contact Salutation */
  clientSalutation = ['Mr.', 'Mrs.'];

  /**Dashboard constants */
  DASHBOARD_ITW = 'Interviews this week';
  DASHBOARD_QSU = 'Quick Status Update';
  DASHBOARD_OCP = 'Open Client Positions';
  DASHBOARD_RP = 'Recruiter Performance';
  DASHBOARD_CAS = 'Client Applications By Status';
  DASHBOARD_DCP = 'Dying Client Positions';
  DASHBOARD_ACA='Active Client Applications';

  /**Button Names */
  CLOSE='Close'
  /**Table Head Names */
  TH_NAME='Name'
  TH_C_NO = 'Client No.';
  TH_CON_NO = 'Consultant No.';
  TH_MODE='Mode';
  TH_DATE='Date';
  TH_LOC='Location';
  TH_TIME='Time';
  TH_STAT='Status';
  TH_CODE='Code';
  TH_ASSIGN='Assigned To';
  TH_NOC='No.of closures';
  TH_COUNT='Count';
  TH_CALLER='Caller';
  TH_CALL_DATE='Called Date';
  TH_DESC='Description';
  TH_SNO='S.No';
  TH_POS='Position';
  TH_INT_DT='Interview Date'


  /**Client Position constants */
  CP_CN='Client Name';
  CP_JT='Job Tittle';
  CP_JTY='Job Type';
  CP_AVAIL='Availability';
  CP_RP='Required Positions';
  CP_RE='Required Experience';
  CP_MIN_CTC='Min CTC';
  CP_MAX_CTC='Max CTC';
  CP_CPS='Client Position Status';
  CP_ASSIGN='Assign To';
  CP_QUAL='Qualification';
  CP_CL_BY='Closed By';
  CP_REQ_SKILL='Required Skills';
  ADD_PROP='Additional Properties'
}
