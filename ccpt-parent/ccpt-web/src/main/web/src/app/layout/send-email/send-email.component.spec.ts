import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SendEmailModule } from "./send-email.module";
import { SendEmailComponent } from "./send-email.component";

describe("ChartsComponent", () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SendEmailModule, RouterTestingModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
