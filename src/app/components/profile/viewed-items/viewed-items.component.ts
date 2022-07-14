import { Component, OnInit } from '@angular/core';
import {Page} from "../../../models/page";
import {Subscription} from "rxjs";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-viewed-items',
  templateUrl: './viewed-items.component.html',
  styleUrls: ['./viewed-items.component.scss']
})
export class ViewedItemsComponent implements OnInit {

  itemsPage!: Page | null;
  subscription!: Subscription;
  selectedPageAmount = "8";
  page = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.subscription = this.productsService
    .getPagedListOfLaptops(this.selectedPageAmount, this.page)
    this.productsService.pageSubject.asObservable().subscribe(page => {
      this.itemsPage = page;
    })
  }

}
