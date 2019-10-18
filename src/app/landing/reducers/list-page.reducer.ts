import { Action, createReducer, on } from '@ngrx/store';
import { ListPageActions, ListApiActions } from '../actions';

export const listPageFeatureKey = 'listPage';

export interface State {
	error: any | null;
	pending: boolean;
}

export const initialState: State = {
	error: null,
	pending: false
};

const listPageReducer = createReducer(
	initialState,
	on(ListPageActions.loadLists, (state) => ({ ...state, pending: true })),
	on(ListApiActions.listLoadSuccess, (state) => ({ ...state, pending: false, error: null })),
	on(ListApiActions.listLoadFailure, (state, { error }) => ({ ...state, pending: false, error })),
	on(ListPageActions.createList, (state) => ({ ...state, pending: true })),
	on(ListApiActions.listCreateSuccess, (state) => ({ ...state, pending: false, error: null })),
	on(ListApiActions.listCreateFailure, (state, { error }) => ({
		...state,
		pending: false,
		error
	})),
	on(ListPageActions.updateList, (state) => ({ ...state, pending: true })),
	on(ListApiActions.listUpdateSuccess, (state) => ({ ...state, pending: false, error: null })),
	on(ListApiActions.listUpdateFailure, (state, { error }) => ({
		...state,
		pending: false,
		error
	})),
	on(ListPageActions.deleteList, (state) => ({ ...state, pending: true })),
	on(ListApiActions.listDeleteSuccess, (state) => ({ ...state, pending: false, error: null })),
	on(ListApiActions.listDeleteFailure, (state, { error }) => ({
		...state,
		pending: false,
		error
	}))
);

export function reducer(state: State | undefined, action: Action) {
	return listPageReducer(state, action);
}

export const getError = (state: State): any => state.error;
export const getPending = (state: State): boolean => state.pending;
