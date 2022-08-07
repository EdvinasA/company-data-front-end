import {Component, Input, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {BaseItem} from "../../../models/base-item";
import {CartService} from "../../../services/cart.service";
import {ViewedItemsService} from "../../../services/viewed-items.service";
import {ViewedItem} from "../../../models/viewed-item";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-product-as-card-base',
  templateUrl: './product-as-card-base.component.html',
  styleUrls: ['./product-as-card-base.component.scss']
})
export class ProductAsCardBaseComponent<T extends BaseItem> implements OnInit {

  @Input() public items!: T[];
  @Input() public itemsPerPage!: string;
  @Input() public totalElements: number = 0;
  @Input() public currentPage: number = 0;
  @Input() public user!: User | null;

  constructor(public dialog: MatDialog,
              public router: Router,
              public cartService: CartService,
              public viewedItemService: ViewedItemsService) {
  }

  ngOnInit(): void {
  }

  addItemToCart(item: T) {
    let cartItem: CartItem = {
      itemId: item.id,
      picture: item.picture,
      itemName: item.name,
      itemCode: item.productCode,
      itemQuantity: 1,
      itemPrice: item.price,
      itemInsurance: false,
      itemWarranty: false
    };
    this.cartService.updateCartList(cartItem);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
   this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }

  addItemToViewedItems(item: T) {
    let viewedItem: ViewedItem = {
      id: '',
      itemId: item.id,
      itemName: item.name,
      itemPicture: item.picture,
      itemCode: item.productCode,
      itemPrice: item.price,
      delivery: true,
      withdrawal: true,
      userId: this.user?.id
    }
    this.viewedItemService.createViewedItem(viewedItem, this.user?.id).subscribe();
  }

  getSelectedAmountOfItemsInPage() {
    return Number(this.itemsPerPage);
  }

}
