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

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
}
