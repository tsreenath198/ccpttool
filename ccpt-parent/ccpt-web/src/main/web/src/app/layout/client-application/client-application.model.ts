import { ClientPositionModel } from "../client-position/client-position.model";
import { ConsultantModel } from "../consultant/consultant.model";
import { ClientApplicationStatusModel } from "../client-application-status/client-application-status.model";

export interface ClientApplicationModel {
    caStatus: string;
    cpId: string;
    consultantId: string;
    notes: string;
    interviewDate: string;
    interviewLocation: string;
    interviewTime: string;
    id: number;
    description: string;
}
