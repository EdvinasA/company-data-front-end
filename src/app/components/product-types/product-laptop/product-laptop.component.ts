import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Laptop } from '../../../models/laptop';
import { CartService } from '../../../services/cart.service';
import { ProductsService } from '../../../services/products.service';
import { ViewedItemsService } from '../../../services/viewed-items.service';
import { ProductAsCardBaseComponent } from '../../shared/product-as-card-base/product-as-card-base.component';

@Component({
  selector: 'app-product-laptop',
  templateUrl: './product-laptop.component.html',
  styleUrls: ['./product-laptop.component.scss'],
})
export class ProductLaptopComponent
  extends ProductAsCardBaseComponent<Laptop>
  implements OnInit
{
  @Input() itemId!: string;
  product!: Laptop;

  constructor(
    public cartService: CartService,
    public dialog: MatDialog,
    public router: Router,
    private productsService: ProductsService,
    public viewedItemService: ViewedItemsService
  ) {
    super(dialog, router, cartService, viewedItemService);
  }

  ngOnInit(): void {
    this.productsService.getLaptopById(this.itemId).subscribe((item) => {
      this.product = item;
    });
  }
}
