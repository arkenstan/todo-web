import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromRoot from '@app/reducers';
import * as fromLoginPage from './login-page.reducer';
import * as fromLoginApi from './login-api.reducer';
import * as fromRegisterPage from './register-page.reducer';
import { LoginApiActions } from '../actions';

export const splashFeatureKey = 'splash';

export interface SplashState {
  loginApi: fromLoginApi.State;
  loginPage: fromLoginPage.State;
  registerPage: fromRegisterPage.State;
}

export interface State extends fromRoot.State {
  splash: SplashState;
}

export const reducers: ActionReducerMap<SplashState, LoginApiActions.LoginApiActionsUnion> = {
  loginApi: fromLoginApi.reducer,
  loginPage: fromLoginPage.reducer,
  registerPage: fromRegisterPage.reducer
};

export const selectSplashState = createFeatureSelector<State, SplashState>(splashFeatureKey);

export const selectSplashLoginApi = createSelector(
  selectSplashState,
  (state: SplashState) => state.loginApi
);
export const getUser = createSelector(
  selectSplashLoginApi,
  fromLoginApi.getUser
);
export const getLoggedIn = createSelector(
  getUser,
  user => !!user
);

export const selectSplashLoginPage = createSelector(
  selectSplashState,
  (state: SplashState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectSplashLoginPage,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectSplashLoginPage,
  fromLoginPage.getPending
);

export const selectSplashRegisterPage = createSelector(
  selectSplashState,
  (state: SplashState) => state.registerPage
);
export const getRegisterPageError = createSelector(
  selectSplashRegisterPage,
  fromRegisterPage.getError
);
export const getRegisterPagePending = createSelector(
  selectSplashRegisterPage,
  fromRegisterPage.getPending
);
