import {Component, OnInit} from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {ProductAsCardBaseComponent} from "../../shared/product-as-card-base/product-as-card-base.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-list-as-card',
  templateUrl: './products-list-as-card.component.html',
  styleUrls: ['./products-list-as-card.component.scss']
})
export class ProductsListAsCardComponent extends ProductAsCardBaseComponent<Laptop> implements OnInit {

  constructor(private cartService: CartService,
              public dialog: MatDialog,
              public router: Router) {
    super(dialog, router);
  }

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
}
