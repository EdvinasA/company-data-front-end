export type ViewedItem = {
  id: string;
  itemId: string;
  itemPicture: string;
  itemName: string;
  itemCode: string;
  itemPrice: number;
  delivery: boolean;
  withdrawal:boolean;
  userId: string | undefined;
}
