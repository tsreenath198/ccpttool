import { ClientModel } from '../client/client.model';
import { ClientPositionModel } from '../client-position/client-position.model';

export interface ClientCallHistoryModel {
    client: ClientModel;
    clientPositionCode: ClientPositionModel;
    notes: string;
    id: number;
    calledDate: string;
}
