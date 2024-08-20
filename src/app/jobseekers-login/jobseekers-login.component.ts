import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { REQUIRED_FIELD } from '../../constants/constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseekers-login',
  templateUrl: './jobseekers-login.component.html',
  styleUrl: './jobseekers-login.component.scss'
})
export class JobseekersLoginComponent {
  public required = '';
  private loginSubscription: Subscription | null = null;
  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) {
    this.required = REQUIRED_FIELD;
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public loginJobseeker() {
    this.loginSubscription = this.auth
      .loginJobSeeker({
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string
      })
      .subscribe({
        next: (jobSeekerData) => {
          this.toastr.success('successfully logged in');
          localStorage.setItem('login_token', JSON.stringify(jobSeekerData.login_token));
          localStorage.setItem('refresh_token', JSON.stringify(jobSeekerData.refresh_token));
          this.router.navigate(['/job-offers']);
        },
        error: () => {
          this.toastr.error('something went wrong');
        },
        complete: () => {
          this.loginForm.reset();
        }
      });
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
