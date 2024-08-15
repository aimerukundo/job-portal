export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  datePosted: string;
  salary: number;
  salaryCurrency: string;
}

export interface Salary {
  currency: string;
  min_salary: number;
  max_salary: number;
  salary_type: string;
}

export interface JobOffersResponse {
  jobs: Job[];
  index: number;
  jobCount: number;
  hasError: boolean;
  errors: unknown[];
}
