import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {BaseItem} from "../../../models/base-item";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-as-card-base',
  templateUrl: './product-as-card-base.component.html',
  styleUrls: ['./product-as-card-base.component.scss']
})
export class ProductAsCardBaseComponent<T extends BaseItem> implements OnInit {

  @Input() public item!: T;

  constructor(public dialog: MatDialog,
              public router: Router,
              public cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addItemToCart(item: T) {
    let cartItem: Cart = {
      id: item.id,
      picture: item.picture,
      name: item.name,
      productCode: item.productCode,
      quantity: 1,
      price: item.price,
      insurance: false,
      warranty: false,
      purchaseDate: null
    };
    this.cartService.updateCartList(cartItem);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: Cart) {
    const dialogRef = this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }

}
