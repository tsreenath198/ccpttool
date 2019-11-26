import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface IndustryTypeModel {
  id: string;
  name: string;
  description: string;
  properties: Array<AdditionalPropertiesModel>;
}
