import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConsultantCallHistoryComponent } from './consultant-call-history.component';
import { ConsultantCallHistoryModule } from './consultant-call-history.module';

describe('ChartsComponent', () => {
  let component: ConsultantCallHistoryComponent;
  let fixture: ComponentFixture<ConsultantCallHistoryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultantCallHistoryModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantCallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
