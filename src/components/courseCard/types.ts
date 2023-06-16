export interface ICourseCard {
  id: string;
  name: string;
  title: string;
  description: string;
  review: {
    stars: number;
    people: number;
  };
  duration: string;
  action?: {
    buttonLabel: string;
    onButtonClick(id: string): void;
  };
}
