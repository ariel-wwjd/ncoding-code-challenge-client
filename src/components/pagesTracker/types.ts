export interface IPage {
  id: string;
  page: number;
  name: string;
}

export interface IPagesTracker {
  pages: IPage[];
  currentPageId?: string;
}
