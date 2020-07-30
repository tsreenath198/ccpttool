import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RecruiterComponent } from "./recruiter.component";
import { RecruiterModule } from "./recruiter.module";
import {
  HttpClientService,
  ToastrCustomService
} from "src/app/shared/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { inject } from "@angular/core";
import { AdditionalPropertiesModel } from "src/app/additional-properties.model";

fdescribe("RecruitersComponent", () => {
  let component: RecruiterComponent;
  let fixture: ComponentFixture<RecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RecruiterModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        HttpModule
      ],
      providers: [
        RecruiterComponent,
        HttpClientService,
        ToastrCustomService,
        NgbModal,
        { provide: XHRBackend, useClass: MockBackend }
      ]
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
  it("should call the init method", () => {
    component.init();
    expect(component.model.phone).toEqual("+91");
  });
  fit("should call the propertiesListIncrement method with decrease value", () => {
    const eventProp = {};
    eventProp["id"] = "decrease";
    component.model.properties.push(<AdditionalPropertiesModel>{
      id: 1,
      name: "name",
      value: "value"
    });
    let propLength = component.model.properties.length;
    component.propertiesListIncrement(eventProp, 0);
    expect(component.model.properties.length).toBeLessThan(propLength);
  });
});
