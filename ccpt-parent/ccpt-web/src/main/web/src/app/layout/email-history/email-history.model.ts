import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface EmailHistoryModel {
  id: string;
  toEmails:string;
  cc:string;
  bcc:string;
  subject:string;
  body:string;
  properties: Array<AdditionalPropertiesModel>;
}
