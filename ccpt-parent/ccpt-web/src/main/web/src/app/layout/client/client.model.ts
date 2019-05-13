export interface ClientModel{
    name:string,
    address:string,
    clientContacts:Array<ClientContactsModel>
 
}
export interface ClientContactsModel{
      email: string,
      fullname: string,
      phone: string
 
}