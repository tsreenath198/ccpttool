import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ClientModel {
  id: number;
  name: string;
  industry: string;
  phone: string;
  email: string;
  address: string;
  billingAddress: string;
  guaranteePeriod: string;
  creditPeriod: string;
  serviceCharge: string;
  servicetaxNo: string;
  gst: string;
  description: string;
  website: string;
  files: Array<any>;
  clientContacts: Array<ClientContactsModel>;
  properties: Array<AdditionalPropertiesModel>;
}
export class ActionsList {
  actions = [
    { key: 'Edit', value: 'Edit' },
    { key: 'File Upload', value: 'File Upload' },
    { key: 'Delete', value: 'Delete' },
    { key: 'Close', value: 'Close' }
  ];
}
export interface ClientContactsModel {
  salutation: string;
  email: string;
  fullname: string;
  phone: string;
  // properties: Array<AdditionalPropertiesModel>;
}
