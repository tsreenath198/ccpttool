import { EmailHistoryModule } from "./email-history.module";

describe("ChartsModule", () => {
  let emailHistoryModule: EmailHistoryModule;

  beforeEach(() => {
    emailHistoryModule = new EmailHistoryModule();
  });

  it("should create an instance", () => {
    expect(emailHistoryModule).toBeTruthy();
  });
});
