import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import * as fromSplash from '@app/splash/reducers';
import * as fromLoginApi from '@app/splash/reducers/login-api.reducer';
import * as fromLoginPage from '@app/splash/reducers/login-page.reducer';
import * as fromRegisterPage from '@app/splash/reducers/register-page.reducer';
import { SharedModule } from '@shared/shared.module';
import { RegisterFormComponent } from '@app/splash/components/register-form/register-form.component';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
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
