import { MessageHistoryModule } from './message-history.module';

describe('ChartsModule', () => {
    let messageHistoryModule: MessageHistoryModule;

    beforeEach(() => {
        messageHistoryModule = new MessageHistoryModule();
    });

    it('should create an instance', () => {
        expect(messageHistoryModule).toBeTruthy();
    });
});
