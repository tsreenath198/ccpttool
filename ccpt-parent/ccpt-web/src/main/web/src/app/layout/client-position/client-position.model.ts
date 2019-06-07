export interface ClientPositionModel {
    assignedTo: string;
    clientName: string;
    clientId: number;
    id: number;
    role: string;
    experience: string;
    generatedCode: string;
    requiredSkills: string;
    minCtc: number;
    maxCtc: number;
    cpstatus: string;
    closedBy: string;
    description: string;
    jobCode: string;
    location: string;
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
