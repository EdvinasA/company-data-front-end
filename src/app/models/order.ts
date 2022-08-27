import { CartItem } from './cart';

export type OrderedItems = {
  itemId: string;
  orderId: string;
  picture: string;
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemQuantity: number;
  itemInsurance: boolean;
  itemWarranty: boolean;
};

export type Order = {
  id: string;
  userId: string;
  orderNumber: string;
  orderDate: string;
  collectionOption: string;
  paymentMethod: string;
  totalPrice: number;
  orderUpdate: string;
  orderedItems: OrderedItem[];
  status: string;
};

export type OrderedItem = {
  id: number;
  itemId: string;
  picture: string;
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemQuantity: number;
  itemInsurance: boolean;
  itemWarranty: boolean;
};

export type OrderInput = {
  userId: string;
  deliveryAddress: string;
  withdrawalLocation: string;
  wantedDeliveryTime: string;
  deliveryOption: string;
  paymentMethod: string;
  totalPrice: number;
  appliedDiscountAmount: number;
  deliveryPrice: number;
  orderedItems: CartItem[];
};
