import { ClientApplicationModule } from './client-application.module';

describe('ChartsModule', () => {
    let clientApplicationModule: ClientApplicationModule;

    beforeEach(() => {
        clientApplicationModule = new ClientApplicationModule();
    });

    it('should create an instance', () => {
        expect(clientApplicationModule).toBeTruthy();
    });
});
