import { Action, createAction, props, union } from '@ngrx/store';

export interface CreateTask {
  content: string;
}

export const createTask = createAction('[Task/Page] Create Task', props<{ task: CreateTask }>());

const all = union({ createTask });

export type ToolbarActions = typeof all;
