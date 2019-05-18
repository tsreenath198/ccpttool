export interface ClientModel{
    id:number,
    name:string,
    address:string,
    clientContacts:Array<ClientContactsModel>
 
}
export interface ClientContactsModel{
      email: string,
      fullname: string,
      phone: string
 
}