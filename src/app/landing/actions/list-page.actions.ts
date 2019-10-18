import { createAction, props, union } from '@ngrx/store';
import { List } from '../models/list.model';

export const loadLists = createAction('[Lists/Page] Load lists');
export const createList = createAction('[Lists/Page] Create list', props<{ listName: string }>());
export const updateList = createAction(
	'[List/Page] Update list',
	props<{ listId: string; list: List }>()
);
export const deleteList = createAction('[List/Page] Delete list', props<{ listId: string }>());
export const selectList = createAction('[List/Page] Select list', props<{ listId: string }>());

const all = union({ loadLists, createList, updateList, deleteList });

export type ListPageActionsUnion = typeof all;
