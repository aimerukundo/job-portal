import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD } from '../../constants/constants';
import { JobOfferService } from '../services/job-offer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-employer-job-post',
  templateUrl: './employer-job-post.component.html',
  styleUrl: './employer-job-post.component.scss'
})
export class EmployerJobPostComponent {
  required = '';

  constructor(
    private jobService: JobOfferService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.required = REQUIRED_FIELD;
  }
  jobForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    location: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    type: new FormControl('', [Validators.required, Validators.minLength(4)]),
    experience: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    salary: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get title() {
    return this.jobForm.get('title');
  }

  get description() {
    return this.jobForm.get('description');
  }

  get location() {
    return this.jobForm.get('location');
  }

  get type() {
    return this.jobForm.get('type');
  }

  get experience() {
    return this.jobForm.get('experience');
  }

  get salary() {
    return this.jobForm.get('salary');
  }

  public postJob() {
    console.log(this.jobForm.value);
    this.jobService
      .createJobOffer({
        title: this.jobForm.value.title as string,
        description: this.jobForm.value.description as string,
        location: this.jobForm.value.location as string,
        type: this.jobForm.value.type as string,
        experience: this.jobForm.value.experience as string,
        salary: this.jobForm.value.salary as string,
        company: '100Devs'
      })
      .subscribe({
        next: () => {
          this.toastr.success('Job created successfully');
          this.router.navigate(['/job-offers']);
        },
        error: (error) => {
          catchError(error);
          this.toastr.error('something went wrong');
        }
      });
  }
}
