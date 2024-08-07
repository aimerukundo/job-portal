import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { JobseekersLoginComponent } from './jobseekers-login/jobseekers-login.component';


const routes: Routes = [
  {
    path: 'jobseekers/login',
    component: JobseekersLoginComponent
  },
  {
    path: 'jobseekers/signup',
    component: JobseekerRegistrationComponent,
  },
  {
    path: 'employers/signup',
    component: EmployerRegistrationComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
