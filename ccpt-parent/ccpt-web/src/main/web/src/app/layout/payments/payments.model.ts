import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface PaymentsModel {
  id: string;
  annualPackage: string;
  billingAddress: string;
  branchHeadName: string;
  branchLocation: string;
  candidateName: string;
  companyGstNum: string;
  companyName: string;
  companyWebsite: string;
  contactPerson: string;
  contactPersonDesignation: string;
  contactPersonEmail: string;
  contactPersonNum: string;
  creditPeriod: string;
  description: string;
  designation: string;
  gauranteePeriod: string;
  invoiceDate: string;
  joiningDate: string;
  phone: string;
  serviceCharge: string;
  properties: Array<AdditionalPropertiesModel>;
  files: any;
  paidOn: string;
  paidStatus: string;
}
export class ActionsList {
  actions = [{ key: 'Edit', value: 'Edit' }, { key: 'Delete', value: 'Delete' }, { key: 'Close', value: 'Close' }];
}
