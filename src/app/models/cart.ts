export interface Cart {
  id: string;
  picture: string;
  productName: string;
  productCode: string;
  quantity: number;
  price: number;
  insurance: boolean;
  warranty: boolean;
  purchaseDate: Date | null;
}
