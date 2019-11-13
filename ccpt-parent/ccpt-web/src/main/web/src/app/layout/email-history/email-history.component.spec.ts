import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmailHistoryComponent } from "./email-history.component";
import { EmailHistoryModule } from "./email-history.module";

describe("ChartsComponent", () => {
  let component: EmailHistoryComponent;
  let fixture: ComponentFixture<EmailHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        EmailHistoryModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
