import { Component, OnInit } from '@angular/core';
import { REQUIRED_FIELD } from '../../constants/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user.model';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  required = '';
  private file: File | null = null;
  private fileContent: string | ArrayBuffer | null | undefined = null;
  private resumeUrl = '';
  private user: IUser | null = null;
  userSubscription: Subscription | null = null;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) {
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

  ngOnInit(): void {
    const userObj = JSON.parse(localStorage.getItem('user') || '');

    if (userObj) {
      this.user = userObj;
      this.profileForm.get('firstName')?.setValue(userObj.firstName);
      this.profileForm.get('lastName')?.setValue(userObj.lastName);
    }
  }

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

    this.userSubscription = this.userService
      .updateJobseeker(this.user?._id as string, {
        firstName: profileData.firstName as string,
        lastName: profileData.lastName as string,
        gender: profileData.gender as string,
        dateOfBirth: profileData.dateOfBirth as string,
        region: profileData.region as string,
        city: profileData.city as string,
        monthlySalary: profileData.salary as string,
        resume: profileData.resume as string,
      })
      .subscribe({
        next: (data) => {
          localStorage.setItem('user', JSON.stringify(data));
          this.toastr.success('profile updated successfully');
          this.router.navigate(['/job-offers']);
        },
        error: (error) => {
          catchError(error);
          this.toastr.error(`something went wrong! ${error}`);
        },
        complete: () => {
          this.profileForm.reset();
        },
      });
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

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
