import { Action } from '@ngrx/store';

export enum TaskApiActionTypes {
  LoadTaskApis = '[TaskApi] Load TaskApis',
  
  
}

export class LoadTaskApis implements Action {
  readonly type = TaskApiActionTypes.LoadTaskApis;
}


export type TaskApiActions = LoadTaskApis;
