import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { LoginPageActions, LoginApiActions } from '../actions';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login.type),
      map((action: LoginPageActions.LoginPageActionsUnion) => action.payload),
      exhaustMap(authCred => this.loginService.logIn(authCred)),
      map(user => LoginApiActions.loginSuccess({ user })),
      catchError(error => {
        console.log(error);
        return of(LoginApiActions.loginFailure({ error }));
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginApiActions.loginSuccess.type),
        tap(() => this.router.navigate(['']))
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginApiActions.loginRedirect.type),
        tap(() => this.router.navigate(['login']))
      ),
    { dispatch: false }
  );
}
