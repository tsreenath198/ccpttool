import { ConsultantStatusModel } from "../consultant-status/consultant-status.model";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface ConsultantModel {
    fullname: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    currentCompany: string;
    currentLocation: string;
    currentCTC: string;
    expectedCTC: string;
    experienceMonths: string;
    experienceYrs: string;
    prefferedLocation: string;
    skills: string;
    qualification: string;
    passoutYear: number;
    cstatus: string;
    description: string;
    id: string;
    currentJobTitle: string;
    currentFunctionalArea: string;
    currentIndustry: string;
    yearsInCurrentJob: string;
    monthsInCurrentJob: string;
    noticePeriod: string;
    highestEducation: string;
    properties: Array<AdditionalPropertiesModel>;
}


