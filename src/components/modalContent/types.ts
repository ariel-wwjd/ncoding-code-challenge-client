import { ReactNode } from 'react';

export interface IModalForm {
  onClose(): void;
  type?: 'loginOrSignUp' | 'application';
  children?: string | ReactNode | ReactNode[];
  course?: string;
}

export interface ILoginOrSignUp {
  type?: 'login' | 'signUp';
}

export interface IApplication {
  course?: string;
  onClose(): void;
}
