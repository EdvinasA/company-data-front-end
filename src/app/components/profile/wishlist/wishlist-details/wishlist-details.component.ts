import {Component, OnInit} from '@angular/core';
import {WishlistItem} from "../../../../models/wishlist";
import {WishlistService} from "../../../../services/wishlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartItem} from "../../../../models/cart";
import {CartService} from "../../../../services/cart.service";
import {ProductToCartDialogComponent} from "../../../products-list/product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user";
import {ConverterService} from "../../../../services/converter.service";

@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent implements OnInit {

  items: WishlistItem[] = [];
  wishlistProfileName: string = '';
  wishlistProfileId: string = '';
  user: User | null = {};
  isLoading: boolean = true;

  constructor(private wishlistService: WishlistService,
              private cartService: CartService,
              private userService: UserService,
              private converterService: ConverterService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getWishlistProfileDetails(this.route.snapshot.paramMap.get('id'));
    this.setProfileName(this.route.snapshot.paramMap.get('wishlistProfileName'));
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.isLoading = false;
    })
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
      .getWishlistItems(this.user?.id, id)
      .subscribe(data => {
        this.items = data;
      });
    }
  }

  onClickDeleteItem(itemId: string) {
    this.items = this.items.filter(item => {
      return item.id !== itemId;
    })
    this.wishlistService.deleteWishlistItem(this.user?.id, itemId).subscribe();
  }

  onClickDeleteProfile(profileId: string) {
    this.wishlistService.deleteWishlistProfile(this.user?.id, profileId);
    this.router.navigateByUrl('/wishlist')
  }

  addItemToCart(item: WishlistItem) {
    let cartItem: CartItem = this.converterService.convertToCartItemFromWishlist(item);
    this.cartService.updateCartList(cartItem);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }
}
