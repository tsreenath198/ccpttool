import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBankComponent } from './search-bank.component';
import { SearchBankModule } from './search-bank.module';




describe('ChartsComponent', () => {
  let component: SearchBankComponent;
  let fixture: ComponentFixture<SearchBankComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          SearchBankModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
