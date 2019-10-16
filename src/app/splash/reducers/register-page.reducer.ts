import { Action, createReducer, on } from '@ngrx/store';
import { RegisterPageActions, RegisterApiActions } from '../actions';

export const registerPageFeatureKey = 'registerPage';

export interface State {
  error: any | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

const registerPageReducer = createReducer(
  initialState,
  on(RegisterPageActions.register, state => ({ ...state, pending: true, error: null })),
  on(RegisterApiActions.registerSuccess, state => ({ ...state, pending: false })),
  on(RegisterApiActions.registerFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return registerPageReducer(state, action);
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
