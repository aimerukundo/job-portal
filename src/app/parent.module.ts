import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { authInterceptorInterceptor } from './auth-interceptor.interceptor';
import { JobseekersLoginComponent } from './jobseekers-login/jobseekers-login.component';

@NgModule({
  declarations: [JobseekerRegistrationComponent, EmployerRegistrationComponent, JobseekersLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [JobseekerRegistrationComponent, EmployerRegistrationComponent],
  providers: [
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
  ],
})
export class ParentModule {}
