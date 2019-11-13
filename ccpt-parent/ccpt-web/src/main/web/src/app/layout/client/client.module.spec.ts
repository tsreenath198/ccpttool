import { ClientModule } from "./client.module";

describe("ChartsModule", () => {
  let clientModule: ClientModule;

  beforeEach(() => {
    clientModule = new ClientModule();
  });

  it("should create an instance", () => {
    expect(clientModule).toBeTruthy();
  });
});
