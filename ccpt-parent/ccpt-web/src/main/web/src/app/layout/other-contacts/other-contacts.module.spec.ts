import { OtherContactsModule } from "./other-contacts.module";

describe("ChartsModule", () => {
  let otherContactsModule: OtherContactsModule;

  beforeEach(() => {
    otherContactsModule = new OtherContactsModule();
  });

  it("should create an instance", () => {
    expect(otherContactsModule).toBeTruthy();
  });
});
