import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import * as fromSplash from '@app/splash/reducers';
import * as fromLoginApi from '@app/splash/reducers/login-api.reducer';
import * as fromLoginPage from '@app/splash/reducers/login-page.reducer';
import * as fromRegisterPage from '@app/splash/reducers/register-page.reducer';
import { SharedModule } from '@shared/shared.module';
import { LoginFormComponent } from '@app/splash/components/login-form/login-form.component';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: MockStore<fromSplash.State>;
  const initialState = {
    splash: {
      loginApi: {} as fromLoginApi.State,
      loginPage: {} as fromLoginPage.State,
      registerPage: {} as fromRegisterPage.State
    }
  } as fromSplash.State;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
      declarations: [LoginFormComponent, LoginPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Page container', () => {
    expect(component).toBeTruthy();
  });
});
