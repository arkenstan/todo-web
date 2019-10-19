import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Task } from '../models/task.model';
import { TaskApiActions } from '../actions';

export interface State extends EntityState<Task> {
	selectedTaskId: string;
}

export function selectTaskId(a: Task): string {
	return a.taskId;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
	selectId: selectTaskId,
	sortComparer: false
});

export const initialState: State = adapter.getInitialState({ selectedTaskId: null });

const featureReducer = createReducer(
	initialState,
	on(TaskApiActions.createTaskSuccess, (state, { task }) => {
		return adapter.addOne(task, state);
	}),
	on(TaskApiActions.updateTaskSuccess, (state, { task }) => {
		return adapter.upsertOne(task, state);
	}),
	on(TaskApiActions.loadTasksSuccess, (state, { tasks }) => {
		return adapter.addMany(tasks, state);
	}),
	on(TaskApiActions.deleteTaskSuccess, (state, { task }) => {
		return adapter.removeOne(task.taskId, state);
	})
);

export function reducer(state: State | undefined, action: Action) {
	return featureReducer(state, action);
}

export const getSelectedTask = (state: State) => state.selectedTaskId;

const { selectEntities, selectIds, selectTotal } = adapter.getSelectors();
export const getTasks = selectEntities;
export const getTaskIds = selectIds;
export const getTaskTotal = selectTotal;
