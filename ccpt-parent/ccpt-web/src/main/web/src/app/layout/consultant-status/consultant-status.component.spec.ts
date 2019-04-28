import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultantStatusComponent } from './consultant-status.component';
import { ConsultantStatusModule } from './consultant-status.module';



describe('ChartsComponent', () => {
  let component: ConsultantStatusComponent;
  let fixture: ComponentFixture<ConsultantStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultantStatusModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
