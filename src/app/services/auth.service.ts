import { Injectable } from '@angular/core';
import { IJobSeeker } from '../models/jobSeeker.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IEmployer } from '../models/employer.model';
import { ILoginResponse } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public createJobSeeker(jobSeekerData: IJobSeeker) {
    const user = {
      first_name: jobSeekerData.firstName,
      last_name: jobSeekerData.lastName,
      email: jobSeekerData.email,
      password: jobSeekerData.password
    };

    this.httpClient.post(`${environment.APIURL}/user/signup`, user).subscribe();
    const jobSeekerCred = this.httpClient.post(
      `${environment.BACKENDURL}/api/register`,
      jobSeekerData
    );
    return jobSeekerCred;
  }

  public loginJobSeeker(
    jobSeekerData: Partial<IJobSeeker>
  ): Observable<ILoginResponse> {
    const user = {
      email: jobSeekerData.email,
      password: jobSeekerData.password
    };
    const jobSeekerCred = this.httpClient.post<ILoginResponse>(
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
          roles: ['employer']
        }
      }
    };

    const employer = {
      firstName: employerData.companyName,
      lastName: employerData.contactName,
      email: employerData.businessEmail,
      password: employerData.password,
      role: 'employer'
    }
    this.httpClient.post(
      `${environment.APIURL}/user/signup`,
      user
    ).subscribe();
    const employerCred = this.httpClient.post(
      `${environment.BACKENDURL}/api/register`,
      employer
    )
    return employerCred;
  }

  public loginEmployer(employerData: Partial<IEmployer>) {
    const user = {
      email: employerData.businessEmail,
      password: employerData.password
    };
    const employerCred = this.httpClient.post(
      `${environment.APIURL}/user/login`,
      user
    );
    return employerCred;
  }

  public validateToken() {
    const token = JSON.parse(localStorage.getItem('login_token') as string);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<string>(`${environment.APIURL}/user/validate`, {
      headers
    });
  }

  public logOut() {
    localStorage.removeItem('login_token');
    localStorage.removeItem('refresh_token');
  }
}
