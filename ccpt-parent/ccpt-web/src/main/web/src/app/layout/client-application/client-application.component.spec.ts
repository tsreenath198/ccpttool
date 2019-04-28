import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientApplicationComponent } from './client-application.component';
import { ClientApplicationModule } from './client-application.module';



describe('ChartsComponent', () => {
  let component: ClientApplicationComponent;
  let fixture: ComponentFixture<ClientApplicationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClientApplicationModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
