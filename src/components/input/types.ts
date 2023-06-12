export interface IInput {
  id: string;
  label: string;
  placeHolder?: string;
  value?: string;
  onChange(newValue: string): void;
  type?: 'text' | 'email' | 'password' | 'date' | 'number';
}
