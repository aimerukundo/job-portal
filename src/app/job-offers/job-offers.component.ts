import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { Job } from '../models/job.model';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss',
})
export class JobOffersComponent implements OnInit {
  public jobs: Job[] | null = null;
  private jobSubscription: Subscription | null = null;
  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getJobOffers().subscribe({
      next: (data) => {
        this.jobs = data;
      },
      error: (error) => {
        catchError(error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.jobSubscription) {
      this.jobSubscription.unsubscribe();
    }
  }
}
