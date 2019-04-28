import { ConsultantModule } from './consultant.module';

describe('ChartsModule', () => {
    let consultantModule: ConsultantModule;

    beforeEach(() => {
        consultantModule = new ConsultantModule();
    });

    it('should create an instance', () => {
        expect(consultantModule).toBeTruthy();
    });
});
