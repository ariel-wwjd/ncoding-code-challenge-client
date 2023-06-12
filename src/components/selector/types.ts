export interface ISelectorOption {
  id: string;
  label: string;
}

export interface ISelector {
  options: ISelectorOption[];
  currentOptionId?: string;
  onClick(id: string): void;
}
