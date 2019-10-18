import { Action } from '@ngrx/store';

export enum TaskPageActionTypes {
  LoadTaskPages = '[TaskPage] Load TaskPages',
  
  
}

export class LoadTaskPages implements Action {
  readonly type = TaskPageActionTypes.LoadTaskPages;
}


export type TaskPageActions = LoadTaskPages;
