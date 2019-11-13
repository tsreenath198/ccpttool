import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RecruiterComponent } from "./recruiter.component";
import { RecruiterModule } from "./recruiter.module";

describe("ChartsComponent", () => {
  let component: RecruiterComponent;
  let fixture: ComponentFixture<RecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RecruiterModule, RouterTestingModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
