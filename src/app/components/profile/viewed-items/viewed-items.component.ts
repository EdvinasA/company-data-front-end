import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-viewed-items',
  templateUrl: './viewed-items.component.html',
  styleUrls: ['./viewed-items.component.scss']
})
export class ViewedItemsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
