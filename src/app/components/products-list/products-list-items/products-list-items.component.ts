import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.scss'],
})
export class ProductsListItemsComponent implements OnInit {
  @Input() laptops!: Product[];
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalItems!: number;

  constructor() {}

  ngOnInit(): void {}
}
