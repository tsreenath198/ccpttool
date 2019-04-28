import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSetupComponent } from './login-setup.component';
import { LoginSetupModule } from './login-setup.module';



describe('ChartsComponent', () => {
  let component: LoginSetupComponent;
  let fixture: ComponentFixture<LoginSetupComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          LoginSetupModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
