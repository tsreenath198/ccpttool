import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface RecruiterModel {
    id: number;
    fullname: string;
    dob: string;
    gender: string;
    role: string;
    phone: string;
    email: string;
    address: string;
    properties: Array<AdditionalPropertiesModel>;
}
export class Roles {
    roles = ['Junior Recruiter', 'Senior Recruiter'];
}
