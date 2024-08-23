import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { JobseekersLoginComponent } from './jobseekers-login/jobseekers-login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EmployerJobPostComponent } from './employer-job-post/employer-job-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobseekers/login',
    pathMatch: 'full'
  },
  {
    path: 'jobseekers/login',
    component: JobseekersLoginComponent
  },
  {
    path: 'jobseekers/signup',
    component: JobseekerRegistrationComponent
  },
  {
    path: 'employers/signup',
    component: EmployerRegistrationComponent
  },
  {
    path: 'jobseekers/confirm/profile',
    component: ProfileComponent
  },
  {
    path: 'employers/login',
    component: EmployerLoginComponent
  },
  {
    path: 'job-offers',
    component: JobOffersComponent
  },
  {
    path: 'employers/dashboard',
    component: EmployerDashboardComponent
  },
  {
    path: 'employers/jobs/add',
    component: EmployerJobPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
