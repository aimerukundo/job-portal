import { Component } from '@angular/core';
import { REQUIRED_FIELD } from '../../constants/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  required = '';

  constructor() {
    this.required = REQUIRED_FIELD;
  }
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    resume: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get gender() {
    return this.profileForm.get('gender');
  }

  get dateOfBirth() {
    return this.profileForm.get('dateOfBirth');
  }

  get region() {
    return this.profileForm.get('region');
  }

  get city() {
    return this.profileForm.get('city');
  }

  get salary() {
    return this.profileForm.get('salary');
  }

  get resume() {
    return this.profileForm.get('resume');
  }

  public updateProfile() {}
}
