import { Action } from '@ngrx/store';

export enum RegisterApiActionTypes {
  LoadRegisterApis = '[RegisterApi] Load RegisterApis',
  
  
}

export class LoadRegisterApis implements Action {
  readonly type = RegisterApiActionTypes.LoadRegisterApis;
}


export type RegisterApiActions = LoadRegisterApis;
