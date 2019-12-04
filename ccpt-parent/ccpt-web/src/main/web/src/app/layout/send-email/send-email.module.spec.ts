import { SendEmailModule } from "./send-email.module";

describe("ChartsModule", () => {
  let sendEmailModule: SendEmailModule;

  beforeEach(() => {
    sendEmailModule = new SendEmailModule();
  });

  it("should create an instance", () => {
    expect(sendEmailModule).toBeTruthy();
  });
});
