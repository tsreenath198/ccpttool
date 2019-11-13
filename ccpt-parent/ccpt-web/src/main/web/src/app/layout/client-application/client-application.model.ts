import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface ClientApplicationModel {
  caStatus: string;
  cpId: number;
  consultantId: number;
  interviewDate: string;
  interviewLocation: string;
  interviewTime: string;
  id: number;
  description: string;
  creatorId: number;
  interviewMode: string;
  sentOn: string;
  files: Array<any>;
  onlineId: string;
  properties: Array<AdditionalPropertiesModel>;
}
export class SendEmailModel {
  toEmails: string;
  subject: string;
  body: any;
  target: any;
  cc: string;
  bcc: string;
}
export class SendSmsModel {
  contactNumbers: string;
  message: string;
  target: string;
}
export class FAQModel {
  questions: Array<string>;
}
