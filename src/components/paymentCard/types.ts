export interface IPaymentCard {
  id: string;
  name: string;
  amount: string;
  totalAmount?: string;
  save?: string;
  note?: string;
  interest?: string;
  onClick(is: string): void;
  isSelected?: boolean;
}
