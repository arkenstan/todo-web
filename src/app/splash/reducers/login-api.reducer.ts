import { createReducer, on } from '@ngrx/store';
import { LoginApiActions } from '../actions';
import { User } from '../models/User.model';

export const loginApiFeatureKey = 'loginApi';

export interface State {
	user: User | null;
}

export const initialState: State = {
	user: null
};

const loginApiReducer = createReducer(
	initialState,
	on(LoginApiActions.loginSuccess, (state) => ({ ...state, user: state.user }))
);

export function reducer(state, action): State {
	return loginApiReducer(state, action);
}

export const getUser = (state: State) => state.user;
