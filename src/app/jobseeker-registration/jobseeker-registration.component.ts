import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { REQUIRED_FIELD } from '../../constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-registration',
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.scss',
})
export class JobseekerRegistrationComponent {
  required = '';
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.required = REQUIRED_FIELD;
  }
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

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  public signUpJobseeker() {
    this.auth
      .createJobSeeker({
        firstName: this.signupForm.value.firstName as string,
        lastName: this.signupForm.value.lastName as string,
        email: this.signupForm.value.email as string,
        password: this.signupForm.value.password as string,
      })
      .subscribe({
        next: (data) => {
          this.toastr.success('successfully signup');
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/jobseekers/confirm/profile']);
        },
        error: () => {
          this.toastr.error('something went wrong');
        },
        complete: () => {
          this.signupForm.reset();
        },
      });
  }
}
