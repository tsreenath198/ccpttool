import { ConsultantStatusModel } from "../consultant-status/consultant-status.model";

export interface ConsultantModel {
    fullname: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    currentCompany: string;
    currentLocation: string;
    currentCTC: number;
    expectedCTC: number;
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
    yearsInCurrentJob: number;
    monthsInCurrentJob: number;
    noticePeriod: number;
    highestEducation: string;
}


