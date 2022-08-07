import {Component, OnInit, ViewChild} from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartItem} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../product-to-cart-dialog/product-to-cart-dialog.component";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {MatMenuTrigger} from "@angular/material/menu";
import {WishlistItem, WishlistProfiles} from "../../../models/wishlist";
import {WishlistService} from "../../../services/wishlist.service";
import {ConverterService} from "../../../services/converter.service";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  wishlistProfiles: WishlistProfiles[] = [];
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  laptop!: Laptop;
  private user: User | null = {};
  itemQuantity: number = 1;
  itemInsurance: boolean = false;
  itemWarranty: boolean = false;
  isLoading: boolean = true;

  constructor(private productService: ProductsService,
              private cartService: CartService,
              private wishlistService: WishlistService,
              private converterService: ConverterService,
              private userService: UserService,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.productService.getLaptopById(param).subscribe(laptop => {
        this.laptop = laptop;
        this.isLoading = false;
      })
    }
    this.wishlistService.currentProfilesList.asObservable().subscribe(data => {
      this.wishlistProfiles = data;
    })
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

  addItemToCart(item: Laptop) {
    let cartItem: CartItem = this.converterService.convertToCartItemFromProduct(item, this.itemQuantity, this.itemInsurance, this.itemWarranty)
    this.cartService.updateCartList(cartItem);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem
    });
  }

  openMenuOnClick() {
    if (this.wishlistProfiles.length != 1) {
      this.trigger.openMenu();
    } else
    this.trigger.closeMenu();
  }

  addItemToWishlist(item: Laptop, portfolioId: string | unknown) {
    let wishlistItem: WishlistItem = this.converterService.convertToWishlistItemFromProduct(item, portfolioId)
    if (this.user?.id != undefined) {
      this.wishlistService.addItemToWishlist(this.user?.id, wishlistItem).subscribe();
    }
  }

  increaseQuantity() {
   this.itemQuantity += 1;
  }

  decreaseQuantity() {
    this.itemQuantity -= 1;
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.itemQuantity = 1;
    } else
      this.itemQuantity = event.target.value;
  }

}
