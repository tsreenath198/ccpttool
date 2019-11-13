import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface SearchBankModel {
  id: string;
  profile: string;
  logicOr: string;
  logicAnd: string;
  refine1: string;
  refine2: string;
  functionalArea: string;
  properties: Array<AdditionalPropertiesModel>;
}
