import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ListPageActions, ListApiActions } from '../actions';

import { ListService } from '../services/list.service';

@Injectable()
export class ListEffects {
	constructor(private actions$: Actions, private listService: ListService) {}

	listLoad$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ListPageActions.loadLists.type),
			exhaustMap(() => this.listService.loadLists()),
			map((res) => ListApiActions.listLoadSuccess({ lists: res.list })),
			catchError((error) => of(ListApiActions.listLoadFailure({ error })))
		)
	);

	listCreate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ListPageActions.createList.type),
			switchMap(({ listName }) => this.listService.createList(listName)),
			map((res) => ListApiActions.listCreateSuccess({ list: res.data })),
			catchError((error) => of(ListApiActions.listCreateFailure({ error })))
		)
	);
}
