import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {CartService} from "../../../services/cart.service";
import {Subscription} from "rxjs";
import {Cart} from "../../../models/cart";

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

  constructor(private cartService: CartService) { }

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
  }

}
