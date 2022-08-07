export type Cart = {
  id: string;
  cartItems: CartItem[],
  purchaseDate: Date | null;
  userId: string,
  status: string,
}

export type CartItem = {
  itemId: string,
  picture: string,
  itemName: string,
  itemCode: string,
  itemQuantity: number,
  itemPrice: number,
  itemInsurance: boolean,
  itemWarranty: boolean
}
