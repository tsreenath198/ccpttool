import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface RecruiterModel {
    id: number;
    fullname: string;
    aliasName: string;
    dob: string;
    gender: string;
    role: string;
    phone: string;
    email: string;
    address: string;
    description: string;
    leadEmail: string;
    properties: Array<AdditionalPropertiesModel>;
}
export class Roles {
    roles = ['Junior Recruiter', 'Senior Recruiter'];
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}
