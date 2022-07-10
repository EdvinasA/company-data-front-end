export interface Cart {
  id: string;
  picture: string;
  name: string;
  productCode: string;
  quantity: number;
  price: number;
  insurance: boolean;
  warranty: boolean;
  purchaseDate: Date | null;
}
