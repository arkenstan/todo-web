import { Action, createAction, props, union } from '@ngrx/store';
import { Task } from '../models/task.model';

export const loadTasksSuccess = createAction(
	'[Task/API] Load Task Success',
	props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
	'[Task/API] Load Task Failure',
	props<{ error: any }>()
);

export const createTaskSuccess = createAction(
	'[Task/API] Create Task Success',
	props<{ task: Task }>()
);
export const createTaskFailure = createAction(
	'[Task/API] Create Task Failure',
	props<{ error: any }>()
);

export const updateTaskSuccess = createAction(
	'[Task/API] Update Task Success',
	props<{ task: Task }>()
);
export const updateTaskFailure = createAction(
	'[Task/API] Update Task Failure',
	props<{ error: any }>()
);

export const deleteTaskSuccess = createAction(
	'[Task/API] Delete Task Success',
	props<{ task: Task }>()
);
export const deleteTaskFailure = createAction(
	'[Task/API] Delete Task Failure',
	props<{ error: any }>()
);

const all = union({
	loadTasksSuccess,
	loadTasksFailure,
	updateTaskSuccess,
	updateTaskFailure,
	createTaskSuccess,
	createTaskFailure,
	deleteTaskSuccess,
	deleteTaskFailure
});

export type TaskApiActionsUnion = typeof all;
