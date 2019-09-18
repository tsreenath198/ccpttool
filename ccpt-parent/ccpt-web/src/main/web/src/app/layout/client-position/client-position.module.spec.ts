import { ClientPositionModule } from './client-position.module';

describe('ChartsModule', () => {
    let clientPositionModule: ClientPositionModule;

    beforeEach(() => {
        clientPositionModule = new ClientPositionModule();
    });

    it('should create an instance', () => {
        expect(clientPositionModule).toBeTruthy();
    });
});
