export interface IUser {
    _id?: string| null;
    firstName: string;
    lastName: string;
    email?: string;
    password?: string;
    gender: string | null;
    dateOfBirth: string | null;
    region: string | null;
    city: string | null;
    monthlySalary: string | null;
    resume: string | null;
    __v?: number | null;
  }