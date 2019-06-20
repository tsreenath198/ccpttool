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
    clientContacts: Array<ClientContactsModel>;
    properties: Array<AdditionalPropertiesModel>;

}
export interface ClientContactsModel {
      email: string;
      fullname: string;
      phone: string;
      // properties: Array<AdditionalPropertiesModel>;
}

