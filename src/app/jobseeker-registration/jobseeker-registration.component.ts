import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-jobseeker-registration',
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.scss',
})
export class JobseekerRegistrationComponent {
  constructor(private auth: AuthService) {}
  signupForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public signUpJobseeker() {
    this.auth
      .createJobSeeker({
        firstName: this.signupForm.value.firstName as string,
        lastName: this.signupForm.value.lastName as string,
        email: this.signupForm.value.email as string,
        password: this.signupForm.value.password as string,
      })
      

    this.signupForm.reset();
  }
}
