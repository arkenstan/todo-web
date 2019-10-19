import { Action, createAction, props, union } from '@ngrx/store';
import { Task, CreateTask } from '../models/task.model';

export const loadTasks = createAction('[Task/Page] Load Task');
export const createTasks = createAction('[Task/Page] Create Task', props<{ task: CreateTask }>());
export const updateTask = createAction(
	'[Task/Page] Update Task',
	props<{ taskId: string; task: Task }>()
);
export const removeTask = createAction('[Task/Page] Remove Task', props<{ taskId: string }>());
export const updateTaskStatus = createAction(
	'[Task/Page] Update Task Status',
	props<{ taskId: string; status: boolean }>()
);

const all = union({ loadTasks, createTasks, updateTask, removeTask, updateTaskStatus });

export type TaskPageActionsUnion = typeof all;
