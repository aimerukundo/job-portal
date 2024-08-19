import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getJobseeker(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.BACKENDURL}/api/user/${id}`);
  }

  public updateJobseeker(id: string, jobSeekerData: IUser): Observable<IUser> {
    return this.httpClient.patch<IUser>(
      `${environment.BACKENDURL}/api/user/${id}`,
      jobSeekerData
    );
  }
}
