export interface ClientModel {
    id: number;
    name: string;
    industry: string;
    phone: string;
    email: string;
    address: string;
    billingAddress: string;
    guaranteePeriod: number;
    creditPeriod: number;
    serviceCharge: string;
    servicetaxNo: string;
    gst: string;
    clientContacts: Array<ClientContactsModel>;

}
export interface ClientContactsModel {
      email: string;
      fullname: string;
      phone: string;

}
