import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';


@NgModule({
  declarations: [JobseekerRegistrationComponent, EmployerRegistrationComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [JobseekerRegistrationComponent, EmployerRegistrationComponent],
})
export class ParentModule {}
