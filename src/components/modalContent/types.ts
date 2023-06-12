import { ReactNode } from 'react';

export interface IModalForm {
  onClose(): void;
  type?: 'loginOrSignUp' | 'application';
  children?: string | ReactNode | ReactNode[];
}

export interface ILoginOrSignUp {
  type?: 'login' | 'signUp';
}
