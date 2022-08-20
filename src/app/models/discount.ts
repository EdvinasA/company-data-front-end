export type Discount = {

}

export type DiscountResponse = {
  expired: boolean,
  percent: number,
  code: string,
  items: DiscountedItems[],
  forAllItems: boolean
}

export type DiscountedItems = {

}
