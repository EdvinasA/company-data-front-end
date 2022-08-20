import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartItem } from '../../../models/cart';
import { User } from '../../../models/user';
import { ViewedItem } from '../../../models/viewed-item';
import { CartService } from '../../../services/cart.service';
import { ConverterService } from '../../../services/converter.service';
import { UserService } from '../../../services/user.service';
import { ViewedItemsService } from '../../../services/viewed-items.service';
import { ProductToCartDialogComponent } from '../../products-list/product-to-cart-dialog/product-to-cart-dialog.component';

@Component({
  selector: 'app-viewed-items',
  templateUrl: './viewed-items.component.html',
  styleUrls: ['./viewed-items.component.scss'],
})
export class ViewedItemsComponent implements OnInit {
  user!: User | null;
  viewedItems: ViewedItem[] = [];
  isLoading: boolean = true;

  constructor(
    private viewedItemService: ViewedItemsService,
    private userService: UserService,
    private cartService: CartService,
    private convertService: ConverterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((data) => {
      this.user = data;
      this.viewedItemService
        .getViewedItemsByUserId(this.user?.id)
        .subscribe((data) => {
          this.viewedItems = data;
          this.isLoading = false;
        });
    });
  }

  addItemToCart(item: ViewedItem) {
    let cartItem: CartItem =
      this.convertService.convertToCartItemFromViewedItem(item);
    this.cartService.updateCartList(cartItem, this.user?.id);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem,
    });
  }
}
