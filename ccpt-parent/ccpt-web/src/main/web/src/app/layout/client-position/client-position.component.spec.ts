import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPositionModule } from './client-position.module';
import { ClientPositionComponent } from './client-position.component';



describe('ChartsComponent', () => {
  let component: ClientPositionComponent;
  let fixture: ComponentFixture<ClientPositionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ClientPositionModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
