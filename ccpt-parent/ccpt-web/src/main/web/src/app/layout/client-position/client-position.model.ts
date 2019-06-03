export interface ClientPositionModel {
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

export interface SendSmsModel {
    contactNumbers: Array<string>;
    message: string;
}

export interface SendEmailModel {
    to: Array<string>;
    subject: string;
    body: string;
}
