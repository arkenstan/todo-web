import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginCredentials } from './../../models/user.model';
import * as fromSplash from '../../reducers';
import { LoginPageActions } from '../../actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<fromSplash.State>) {}

  ngOnInit() {}

  onSubmit(credentials: LoginCredentials) {
    this.store.dispatch(LoginPageActions.login({ payload: credentials }));
  }
}
