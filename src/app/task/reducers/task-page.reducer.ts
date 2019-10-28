import { Action, createReducer, on } from '@ngrx/store';
import { TaskPageActions, TaskApiActions } from '../actions';
import { ToolbarActions } from '@core/actions';

export const taskPageFeatureKey = 'taskPage';

export interface State {
  error: any | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

const featureReducer = createReducer(
  initialState,
  on(TaskPageActions.loadTasks, state => ({ ...state, pending: true })),
  on(TaskApiActions.loadTasksSuccess, state => ({ ...state, pending: false })),
  on(TaskApiActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  })),
  on(ToolbarActions.createTask, state => ({ ...state, pending: true })),
  on(TaskApiActions.createTaskSuccess, state => ({ ...state, pending: false })),
  on(TaskApiActions.createTaskFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  })),
  on(TaskPageActions.updateTask, state => ({ ...state, pending: true })),
  on(TaskApiActions.updateTaskSuccess, state => ({ ...state, pending: false })),
  on(TaskApiActions.updateTaskFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  })),
  on(TaskPageActions.removeTask, state => ({ ...state, pending: true })),
  on(TaskApiActions.deleteTaskSuccess, state => ({ ...state, pending: false })),
  on(TaskApiActions.deleteTaskFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
