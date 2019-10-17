import { createAction, props, union } from '@ngrx/store';
import { List } from '../models/list.model.ts';

export const loadLists = createAction('[Lists/Page] Load lists');
export const createList = createAction('[Lists/Page] Create List', props<{ payload: List }>());

const all = union({ loadLists, createList });

export type ListPageActionsUnion = typeof all;
