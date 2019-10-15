import { createAction, props, union } from '@ngrx/store';
import { User } from '../models/user.model';

export const loginSuccess = createAction('[Login/API] Login Api Success', props<{ user: User }>());

export const loginFailure = createAction('[Login/API] Login Api Failure', props<{ error: any }>());

export const loginRedirect = createAction('[Login/API] Login Redirect');

const all = union({ loginSuccess, loginFailure, loginRedirect });

export type LoginApiActionsUnion = typeof all;
