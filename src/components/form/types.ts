import { ReactNode } from 'react';
import { IPaymentCard } from '../paymentCard/types';

export interface IForm {
  children?: string | ReactNode | ReactNode[];
  onSubmit?(): void;
}

export interface ISignUp {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
  onChange(id: string, value: string): void;
  onSubmit(): void;
}

export interface ILogin {
  email?: string;
  password?: string;
  onChange(id: string, value: string): void;
  onSubmit(): void;
}

export interface IApplicationForm {
  dateOfBirth: string;
  gender: string;
  address: string;
  preferredLanguage: string;
  educationLevel: string;
  phoneNumber: number;
  onChange(id: string, value: string): void;
  onBack(): void;
  onNext(): void;
}

export interface IApplicationPayment {
  currentPaymentId?: string;
  payments: IPaymentCard[];
  onSubmitApplication(): void;
  onBack(): void;
  onPaymentIdChange(id: string): void;
}
