import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Job, JobPost } from '../models/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  constructor(private httpClient: HttpClient) {}

  getJobOffers(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${environment.BACKENDURL}/api/job`);
  }

  createJobOffer(job: JobPost): Observable<JobPost> {
    return this.httpClient.post<JobPost>(`http://localhost:3000/api/job`, job);
  }
}
