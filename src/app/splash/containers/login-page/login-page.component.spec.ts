import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashModule } from '@app/splash/splash.module';
import { LoginFormComponent } from '@app/splash/components/login-form/login-form.component';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SplashModule],
      declarations: [LoginFormComponent, LoginPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
