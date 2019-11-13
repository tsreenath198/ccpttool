import { MessageTemplateModule } from "./message-template.module";

describe("ChartsModule", () => {
  let messageTemplateModule: MessageTemplateModule;

  beforeEach(() => {
    messageTemplateModule = new MessageTemplateModule();
  });

  it("should create an instance", () => {
    expect(messageTemplateModule).toBeTruthy();
  });
});
