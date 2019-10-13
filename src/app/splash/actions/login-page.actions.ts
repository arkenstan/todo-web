import { createAction, props, union } from '@ngrx/store';
import { LoginCredentials } from '../models/User.model';

export const login = createAction('[Login/Page] Login', props<{ payload: LoginCredentials }>());

const all = union({ login });

export type LoginPageActionsUnion = typeof all;
