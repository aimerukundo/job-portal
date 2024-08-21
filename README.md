
# Job Portal

A comprehensive job portal application built with Angular, designed to help users find job opportunities and employers to post job vacancies.

## Description

The Job Portal is a web application built using Angular that connects job seekers with employers. Job seekers can browse job listings, apply for jobs, and manage their profiles, while employers can post job openings, manage applications, and search for potential candidates.

## Demo
Check out the live demo of the Job Portal [here](https://job-portal-eta-three.vercel.app)

## Installation
Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v14.x or later)
- Angular CLI (v12.x or later)

### Clone the Repository
```
git clone https://github.com/aimerukundo/job-portal.git
cd job-portal
```

### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

## Configuration

### Environment Variables

To configure the application, you may need to set up the following environment variables:
- `APN`: The key of the authentication API

- `APIURL`: The base URL for the authentication API

- `RAPIDAPIKEY`: The key of the rapid API

- `RAPIDAPIHOST`: The base URL for the rapid API

- `BACKENDURL`: The base URL for the backend API

These can be set in the src/environments/environment.ts file:

```
export const environemnt = {
  production: false,
  APN: '',
  APIURL: '',
  RAPIDAPIKEY: '',
  RAPIDAPIHOST: '',
  BACKENDURL: '',
};
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

Please ensure your code follows the existing style and includes relevant tests.



