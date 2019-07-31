import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ClientApplicationModel {
    caStatus: string;
    cpId: string;
    consultantId: string;
    interviewDate: string;
    interviewLocation: string;
    interviewTime: string;
    id: number;
    description: string;
    creatorId: string;
    interviewMode: string;
    sentOn: string;
    files: Array<any>;
    properties: Array<AdditionalPropertiesModel>;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'},{key: 'Send Interview Schedule' , value:'Send Interview Schedule'},{key: 'Body Mail' , value:'Body Mail'},{key: 'File Upload' , value:'File Upload'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}
export class SendEmailModel {
    toEmails: Array<string> = [];
    subject: string;
    body: any;
    target: any;
    cc:string;
    bcc:string
}