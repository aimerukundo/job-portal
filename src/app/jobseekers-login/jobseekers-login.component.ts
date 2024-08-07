import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobseekers-login',
  templateUrl: './jobseekers-login.component.html',
  styleUrl: './jobseekers-login.component.scss'
})
export class JobseekersLoginComponent {
  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public loginJobseeker() {
    console.log(this.loginForm.value);
  }
}
