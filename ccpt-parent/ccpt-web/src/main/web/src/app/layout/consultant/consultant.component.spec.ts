import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConsultantComponent } from "./consultant.component";
import { ConsultantRoutingModule } from "./consultant-routing.module";

describe("ChartsComponent", () => {
  let component: ConsultantComponent;
  let fixture: ComponentFixture<ConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ConsultantRoutingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
