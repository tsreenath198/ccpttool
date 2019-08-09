export interface ClientpositionStatusModel{
    description: string;
    code: string;
    statusType:string;
    id: number;
}
export class ActionsList {
    actions = [{key: 'Edit' , value:'Edit'}, {key: 'Delete' , value:'Delete'}, {key: 'Close' , value:'Close'}];
}