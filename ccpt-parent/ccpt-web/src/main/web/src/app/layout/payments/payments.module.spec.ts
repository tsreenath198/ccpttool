import { PaymentsModule } from './payments.module';

describe('ChartsModule', () => {
    let paymentsModule: PaymentsModule;

    beforeEach(() => {
        paymentsModule = new PaymentsModule();
    });

    it('should create an instance', () => {
        expect(paymentsModule).toBeTruthy();
    });
});
