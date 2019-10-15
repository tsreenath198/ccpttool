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
  contactPersonDesignation:string;
  contactPersonName:string;
  website: string;
  files: Array<any>;
  clientContacts: Array<ClientContactModel>;
  properties: Array<AdditionalPropertiesModel>;
}
export interface ClientContactModel {
  salutation: string;
  email: string;
  fullname: string;
  phone: string;
  // properties: Array<AdditionalPropertiesModel>;
}
