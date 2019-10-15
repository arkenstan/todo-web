import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  @Output() submitted = new EventEmitter<LoginCredentials>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  loginAction() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    } else {
      console.log('Invalid credentials');
    }
  }
}
