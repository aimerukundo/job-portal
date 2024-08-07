import { Injectable } from '@angular/core';
import { IJobSeeker } from '../models/jobSeeker.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  createJobSeeker(jobSeekerData: IJobSeeker) {
    const user = {
      first_name: jobSeekerData.firstName,
      last_name: jobSeekerData.lastName,
      email: jobSeekerData.email,
      password: jobSeekerData.password,
    };

    const jobSeekerCred = this.httpClient.post(
      `${environment.APIURL}/user/signup`,
      user
    );
    return jobSeekerCred;
  }
}
