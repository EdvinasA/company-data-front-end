export type WishlistProfiles = {
  id:string | unknown;
  name:string;
  items: WishlistItem[];
  userId: string | undefined;
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
