import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OtherContactsComponent } from "./other-contacts.component";
import { OtherContactsModule } from "./other-contacts.module";

describe("ChartsComponent", () => {
  let component: OtherContactsComponent;
  let fixture: ComponentFixture<OtherContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OtherContactsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
