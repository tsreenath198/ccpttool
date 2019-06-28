import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface UsersModel {
    username: string;
    password: string;
    description: string;
    role: string;
    properties: Array<AdditionalPropertiesModel>;
    id: number;
}
export class UserRoles {
    roles = ['User', 'Admin', 'Manager'];
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}