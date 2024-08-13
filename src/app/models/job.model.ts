export interface Job {
  id: string;
  title: string;
  company_name: string;
  location: string;
  employment_type: string;
  employment_hour_type: string;
  application_url: string;
  html_description: string;
  plain_text_description: string;
  publication_time: string;
  salary: Salary;
  source: string;
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
