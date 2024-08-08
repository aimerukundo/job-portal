import { Injectable } from '@angular/core';
import { IJobSeeker } from '../models/jobSeeker.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IEmployer } from '../models/employer.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public createJobSeeker(jobSeekerData: IJobSeeker) {
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

  public loginJobSeeker(jobSeekerData: Partial<IJobSeeker>) {
    const user = {
      email: jobSeekerData.email,
      password: jobSeekerData.password,
    };
    const jobSeekerCred = this.httpClient.post(
      `${environment.APIURL}/user/login`,
      user
    );
    return jobSeekerCred;
  }

  public createEmployer(employerData: IEmployer) {
    const user = {
      first_name: employerData.companyName,
      last_name: employerData.contactName,
      email: employerData.businessEmail,
      password: employerData.password,

      additional_properties: {
        phone_number: '+1234567890',
        profile_picture: 'http://example.com/profile.jpg',
        date_of_birth: '1990-01-01T00:00:00Z',
        gender: 'male',
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'Anystate',
          postal_code: '12345',
          country: 'Countryland',
          roles: ['employer'],
        },
      },
    };
    const employerCred = this.httpClient.post(
      `${environment.APIURL}/user/signup`,
      user
    );
    return employerCred;
  }
}
