import { Action, createReducer, on } from "@ngrx/store";
import { LoginPageActions, LoginApiActions } from "../actions";

export const loginPageFeatureKey = "loginPage";
export interface State {
  error: any | null;
  pending: boolean | false;
}
export const initialState: State = {
  error: null,
  pending: false
};

const loginPageReducer = createReducer(
  initialState,
  on(LoginPageActions.login, state => ({
    ...state,
    pending: true,
    error: null
  })),
  on(LoginApiActions.loginFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  })),
  on(LoginApiActions.loginSuccess, state => ({
    ...state,
    pending: false,
    error: null
  })),
  on(LoginPageActions.logout, state => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return loginPageReducer(state, action);
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
