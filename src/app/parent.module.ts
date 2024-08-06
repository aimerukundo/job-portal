import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [JobseekerRegistrationComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [JobseekerRegistrationComponent],
})
export class ParentModule {}
