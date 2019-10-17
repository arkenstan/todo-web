import { createAction, props, union } from '@ngrx/store';

export const loadLists = createAction('[Lists/Page] Load lists', props<{ listIds: [string] }>());
export const createList = createAction('[Lists/Page] Create List', props<{ listName: string }>());

const all = union({ loadLists, createList });

export type ListPageActionsUnion = typeof all;
