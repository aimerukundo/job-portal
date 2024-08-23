import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';
import { Job } from '../models/job.model';
import { catchError, of, Subscription, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss'
})
export class JobOffersComponent implements OnInit {
  public jobs: Job[] | null = null;
  private jobSubscription: Subscription | null = null;
  public search = '';
  public region = '';
  constructor(
    private jobOfferService: JobOfferService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService
      .validateToken()
      .pipe(
        switchMap(() => this.jobOfferService.getJobOffers()),
        catchError((error) => {
          if (error.status === 401) {
            this.authService.logOut();
            this.router.navigate(['/jobseekers/login']);
          }
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          this.jobs = data;
        },
        error: (error) => {
          catchError(error);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.jobSubscription) {
      this.jobSubscription.unsubscribe();
    }
  }

  public onSearch(): void {
    this.jobOfferService.getJobOffers().subscribe({
      next: (data) => {
        this.jobs = data;
        const newJobs = this.jobs?.map((job) => {
          if (
            (job.title.toLowerCase().includes(this.search.toLowerCase()) &&
              this.search) ||
            (job.company.toLowerCase().includes(this.search.toLowerCase()) &&
              this.search)
          ) {
            return job;
          }
          return null;
        });
        const searchedJobs = newJobs?.filter((job) => job !== null) as Job[];

        if (this.region) {
          if (searchedJobs.length !== 0) {
            const filterJobs = this.filterJobs(searchedJobs);
            this.jobs = [...filterJobs];
          } else {
            this.jobs = this.filterJobs();
          }
        } else {
          this.jobs = [...searchedJobs];
        }
      },
      error: (error) => {
        catchError(error);
      }
    });
  }

  public filterJobs(jobs: Job[] | null = this.jobs): Job[] {
    const filteredJobs = jobs?.filter(
      (job) =>
        job.location.toLocaleLowerCase() === this.region.toLocaleLowerCase()
    ) as Job[];
    return filteredJobs;
  }
}
