import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../../../models/cart';
import { Product } from '../../../models/product';
import { User } from '../../../models/user';
import { WishlistItem, WishlistProfiles } from '../../../models/wishlist';
import { CartService } from '../../../services/cart.service';
import { ConverterService } from '../../../services/converter.service';
import { ProductsService } from '../../../services/products.service';
import { UserService } from '../../../services/user.service';
import { WishlistService } from '../../../services/wishlist.service';
import { ProductToCartDialogComponent } from '../product-to-cart-dialog/product-to-cart-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public wishlistProfiles: WishlistProfiles[] = [];
  @ViewChild(MatMenuTrigger) public trigger!: MatMenuTrigger;
  public laptop!: Product;
  public user!: User | null;
  public itemQuantity: number = 1;
  public itemInsurance: boolean = false;
  public itemWarranty: boolean = false;
  public isLoading: boolean = true;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private converterService: ConverterService,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.productService.getLaptopById(param).subscribe((laptop) => {
        this.laptop = laptop;
        this.isLoading = false;
      });
    }
    this.wishlistService.currentProfilesList
      .asObservable()
      .subscribe((data) => {
        this.wishlistProfiles = data;
      });
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
    });
  }

  addItemToCart(item: Product) {
    let cartItem: CartItem = this.converterService.convertToCartItemFromProduct(
      item,
      this.itemQuantity,
      this.itemInsurance,
      this.itemWarranty
    );
    this.cartService.updateCartList(cartItem, this.user?.id);
    this.openAddedItemToCartDialog(cartItem);
  }

  openAddedItemToCartDialog(cartItem: CartItem) {
    this.dialog.open(ProductToCartDialogComponent, {
      data: cartItem,
    });
  }

  openMenuOnClick() {
    if (this.wishlistProfiles.length != 1) {
      this.trigger.openMenu();
    } else this.trigger.closeMenu();
  }

  addItemToWishlist(item: Product, portfolioId: string | unknown) {
    let wishlistItem: WishlistItem =
      this.converterService.convertToWishlistItemFromProduct(item, portfolioId);
    if (this.user?.id != undefined) {
      this.wishlistService
        .addItemToWishlist(this.user?.id, wishlistItem)
        .subscribe();
    }
  }

  increaseQuantity() {
    this.itemQuantity += 1;
  }

  decreaseQuantity() {
    this.itemQuantity -= 1;
  }

  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      this.itemQuantity = 1;
    } else this.itemQuantity = event.target.value;
  }
}
