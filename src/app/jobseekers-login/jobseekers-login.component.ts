import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD } from '../../constants/constants';

@Component({
  selector: 'app-jobseekers-login',
  templateUrl: './jobseekers-login.component.html',
  styleUrl: './jobseekers-login.component.scss',
})
export class JobseekersLoginComponent {
  required = '';
  constructor() {
    this.required = REQUIRED_FIELD;
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public loginJobseeker() {
    console.log(this.loginForm.value);
  }
}
