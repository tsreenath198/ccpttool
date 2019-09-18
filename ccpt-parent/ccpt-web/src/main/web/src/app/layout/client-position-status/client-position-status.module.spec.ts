import { ClientPositionStatusModule } from './client-position-status.module';

describe('ChartsModule', () => {
    let clientPositionStatusModule: ClientPositionStatusModule;

    beforeEach(() => {
        clientPositionStatusModule = new ClientPositionStatusModule();
    });

    it('should create an instance', () => {
        expect(clientPositionStatusModule).toBeTruthy();
    });
});
