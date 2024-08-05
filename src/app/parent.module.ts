import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';

@NgModule({
  declarations: [JobseekerRegistrationComponent],
  imports: [CommonModule, RouterModule],
  exports: [JobseekerRegistrationComponent],
})
export class ParentModule {}
