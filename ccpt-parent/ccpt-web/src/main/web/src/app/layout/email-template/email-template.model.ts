export interface EmailTemplateModel {
    id: string;
    type: string;
    subject: string;
    description: string;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}