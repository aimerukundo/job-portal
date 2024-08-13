import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { JobOffersResponse } from '../models/job.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss',
})
export class JobOffersComponent implements OnInit {
  jobs: JobOffersResponse | null = null;
  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getJobOffers().subscribe({
      next: (data) => {
        this.jobs = data as JobOffersResponse;
      },
      error: (error) => {
        catchError(error);
      },
    });
  }
}
