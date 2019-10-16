import { Component, OnInit } from '@angular/core';
import { RegisterData } from '@app/splash/models/user.model';
import { Store, select } from '@ngrx/store';
import { RegisterPageActions } from '@app/splash/actions';
import * as fromSplash from '@app/splash/reducers';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: [ './register-page.component.scss' ]
})
export class RegisterPageComponent implements OnInit {
	hasError = this.store.pipe(select(fromSplash.getRegisterPageError));
	isPending = this.store.pipe(select(fromSplash.getRegisterPagePending));

	constructor(private store: Store<fromSplash.State>) {}

	ngOnInit() {}

	registerUser(registerData: RegisterData) {
		this.store.dispatch(RegisterPageActions.register({ payload: registerData }));
	}
}
