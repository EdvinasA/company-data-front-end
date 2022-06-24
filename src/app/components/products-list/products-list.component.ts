import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Page } from "../../models/page";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  public pageOfLaptops!: Page;
  subscription!: Subscription;
  selectedOption = "popular";
  selectedPageAmount = "5";
  currentPage = 1;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.subscription = this.productsService
    .getPagedListOfLaptops(this.selectedPageAmount)
    .subscribe(page => {
      this.pageOfLaptops = page;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSelectedPageAmount() {
    return Number(this.selectedPageAmount);
  }
}
