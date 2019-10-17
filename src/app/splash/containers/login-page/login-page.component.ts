import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginCredentials } from './../../models/user.model';
import * as fromSplash from '../../reducers';
import { LoginPageActions, LoginApiActions } from '../../actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<fromSplash.State>) {}

  ngOnInit() {
    this.store.dispatch(LoginApiActions.loginShot());
  }

  onSubmit(credentials: LoginCredentials) {
    const temp = { payload: credentials };
    this.store.dispatch(LoginPageActions.login({ ...temp }));
  }
}
