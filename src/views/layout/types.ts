import { ReactNode } from 'react';
import { IHeaderNavItem } from '../../components/header/types';

export interface ILayout {
  children: string | ReactNode | ReactNode[];
  headerItems: IHeaderNavItem[];
  onRegisterOrLoginOrLogout(): void;
  registerOrLoginOrLogoutLabel: string;
  currentPage: string;
}
