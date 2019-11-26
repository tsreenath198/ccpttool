import { IndustryTypeModule } from "./industry-type.module";

describe("ChartsModule", () => {
  let industryTypeModule: IndustryTypeModule;

  beforeEach(() => {
    industryTypeModule = new IndustryTypeModule();
  });

  it("should create an instance", () => {
    expect(industryTypeModule).toBeTruthy();
  });
});
