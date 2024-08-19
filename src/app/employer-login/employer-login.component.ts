import { Component } from '@angular/core';
import { REQUIRED_FIELD } from '../../constants/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrl: './employer-login.component.scss'
})
export class EmployerLoginComponent {
  public required = '';
  private loginSubscription: Subscription | null = null;
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

  public loginEmployer() {
    this.loginSubscription = this.auth
      .loginEmployer({
        businessEmail: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      })
      .subscribe({
        next: (employerData) => {
          this.toastr.success('successfully logged in');
          localStorage.setItem('employer', JSON.stringify(employerData));
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
