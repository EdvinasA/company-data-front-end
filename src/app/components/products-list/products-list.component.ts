import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Page } from "../../models/page";
import { Subscription } from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ProductToCartDialogComponent} from "./product-to-cart-dialog/product-to-cart-dialog.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  // @ts-ignore
  pageOfLaptops: Page = {};
  subscription!: Subscription;
  selectedOption = "popular";
  defaultProductDisplay = "blocks";
  selectedPageAmount = "8";
  selectedView = false;
  page = 0;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.subscription = this.productsService
    .getPagedListOfLaptops(this.selectedPageAmount, this.page)
    .subscribe(page => {
      this.pageOfLaptops = page;
    })
  }

  changeSizeOfPage(event: string) {
    this.selectedPageAmount = event;
    this.request(this.page, this.selectedPageAmount);
  }

  changePage(event: number) {
    this.page = event;
    this.request(this.page, this.selectedPageAmount);
  }

  request(page: number, size: string) {
    this.productsService
    .getPagedListOfLaptops(size, (page - 1))
    .subscribe(page => {
      this.pageOfLaptops = page;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSecondAmountOfResultValues() {
    if (this.pageOfLaptops.last) {
      return this.pageOfLaptops?.totalElements;
    }
    return this.pageOfLaptops?.numberOfElements * this.getCurrentPage();
  }

  getFirstAmountOfResultValues() {
    if (this.pageOfLaptops.last) {
      return this.pageOfLaptops?.totalElements - this.pageOfLaptops?.numberOfElements + 1;
    }
    return ((this.getCurrentPage() * this.pageOfLaptops?.numberOfElements) - (this.pageOfLaptops?.numberOfElements - 1));
  }

  getCurrentPage() {
    if (this.page === 0) {
      return 1;
    }
    return this.page;
  }
}
