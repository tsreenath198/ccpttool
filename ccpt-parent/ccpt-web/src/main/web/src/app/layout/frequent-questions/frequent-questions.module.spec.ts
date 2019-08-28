import { FrequentQuestionsModule } from './frequent-questions.module';

describe('ChartsModule', () => {
    let frequentQuestionsModule: FrequentQuestionsModule;

    beforeEach(() => {
        frequentQuestionsModule = new FrequentQuestionsModule();
    });

    it('should create an instance', () => {
        expect(frequentQuestionsModule).toBeTruthy();
    });
});
