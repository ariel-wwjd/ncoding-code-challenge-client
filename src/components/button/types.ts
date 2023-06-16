import { IconsType } from '../icons/types';

export enum ButtonType {
  quadrate = 'QUADRATE',
  spherical = 'SPHERICAL',
  rounded = 'ROUNDED',
}

export enum ButtonSize {
  normal = 'NORMAL',
  small = 'SMALL',
}

export interface IButton {
  label: string;
  icon?: IconsType;
  type: ButtonType;
  size?: ButtonSize;
  onClick(): void;
}
