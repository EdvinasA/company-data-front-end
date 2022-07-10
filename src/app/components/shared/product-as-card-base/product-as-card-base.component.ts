import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {BaseItem} from "../../../models/base-item";

@Component({
  selector: 'app-product-as-card-base',
  templateUrl: './product-as-card-base.component.html',
  styleUrls: ['./product-as-card-base.component.scss']
})
export class ProductAsCardBaseComponent<T extends BaseItem> implements OnInit {

  @Input() public items!: T[];
  @Input() public itemsPerPage!: number;
  @Input() public currentPage!: number;
  @Input() public totalItems!: number;

  constructor(public dialog: MatDialog,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  addItemToCart(item: T) {
  }

  openAddedItemToCartDialog(cartItem: Cart) {
    const dialogRef = this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }

}
