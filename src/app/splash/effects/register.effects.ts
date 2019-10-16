import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import { RegisterApiActions, RegisterPageActions } from '../actions';
import { RegisterService } from '../services/register.service';
import { RegisterData } from '../models/user.model';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private registerService: RegisterService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterPageActions.register.type),
      map((action: RegisterPageActions.RegisterPageActionsUnion) => action.payload),
      exhaustMap((registerData: RegisterData) => this.registerService.registerUser(registerData)),
      map(user => RegisterApiActions.registerSuccess({ user })),
      catchError(error => of(RegisterApiActions.registerFailure({ error })))
    )
  );
}
