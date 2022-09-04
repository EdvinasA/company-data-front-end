export class Cart {
  id!: string;
  cartItems!: CartItem[];
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
