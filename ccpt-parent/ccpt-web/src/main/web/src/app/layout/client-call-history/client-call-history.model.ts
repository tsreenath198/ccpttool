import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ClientCallHistoryModel {
    calledBy: string;
    cpId: string;
    description: string;
    id: number;
    calledDate: string;
    properties: Array<AdditionalPropertiesModel>;
}
