import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromSplash from '../reducers';
import { LoginApiActions } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromSplash.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromSplash.getLoggedIn),
      map(authed => {
        console.log(authed);
        if (!authed) {
          this.store.dispatch(LoginApiActions.loginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
