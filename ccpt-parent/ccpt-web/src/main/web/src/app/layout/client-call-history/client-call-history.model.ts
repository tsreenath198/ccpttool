import { ClientModel } from '../client/client.model';
import { ClientPositionModel } from '../client-position/client-position.model';

export interface ClientCallHistoryModel {
    cpId: string;
    description: string;
    id: number;
    calledDate: string;
}
