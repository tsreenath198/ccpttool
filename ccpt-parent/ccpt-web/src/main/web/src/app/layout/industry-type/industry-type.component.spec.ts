import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndustryTypeComponent } from './industry-type.component';
import { IndustryTypeModule } from './industry-type.module';




describe('ChartsComponent', () => {
  let component: IndustryTypeComponent;
  let fixture: ComponentFixture<IndustryTypeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          IndustryTypeModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
