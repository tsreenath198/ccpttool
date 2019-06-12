import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ConsultantCallHistoryModel {
    calledBy: number;
    consultantId: number;
    description: string;
    calledDate: string;
    clientPositionCode: string;
    id: number;
    properties: Array<AdditionalPropertiesModel>;
}
