import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ClientPositionModel {
    assignedTo: number;
    clientName: string;
    clientId: number;
    id: number;
    role: string;
    experience: string;
    generatedCode: string;
    requiredSkills: string;
    minCtc: string;
    maxCtc: string;
    cpstatus: string;
    closedBy: string;
    description: string;
    location: string;
    createdDate: string;
    requiredPositions: string;
    qualification: string;
    availability: string;
    jobType: string;
    naukriURL: string;
    shineURL: string;
    shinePosting:Date;
    naukriPosting:Date;
    facebookPosting:Date;
    twitterPosting:Date;
    shineMassMailing:Date;
    naukriMassMailing:Date;
    shineMassMailingCount:number;
    naukriMassMailingCount:number;
    properties: Array<AdditionalPropertiesModel>;
}

export class SendSmsModel {
    contactNumbers: string;
    message: string;
    target:string;
}

export class SendEmailModel {
    toEmails: string
    subject: string;
    body: string;
    target:string;
    cc:string;
    bcc: string;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'},{key: 'Send JD' , value:'Send JD'},{key: 'Clone' , value:'Clone'},{key: 'Create Application' , value:'Create Application'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}