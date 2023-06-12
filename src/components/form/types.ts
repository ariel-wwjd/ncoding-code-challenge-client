import { ReactNode } from 'react';

export interface IForm {
  children?: string | ReactNode | ReactNode[];
  onSubmit(): void;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  onChange(id: string, value: string): void;
}

export interface ILogin {
  email: string;
  password: string;
  onChange(id: string, value: string): void;
}
