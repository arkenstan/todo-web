import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { ListPageActions, ListApiActions } from '../actions';

import { ListService } from '../services/list.service';

@Injectable()
export class ListEffects {
  constructor(private actions$: Actions, private listService: ListService) {}

  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListPageActions.loadLists.type),
      exhaustMap(() => this.listService.loadLists()),
      map(listData => ListApiActions.listLoadSuccess({ lists: listData.data })),
      catchError(error => of(ListApiActions.listLoadFailrue({ error })))
    )
  );
}
