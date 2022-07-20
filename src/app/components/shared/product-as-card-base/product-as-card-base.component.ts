import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {BaseItem} from "../../../models/base-item";
import {CartService} from "../../../services/cart.service";
import {ViewedItemsService} from "../../../services/viewed-items.service";
import {ViewedItem} from "../../../models/viewed-item";

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

  constructor(public dialog: MatDialog,
              public router: Router,
              public cartService: CartService,
              public viewedItemService: ViewedItemsService) {
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
      itemPrice: item.price,
      delivery: true,
      withdrawal: true,
      userId: '860eb71b-310e-4463-a9ed-7c224dea7eec'
    }
    this.viewedItemService.createViewedItem(viewedItem, '860eb71b-310e-4463-a9ed-7c224dea7eec').subscribe();
  }

  getSelectedAmountOfItemsInPage() {
    return Number(this.itemsPerPage);
  }

}
