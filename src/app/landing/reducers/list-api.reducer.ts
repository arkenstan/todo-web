import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ListApiActions } from '../actions';

import { List } from '../models/list.model';

export const listApiFeatureKey = 'listApi';

export interface State extends EntityState<List> {
	selectedListId: string | null;
}

export function selectListId(l: List): string {
	return l.listId;
}

export const adapter: EntityAdapter<List> = createEntityAdapter<List>({
	selectId: selectListId,
	sortComparer: false
});

export const initialState: State = adapter.getInitialState({
	selectedListId: null
});

const ListApiReducer = createReducer(
	initialState,
	on(ListApiActions.listLoadSuccess, (state, { lists }) => {
		return adapter.addMany(lists, state);
	}),
	on(ListApiActions.listCreateSuccess, (state, { list }) => {
		return adapter.addOne(list, state);
	})
);

export function reducer(state: State | undefined, action: Action) {
	return ListApiReducer(state, action);
}

export const getSelectedListId = (state: State) => state.selectedListId;

const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

export const getListIds = selectIds;
export const getLists = selectEntities;
export const getAllLists = selectAll;
export const getListTotal = selectTotal;
