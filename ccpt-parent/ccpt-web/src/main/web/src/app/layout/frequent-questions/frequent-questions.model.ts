import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

export interface FAQModel {
    creatorId: number;
    caId: number;
    skills: string;
    question: Array<any>;
    description: string;
    response: string;
    properties: Array<AdditionalPropertiesModel>;
    id: number;
}