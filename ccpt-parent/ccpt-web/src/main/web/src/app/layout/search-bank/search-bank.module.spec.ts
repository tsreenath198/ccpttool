import { SearchBankModule } from './search-bank.module';

describe('ChartsModule', () => {
    let searchBankModule: SearchBankModule;

    beforeEach(() => {
        searchBankModule = new SearchBankModule();
    });

    it('should create an instance', () => {
        expect(searchBankModule).toBeTruthy();
    });
});
