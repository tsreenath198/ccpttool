export interface ConsultantStatusModel {
  description: string;
  code: string;
  statusType: string;
  id: string;
  ordr: number;
}
export class ActionsList {
  actions = [
    { key: "Edit", value: "Edit" },
    { key: "Delete", value: "Delete" },
    { key: "Close", value: "Close" }
  ];
}
