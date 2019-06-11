import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface OtherContactsModel{
    id:string,
    name:string,
    email:string,
    phone:string,
    notes:string,
    properties: Array<AdditionalPropertiesModel>,
}