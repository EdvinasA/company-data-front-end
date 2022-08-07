export type OrderInput = {
  userId: string,
  orderNumber: string,
  collectOption: string,
  paymentMethod: string,
  totalPrice: number,
  orderedItems: OrderedItems[],
  status: string;
}

export type OrderedItems = {
  itemId: string,
  orderId: string,
  picture: string,
  itemName: string,
  itemCode: string,
  itemPrice: number,
  itemQuantity: number,
  itemInsurance: boolean,
  itemWarranty: boolean;
}

export type Order = {
  id: string,
  userId: string,
  orderNumber: string,
  orderDate: string,
  collectionOption: string,
  paymentMethod: string,
  totalPrice: number,
  orderUpdate: string,
  status: string;
}
