import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterData } from '@app/splash/models/user.model';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: [ './register-form.component.scss' ]
})
export class RegisterFormComponent implements OnInit {
	registerForm = this.fb.group({
		email: [ '', [ Validators.email, Validators.required ] ],
		password: [ '', Validators.required ]
	});

	@Output() submitted = new EventEmitter<RegisterData>();

	constructor(private fb: FormBuilder) {}

	ngOnInit() {}

	registerAction() {
		if (this.registerForm.valid) {
			this.submitted.emit(this.registerForm.value);
		} else {
			console.log('Some error');
		}
	}
}
