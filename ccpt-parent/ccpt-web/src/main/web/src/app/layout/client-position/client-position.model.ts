export interface ClientPositionModel {
    assignTo: string;
    clientName: string;
    clientId: string;
    id: number;
    role: string;
    experience: string;
    clientPositionCode: string;
    requiredSkills: string;
    minCtc: number;
    maxCtc: number;
    clientPositionsStatusCode: string;
    closedBy: string;
    additionalComments: string;
    jobCode: string;
    location: string;
    numberOfPositions: number;
    createdDate: string;
}

export class SendSmsModel {
    contactNumbers: Array<string>= [];
    message: string;
}

export class SendEmailModel {
    to: Array<string> = [];
    subject: string;
    body: string;
}
