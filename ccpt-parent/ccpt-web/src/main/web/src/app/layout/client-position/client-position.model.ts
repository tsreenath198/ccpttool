export interface ClientPositionModel {
    assignTo: string;
    clientName: string;
    clientId: string;
    id: number;
    role: string;
    experience: string;
    generatedCode: string;
    requiredSkills: string;
    minCtc: number;
    maxCtc: number;
    cpstatus: string;
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
