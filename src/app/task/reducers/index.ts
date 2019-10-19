import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromTaskApi from './task-api.reducer';
import * as fromTaskpage from './task-page.reducer';
import * as fromRoot from '@app/reducers';
import { TaskApiActions } from '../actions';

export const taskFeatureKey = 'task';

export interface TaskState {
	taskPage: fromTaskpage.State;
	taskApi: fromTaskApi.State;
}

export interface State extends fromRoot.State {
	task: TaskState;
}

export const reducers: ActionReducerMap<TaskState, TaskApiActions.TaskApiActionsUnion> = {
	taskApi: fromTaskApi.reducer,
	taskPage: fromTaskpage.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectTaskState = createFeatureSelector<State, TaskState>(taskFeatureKey);

export const selectTaskPageState = createSelector(
	selectTaskState,
	(state: TaskState) => state.taskPage
);
export const selectTaskPageError = createSelector(selectTaskPageState, fromTaskpage.getError);
export const selectTaskPagePending = createSelector(selectTaskPageState, fromTaskpage.getPending);

export const selectTaskApiState = createSelector(
	selectTaskState,
	(state: TaskState) => state.taskApi
);
export const selectTaskApiSelectedTask = createSelector(
	selectTaskApiState,
	fromTaskApi.getSelectedTask
);
export const selectTaskApiTotalTasks = createSelector(selectTaskApiState, fromTaskApi.getTaskTotal);
export const selectTaskApiTasks = createSelector(selectTaskApiState, fromTaskApi.getTasks);
export const selectTaskApiTaskIds = createSelector(selectTaskApiState, fromTaskApi.getTaskIds);
