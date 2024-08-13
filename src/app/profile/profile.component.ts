import { Component } from '@angular/core';
import { REQUIRED_FIELD } from '../../constants/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  required = '';
  file: File | null = null;
  fileContent: string | ArrayBuffer | null | undefined = null;
  resumeUrl = '';
  constructor(private toastr: ToastrService, private router: Router) {
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

  public updateProfile() {
    const profileData = { ...this.profileForm.value, resume: this.resumeUrl };

    localStorage.setItem('profile', JSON.stringify(profileData));
    this.profileForm.reset();
    this.toastr.success('profile updated successfully');

    this.router.navigate(['/job-offers']);
  }

  public handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.file = input.files[0];

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.fileContent = e.target?.result;
      };

      reader.readAsDataURL(this.file);
    }

    const fileData = {
      name: this.file?.name,
      type: this.file?.type,
      content: this.fileContent,
    };

    const resume = JSON.stringify(fileData);
    this.resumeUrl = resume;
  }
}
