import { createAction, props, union } from "@ngrx/store";
import { LoginCredentials } from "../models/user.model";

export const login = createAction(
  "[Login/Page] Login",
  props<{ payload: LoginCredentials }>()
);

export const logout = createAction("[Login/Page] Logout");

const all = union({ login, logout });

export type LoginPageActionsUnion = typeof all;
