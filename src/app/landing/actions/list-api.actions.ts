import { createAction, union, props } from '@ngrx/store';
import { List } from '../models/list.model';

export const listLoadSuccess = createAction(
	'[Lists/API] List load success',
	props<{ lists: List[] }>()
);
export const listLoadFailure = createAction(
	'[List/API] List load failure',
	props<{ error: any }>()
);

export const listCreateSuccess = createAction(
	'[Lists/API] List create success',
	props<{ list: List }>()
);
export const listCreateFailure = createAction(
	'[Lists/API] List create failure',
	props<{ error: any }>()
);

export const listUpdateSuccess = createAction(
	'[List/API] List update success',
	props<{ list: List }>()
);
export const listUpdateFailure = createAction(
	'[List/API] List update failure',
	props<{ error: any }>()
);

export const listDeleteSuccess = createAction(
	'[List/API] List delete success',
	props<{ list: List }>()
);
export const listDeleteFailure = createAction(
	'[List/API] List delete failure',
	props<{ error: any }>()
);

const all = union({
	listLoadSuccess,
	listLoadFailure,
	listCreateSuccess,
	listCreateFailure,
	listUpdateSuccess,
	listUpdateFailure,
	listDeleteSuccess,
	listDeleteFailure
});

export type ListApiActionsUnion = typeof all;
