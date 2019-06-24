import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface ClientApplicationModel {
    caStatus: string;
    cpId: string;
    consultantId: string;
    interviewDate: string;
    interviewLocation: string;
    interviewTime: string;
    id: number;
    description: string;
    creatorId: string;
    interviewMode: string;
    sentOn: string;
    properties: Array<AdditionalPropertiesModel>;
}
