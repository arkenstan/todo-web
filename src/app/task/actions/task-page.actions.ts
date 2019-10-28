import { Action, createAction, props, union } from '@ngrx/store';
import { Task, CreateTask, UpdateTask } from '../models/task.model';

export const loadTasks = createAction('[Task/Page] Load Task');
export const updateTask = createAction(
  '[Task/Page] Update Task',
  props<{ taskId: string; task: UpdateTask }>()
);
export const removeTask = createAction('[Task/Page] Remove Task', props<{ taskId: string }>());

const all = union({ loadTasks, updateTask, removeTask });

export type TaskPageActionsUnion = typeof all;
