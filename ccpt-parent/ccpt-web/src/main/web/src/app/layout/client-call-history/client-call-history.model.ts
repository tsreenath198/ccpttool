import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

export interface ClientCallHistoryModel {
  calledBy: number;
  cpId: number;
  description: string;
  id: number;
  calledDate: string;
  properties: Array<AdditionalPropertiesModel>;
}
export class ActionsList {
  actions = [
    { key: "Edit", value: "Edit" },
    { key: "Delete", value: "Delete" },
    { key: "Close", value: "Close" }
  ];
}
