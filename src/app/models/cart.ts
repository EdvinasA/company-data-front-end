export class Cart {
  id!: string;
  cartItems!: CartItem[];
  purchaseDate!: Date | null;
  userId!: string;
  status!: string;
}

export class CartItem {
  itemId!: string;
  picture!: string;
  itemName!: string;
  itemCode!: string;
  itemQuantity!: number;
  itemPrice!: number;
  itemInsurance!: boolean;
  itemWarranty!: boolean;
}
