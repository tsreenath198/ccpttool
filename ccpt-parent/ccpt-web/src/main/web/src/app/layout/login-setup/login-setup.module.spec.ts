import { LoginSetupModule } from './login-setup.module';

describe('ChartsModule', () => {
    let loginSetupModule: LoginSetupModule;

    beforeEach(() => {
        loginSetupModule = new LoginSetupModule();
    });

    it('should create an instance', () => {
        expect(loginSetupModule).toBeTruthy();
    });
});
