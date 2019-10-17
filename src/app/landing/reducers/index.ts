import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromRoot from '@app/reducers';
import * as fromListApi from './list-api.reducer';
import * as fromListPage from './list-page.reducer';

export const landingFeatureKey = 'list';

export interface ListState {
  listStatus: fromListPage.State;
  lists: fromListApi.State;
}

export interface State extends fromRoot.State {
  list: ListState;
}

export const reducers: ActionReducerMap<ListState> = {
  listStatus: fromListPage.reducer,
  lists: fromListApi.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectListState = createFeatureSelector<State, ListState>(landingFeatureKey);

export const selectListStatus = createSelector(
  selectListState,
  (state: ListState) => state.listStatus
);
export const getListStatusError = createSelector(
  selectListStatus,
  fromListPage.getError
);
export const getListStatusPending = createSelector(
  selectListStatus,
  fromListPage.getPending
);

export const selectLists = createSelector(
  selectListState,
  (state: ListState) => state.lists
);
export const getListIds = createSelector(
  selectLists,
  fromListApi.getListIds
);
export const getListEntities = createSelector(
  selectLists,
  fromListApi.getAllLists
);
export const getAllLists = createSelector(
  selectLists,
  fromListApi.getAllLists
);
export const getListTotal = createSelector(
  selectLists,
  fromListApi.getListTotal
);
export const getSelectedListid = createSelector(
  selectList,
  fromListApi.getSelectedListid
);
export const selectCurrentList = createSelector(
  getListEntities,
  getSelectedListid,
  (listEntities, listId) => listEntities[listId]
);
