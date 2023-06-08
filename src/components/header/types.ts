export interface IHeaderNavItem {
  id: string;
  label: string;
  onClick(): void;
}

export interface IHeader {
  navItems: IHeaderNavItem[];
  onRegisterOrLogin(): void;
  currentPage: string;
}
