import { ClientApplicationStatusModule } from './client-application-status.module';

describe('ChartsModule', () => {
    let clientApplicationStatusModule: ClientApplicationStatusModule;

    beforeEach(() => {
        clientApplicationStatusModule = new ClientApplicationStatusModule();
    });

    it('should create an instance', () => {
        expect(clientApplicationStatusModule).toBeTruthy();
    });
});
