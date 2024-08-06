import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrl: './employer-registration.component.scss',
})
export class EmployerRegistrationComponent {
  signupForm = new FormGroup({
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    contactName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    businessEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public signUpEmployer() {}
}
