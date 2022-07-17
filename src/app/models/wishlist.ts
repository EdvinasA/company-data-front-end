export type WishlistProfiles = {
  id:string | unknown;
  name:string;
  items: WishlistItem[];
  userId: string;
}

export type WishlistItem = {
  id: string,
  itemId: string,
  itemName: string;
  itemPicture: string;
  itemPrice: number;
}

export type WishlistCreate = {
  name: string;
}
