import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface MessageHistoryModel {
  id: string;
  contactNumbers: string;
  message: string;
  properties: Array<AdditionalPropertiesModel>;
}
