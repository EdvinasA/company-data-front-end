import { Component, OnInit } from '@angular/core';
import {Page} from "../../../models/page";
import {Subscription} from "rxjs";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  page: {} = {};
  // subscription!: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.page = this.productsService
    .pageSubject;
  }

}
