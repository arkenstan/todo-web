import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashModule } from '@app/splash/splash.module';
import { RegisterFormComponent } from '@app/splash/components/register-form/register-form.component';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SplashModule],
      declarations: [RegisterFormComponent, RegisterPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
