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
    jobCode: string;
    location: string;
    createdDate: string;
    requiredPositions: string;
    properties: Array<AdditionalPropertiesModel>;
}

export class SendSmsModel {
    contactNumbers: Array<string> = [];
    message: string;
}

export class SendEmailModel {
    to: Array<string> = [];
    subject: string;
    body: string;
}
