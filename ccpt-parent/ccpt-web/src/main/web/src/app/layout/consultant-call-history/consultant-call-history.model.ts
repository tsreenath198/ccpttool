import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ConsultantCallHistoryModel {
    calledBy: number;
    consultantId: number;
    description: string;
    calledDate: string;
    clientPositionId: number;
    id: number;
    properties: Array<AdditionalPropertiesModel>;
}
