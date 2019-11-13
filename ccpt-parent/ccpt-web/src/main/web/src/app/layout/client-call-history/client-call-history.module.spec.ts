import { ClientCallHistoryModule } from "./client-call-history.module";

describe("ChartsModule", () => {
  let clientCallHistoryModule: ClientCallHistoryModule;

  beforeEach(() => {
    clientCallHistoryModule = new ClientCallHistoryModule();
  });

  it("should create an instance", () => {
    expect(clientCallHistoryModule).toBeTruthy();
  });
});
