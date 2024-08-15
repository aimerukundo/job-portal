import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getJobseeker(id: string) {
    return this.httpClient.get(`${environment.BACKENDURL}/api/user/${id}`);
  }

  public updateJobseeker(id: string, jobSeekerData: IUser) {
    return this.httpClient.patch(
      `${environment.BACKENDURL}/api/user/${id}`,
      jobSeekerData
    );
  }
}
