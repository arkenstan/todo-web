import { Action } from '@ngrx/store';

export enum RegisterPageActionTypes {
  LoadRegisterPages = '[RegisterPage] Load RegisterPages',
  
  
}

export class LoadRegisterPages implements Action {
  readonly type = RegisterPageActionTypes.LoadRegisterPages;
}


export type RegisterPageActions = LoadRegisterPages;
