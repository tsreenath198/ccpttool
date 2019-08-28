import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrequentQuestionsModule } from './frequent-questions.module';
import { FrequentQuestionsComponent } from './frequent-questions.component';



describe('ChartsComponent', () => {
  let component: FrequentQuestionsComponent;
  let fixture: ComponentFixture<FrequentQuestionsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FrequentQuestionsModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
