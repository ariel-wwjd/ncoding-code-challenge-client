import { ReactNode } from 'react';

export interface IModalForm {
  onClose(): void;
  onLogin(user: IUser): void;
  onSignUp(user: IUser): void;
  type?: 'loginOrSignUp' | 'application';
  children?: string | ReactNode | ReactNode[];
  course?: string;
}

export interface ILoginOrSignUp {
  type?: 'login' | 'signUp';
  onClose(): void;
  onLogin(user: IUser): void;
  onSignUp(user: IUser): void;
}

export interface IApplication {
  course?: string;
  onClose(): void;
}

export interface IPaymentPlan {
  id: string;
  name: string;
  amount: string;
  totalAmount: string;
  save: string;
  note: string;
}

export interface ICourse {
  id: string;
  name: string;
  title: string;
  description: string;
  duration: string;
  review: { stars: number; people: number; },
  paymentPlan: IPaymentPlan;
}

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
  gender?: string;
  dateOfBirth?: string;
  address?: string;
  phoneNumber?: number;
  preferredLanguage?: string;
  educationLevel?: string
  courses?: ICourse[];
}
