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
// {
//     "activeFlag": "string",
//     "address": "string",
//     "createdDate": "2019-05-08T05:51:08.017Z",
//     "dob": "2019-05-08T05:51:08.017Z",
//     "email": "string",
//     "fullname": "string",
//     "gender": "string",
//     "id": 0,
//     "phone": "string",
//     "role": "string",
//     "updatedDate": "2019-05-08T05:51:08.017Z"
//   }
export class Roles{
    roles = ["Junior Recruiter","Senior Recruiter"];
}