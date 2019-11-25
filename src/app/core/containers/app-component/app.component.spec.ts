import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, select } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material/material.module';
import { AppComponent } from './app.component';
import * as fromSplash from '@app/splash/reducers';
import * as fromLoginApi from '@app/splash/reducers/login-api.reducer';
import * as fromLoginPage from '@app/splash/reducers/login-page.reducer';
import * as fromRegisterPage from '@app/splash/reducers/register-page.reducer';
import * as fromRoot from '@app/reducers';

describe('AppComponent', () => {
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
      imports: [RouterTestingModule, SharedModule, RouterModule, MaterialModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
