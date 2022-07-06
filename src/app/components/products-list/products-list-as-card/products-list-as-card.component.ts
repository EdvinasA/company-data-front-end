import {Component, Input, OnInit} from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {MatDialog} from "@angular/material/dialog";
import {ProductToCartDialogComponent} from "../product-to-cart-dialog/product-to-cart-dialog.component";

@Component({
  selector: 'app-products-list-as-card',
  templateUrl: './products-list-as-card.component.html',
  styleUrls: ['./products-list-as-card.component.scss']
})
export class ProductsListAsCardComponent implements OnInit {

  @Input() laptops!: Laptop[];
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalItems!: number;

  constructor(private cartService: CartService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addItemToCart(item: Laptop) {
    let cartItem: Cart = {
      id: item.id,
      picture: item.picture,
      productName: item.name,
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
