export interface IHeaderNavItem {
  id: string;
  label: string;
  onClick(): void;
}

export interface IHeader {
  navItems: IHeaderNavItem[];
  onRegisterOrLoginOrLogout(): void;
  registerOrLoginOrLogoutLabel: string;
  currentPage: string;
}
