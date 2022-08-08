import {Component, OnInit} from '@angular/core';
import {ViewedItem} from "../../../models/viewed-item";
import {ViewedItemsService} from "../../../services/viewed-items.service";
import {CartItem} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {ConverterService} from "../../../services/converter.service";

@Component({
  selector: 'app-viewed-items',
  templateUrl: './viewed-items.component.html',
  styleUrls: ['./viewed-items.component.scss']
})
export class ViewedItemsComponent implements OnInit {

  user: User | null = {};
  viewedItems: ViewedItem[] = [];
  isLoading: boolean = true;

  constructor(private viewedItemService: ViewedItemsService,
              private userService: UserService,
              private cartService: CartService,
              private convertService: ConverterService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(data => {
      this.user = data;
      this.viewedItemService.getViewedItemsByUserId(this.user?.id).subscribe(data => {
        this.viewedItems = data;
        this.isLoading = false;
      })
    })
  }

  addItemToCart(item: ViewedItem) {
    let cartItem: CartItem = this.convertService.convertToCartItemFromViewedItem(item);
    this.cartService.updateCartList(cartItem, this.user?.id);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }
}
