import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientApplicationStatusComponent } from './client-application-status.component';
import { ClientApplicationStatusModule } from './client-application-status.module';



describe('ChartsComponent', () => {
  let component: ClientApplicationStatusComponent;
  let fixture: ComponentFixture<ClientApplicationStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClientApplicationStatusModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
