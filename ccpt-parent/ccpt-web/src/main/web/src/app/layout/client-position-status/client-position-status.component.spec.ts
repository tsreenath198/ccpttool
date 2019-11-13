import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClientPositionStatusComponent } from "./client-position-status.component";
import { ClientPositionStatusModule } from "./client-position-status.module";

describe("ChartsComponent", () => {
  let component: ClientPositionStatusComponent;
  let fixture: ComponentFixture<ClientPositionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClientPositionStatusModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPositionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
