export interface RecruiterModel{
    id:number,
    fullname:string,
    dob:string,
    gender:string,
    role:string,
    phone:string,
    email:string,
    address:string
}

export class Roles{
    roles = ["Junior Recruiter","Senior Recruiter"];
}