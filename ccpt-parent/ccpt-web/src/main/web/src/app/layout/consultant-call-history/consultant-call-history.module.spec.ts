import { ConsultantCallHistoryModule } from "./consultant-call-history.module";

describe("ChartsModule", () => {
  let consultantCallHistoryModule: ConsultantCallHistoryModule;

  beforeEach(() => {
    consultantCallHistoryModule = new ConsultantCallHistoryModule();
  });

  it("should create an instance", () => {
    expect(consultantCallHistoryModule).toBeTruthy();
  });
});
