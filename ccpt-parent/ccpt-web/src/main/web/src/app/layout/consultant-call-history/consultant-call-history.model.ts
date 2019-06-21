import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ConsultantCallHistoryModel {
    calledBy: number;
    consultantId: number;
    description: string;
    calledDate: string;
    cpId: number;
    id: number;
    properties: Array<AdditionalPropertiesModel>;
}