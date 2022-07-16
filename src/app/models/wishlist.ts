export type WishlistProfiles = {
  id:string;
  name:string;
  items: WishlistItem[];
  userId: string;
}

export type WishlistItem = {
  itemId: string,
  itemName: string;
  itemPicture: string;
  itemPrice: number;
}

export type WishlistCreate = {
  name: string;
}
