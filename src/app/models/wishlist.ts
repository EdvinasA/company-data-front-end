export type WishlistProfiles = {
  id: string | unknown;
  name: string;
  items: WishlistItem[];
  userId: string | undefined;
};

export type WishlistItem = {
  id: string;
  itemId: string;
  itemName: string;
  itemCode: string;
  itemPicture: string;
  itemPrice: number;
  wishListProfileId: string | unknown;
  category: string;
  subCategory: string;
};

export type WishlistCreate = {
  name: string;
};
