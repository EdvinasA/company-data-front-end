import {Component, OnDestroy, OnInit} from '@angular/core';
import {WishlistItem} from "../../../../models/wishlist";
import {WishlistService} from "../../../../services/wishlist.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Cart} from "../../../../models/cart";
import {CartService} from "../../../../services/cart.service";
import {ProductToCartDialogComponent} from "../../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent implements OnInit {

  items: WishlistItem[] = [];
  wishlistProfileName: string = '';
  wishlistProfileId: string = '';

  constructor(private wishlistService: WishlistService,
              private cartService: CartService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getWishlistProfileDetails(this.route.snapshot.paramMap.get('id'));
    this.setProfileName(this.route.snapshot.paramMap.get('wishlistProfileName'));
  }

  setProfileName(name: string | null) {
    if (name != null) {
      this.wishlistProfileName = name;
    }
  }

  getWishlistProfileDetails(id: string | null) {
    if (id != null) {
      this.wishlistProfileId = id;

      this.wishlistService
      .getWishlistItems('860eb71b-310e-4463-a9ed-7c224dea7eec', id)
      .subscribe(data => {
        this.items = data;
      });
    }
  }

  onClickDeleteItem(itemId: string) {
    this.items = this.items.filter(item => {
      return item.id !== itemId;
    })
    this.wishlistService.deleteWishlistItem('860eb71b-310e-4463-a9ed-7c224dea7eec', itemId).subscribe();
  }

  onClickDeleteProfile(profileId: string) {
    this.wishlistService.deleteWishlistProfile('860eb71b-310e-4463-a9ed-7c224dea7eec', profileId);
    this.router.navigateByUrl('/wishlist')
  }

  addItemToCart(item: WishlistItem) {
    let cartItem: Cart = {
      id: item.itemId,
      picture: item.itemPicture,
      name: item.itemName,
      productCode: '569825',
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