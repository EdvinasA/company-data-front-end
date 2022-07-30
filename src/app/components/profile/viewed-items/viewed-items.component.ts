import {Component, OnInit} from '@angular/core';
import {ViewedItem} from "../../../models/viewed-item";
import {ViewedItemsService} from "../../../services/viewed-items.service";
import {Cart} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-viewed-items',
  templateUrl: './viewed-items.component.html',
  styleUrls: ['./viewed-items.component.scss']
})
export class ViewedItemsComponent implements OnInit {

  viewedItems: ViewedItem[] = [];
  isLoading: boolean = true;

  constructor(private viewedItemService: ViewedItemsService,
              private cartService: CartService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.viewedItemService.getViewedItemsByUserId('860eb71b-310e-4463-a9ed-7c224dea7eec').subscribe(data => {
      this.viewedItems = data;
      this.isLoading = false;
    })
  }

  addItemToCart(item: ViewedItem) {
    let cartItem: Cart = {
      id: item.id,
      picture: item.itemPicture,
      name: item.itemName,
      productCode: item.itemCode,
      quantity: 1,
      price: item.itemPrice,
      insurance: false,
      warranty: false,
      purchaseDate: null
    };
    this.cartService.updateCartList(cartItem);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: Cart) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }
}
