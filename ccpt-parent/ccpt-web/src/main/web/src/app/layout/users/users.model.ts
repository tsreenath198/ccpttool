import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface UsersModel {
    username: string;
    password: string;
    description: string;
    role: string;
    properties: Array<AdditionalPropertiesModel>;
}
export class UserRoles {
    roles = ['User', 'Admin', 'Management'];
}