import { createAction, props, union } from '@ngrx/store';
import { RegisterData } from '../models/user.model';

export const register = createAction(
  '[Register/Page] Register',
  props<{ payload: RegisterData }>()
);

const all = union({ register });

export type RegisterPageActionsUnion = typeof all;
