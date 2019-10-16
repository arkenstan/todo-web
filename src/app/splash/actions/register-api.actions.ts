import { createAction, union, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const registerSuccess = createAction(
  '[Register/API] Register success',
  props<{ user: User }>()
);
export const registerFailure = createAction(
  '[Register/API] register failure',
  props<{ error: any }>()
);

const all = union({ registerSuccess, registerFailure });

export type RegisterApiActionsUnion = typeof all;
