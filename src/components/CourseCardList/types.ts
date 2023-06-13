import { ICourseCard } from '../courseCard/types';

export interface ICardList {
  cards: ICourseCard[];
  isLogged?: boolean;
  onEnroll(id: string): void;
}
