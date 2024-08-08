import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { REQUIRED_FIELD } from '../../constants/constants';

@Component({
  selector: 'app-jobseekers-login',
  templateUrl: './jobseekers-login.component.html',
  styleUrl: './jobseekers-login.component.scss',
})
export class JobseekersLoginComponent {
  required = '';
  constructor(private auth: AuthService, private toastr: ToastrService) {
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
    this.auth
      .loginJobSeeker({
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      })
      .subscribe({
        next: (jobSeekerData) => {
          this.toastr.success('successfully logged in');
          localStorage.setItem('jobSeeker', JSON.stringify(jobSeekerData));
        },
        error: () => {
          this.toastr.error('something went wrong');
        },
      });
    
  }
}
