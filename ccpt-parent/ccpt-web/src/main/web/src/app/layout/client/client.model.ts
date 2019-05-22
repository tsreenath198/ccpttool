export interface ClientModel{
    id:number,
    name:string,
    industry:string,
    phone:string,
    address:string,
    billingAddress:string,
    guaranteePeriod:number,
    creditPeriod:number,
    serviceCharge:string,
    servicetaxNo:string,
    clientContacts:Array<ClientContactsModel>
 
}
export interface ClientContactsModel{
      email: string,
      fullname: string,
      phone: string
 
}