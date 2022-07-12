import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from "../../../models/laptop";
import {ProductToCartDialogComponent} from "../product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.scss']
})
export class ProductsListItemsComponent implements OnInit {

  @Input() laptops!: Laptop[]
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalItems!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
