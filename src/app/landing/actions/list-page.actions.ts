import { createAction, props, union } from '@ngrx/store';

export const loadLists = createAction('[Lists/Page] Load lists');
export const createList = createAction('[Lists/Page] Create List', props<{ listName: string }>());

const all = union({ createList, loadLists });

export type ListPageActionsUnion = typeof all;
