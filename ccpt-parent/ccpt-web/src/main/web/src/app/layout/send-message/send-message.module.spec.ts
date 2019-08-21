import { SendMessageModule } from './send-message.module';

describe('ChartsModule', () => {
    let sendMessageModule: SendMessageModule;

    beforeEach(() => {
        sendMessageModule = new SendMessageModule();
    });

    it('should create an instance', () => {
        expect(sendMessageModule).toBeTruthy();
    });
});
