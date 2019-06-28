export interface MessageTemplateModel {
    id: string;
    type: string;
    description: string;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}