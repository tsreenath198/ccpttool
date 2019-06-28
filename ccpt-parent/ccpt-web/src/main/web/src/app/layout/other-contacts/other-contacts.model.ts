import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface OtherContactsModel{
    id:string,
    name:string,
    email:string,
    phone:string,
    description:string,
    properties: Array<AdditionalPropertiesModel>,
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}