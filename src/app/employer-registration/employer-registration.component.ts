import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD } from '../../constants/constants';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrl: './employer-registration.component.scss'
})
export class EmployerRegistrationComponent {
  public required = '';
  private signupSubscription: Subscription | null = null;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.required = REQUIRED_FIELD;
  }

  signupForm = new FormGroup({
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    contactName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    businessEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get companyName() {
    return this.signupForm.get('companyName');
  }

  get contactName() {
    return this.signupForm.get('contactName');
  }

  get businessEmail() {
    return this.signupForm.get('businessEmail');
  }

  get password() {
    return this.signupForm.get('password');
  }

  public signUpEmployer() {
    this.signupSubscription = this.auth
      .createEmployer({
        companyName: this.signupForm.value.companyName as string,
        contactName: this.signupForm.value.contactName as string,
        businessEmail: this.signupForm.value.businessEmail as string,
        password: this.signupForm.value.password as string
      })
      .subscribe({
        next: (data) => {
          localStorage.setItem('company', JSON.stringify(data));
          this.router.navigate(['/login']);
          this.toastr.success('successfully signup');
        },
        error: (error) => {
          catchError(error);
          this.toastr.error('something went wrong');
        },
        complete: () => {
          this.signupForm.reset();
        }
      });
  }

  ngOnDestroy() {
    if (this.signupSubscription) {
      this.signupSubscription.unsubscribe();
    }
  }
}
