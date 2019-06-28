export interface ConsultantStatusModel {
    description: string;
    code: string;
    id:string;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}