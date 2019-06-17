export interface ActionModel {
    id:number;

    trash:boolean;
    shortList:boolean;
    sendSMS:boolean;
    sendMail:boolean;
    upload:boolean;
    download:boolean;

    trashContent:any;
    shortListContent:any;
    sendMailcontent:any;
    sendMailContent:any;
    uploadcontent:any;
    downloadContent:any;
}