import {Component, Input, OnInit} from '@angular/core';
import {Laptop} from "../../../models/laptop";

@Component({
  selector: 'app-products-list-as-card',
  templateUrl: './products-list-as-card.component.html',
  styleUrls: ['./products-list-as-card.component.scss']
})
export class ProductsListAsCardComponent implements OnInit {

  @Input() laptops!: Laptop[];
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalItems!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
