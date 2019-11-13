import { ConsultantStatusModule } from "./consultant-status.module";

describe("ChartsModule", () => {
  let consultantStatusModule: ConsultantStatusModule;

  beforeEach(() => {
    consultantStatusModule = new ConsultantStatusModule();
  });

  it("should create an instance", () => {
    expect(consultantStatusModule).toBeTruthy();
  });
});
