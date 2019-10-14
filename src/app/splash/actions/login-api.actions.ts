import { createAction, props, union } from '@ngrx/store';
import { User } from '../models/user.model';

export const loginSuccess = createAction('[Login/API] Login Api Success', props<{ user: User }>());

export const loginFailure = createAction('[Login/API] Login Api Failure', props<{ error: any }>());

const all = union({ loginSuccess, loginFailure });

export type LoginApiActionsUnion = typeof all;
