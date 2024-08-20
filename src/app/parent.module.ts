import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { authInterceptorInterceptor } from './auth-interceptor.interceptor';
import { JobseekersLoginComponent } from './jobseekers-login/jobseekers-login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    JobseekerRegistrationComponent,
    EmployerRegistrationComponent,
    JobseekersLoginComponent,
    ProfileComponent,
    EmployerLoginComponent,
    JobOffersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        extendsFromRoot: true,
        height: '300px',
        width: '100%',
        marginTop: '20px',
      }
    }),
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [JobseekerRegistrationComponent, EmployerRegistrationComponent, EmployerLoginComponent],
  providers: [
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
  ],
})
export class ParentModule {}
