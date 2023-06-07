export interface IHeaderNavItem {
  id: string;
  label: string;
  isActive: boolean;
  onClick(): void;
}

export interface IHeader {
  navItems: IHeaderNavItem[];
  onRegisterOrLogin(): void;
};
