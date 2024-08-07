import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobseekers-login',
  templateUrl: './jobseekers-login.component.html',
  styleUrl: './jobseekers-login.component.scss',
})
export class JobseekersLoginComponent {
  constructor(private auth: AuthService, private toastr: ToastrService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public loginJobseeker() {
    this.auth
      .loginJobSeeker({
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      })
      .subscribe({
        next: (jobSeekerData) => {
          this.toastr.success('successfully logged in');
          console.log(jobSeekerData);
        },
        error: () => {
          this.toastr.error('something went wrong');
        },
      });
    
  }
}
