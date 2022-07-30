import {Component, OnInit, ViewChild} from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cart} from "../../../models/cart";
import {ProductToCartDialogComponent} from "../product-to-cart-dialog/product-to-cart-dialog.component";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {MatMenuTrigger} from "@angular/material/menu";
import {WishlistItem, WishlistProfiles} from "../../../models/wishlist";
import {WishlistService} from "../../../services/wishlist.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  wishlistProfiles: WishlistProfiles[] = [];
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  laptop!: Laptop;
  itemQuantity: number = 1;
  itemInsurance: boolean = false;
  itemWarranty: boolean = false;
  isLoading: boolean = true;

  constructor(private productService: ProductsService,
              private cartService: CartService,
              private wishlistService: WishlistService,
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
    this.wishlistService.currentProfilesList.subscribe(data => {
      this.wishlistProfiles = data;
    })
  }

  addItemToCart(item: Laptop) {
    let cartItem: Cart = {
      id: item.id,
      picture: item.picture,
      name: item.name,
      productCode: item.productCode,
      quantity: this.itemQuantity,
      price: item.price,
      insurance: this.itemInsurance,
      warranty: this.itemWarranty,
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

  openMenuOnClick() {
    if (this.wishlistProfiles.length != 1) {
      this.trigger.openMenu();
    } else
    this.trigger.closeMenu();
  }

  addItemToWishlist(item: Laptop, portfolioId: string | unknown) {
    let wishlistItem: WishlistItem = {
      id: '',
      itemId: item.id,
      itemPicture: item.picture,
      itemPrice: item.price,
      itemName: item.name,
      wishListProfileId: portfolioId,
    }
    this.wishlistService.addItemToWishlist('60eb71b-310e-4463-a9ed-7c224dea7eec', wishlistItem).subscribe();
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
