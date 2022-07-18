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
  wishListProfileId: string | unknown;
}

export type WishlistCreate = {
  name: string;
}
