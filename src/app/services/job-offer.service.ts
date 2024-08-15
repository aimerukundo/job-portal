import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  constructor(private httpClient: HttpClient) {}

  getJobOffers() {
    return this.httpClient.get(`${environment.BACKENDURL}/api/jobs`);
  }
}
