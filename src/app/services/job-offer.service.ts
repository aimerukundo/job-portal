import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  constructor(private httpClient: HttpClient) {}

  getJobOffers() {
    // set headers to the request
    const headers = {
      'x-rapidapi-key': environment.RAPIDAPIKEY,
      'x-rapidapi-host': environment.RAPIDAPIHOST,
    };

    // set params
    const params = {
      q: 'software engineer',
      page: '1',
      country: 'us',
      city: 'Seattle',
    };

    return this.httpClient.get(
      `${environment.RAPIDAPIURL}`,
      {
        headers,
        params,
      }
    );
  }
}
