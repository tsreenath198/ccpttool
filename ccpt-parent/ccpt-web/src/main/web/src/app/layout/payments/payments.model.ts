import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface PaymentsModel {
    id: string;
    annualPackage: number;
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
    creditPeriod: number;
    description: string;
    designation: string;
    gauranteePeriod: number;
    invoiceDate: string;
    joiningDate: string;
    phone: string;
    serviceCharge: number;
    properties: Array<AdditionalPropertiesModel>;
}
