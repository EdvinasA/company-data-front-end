import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Cart} from "../../../models/cart";

@Component({
  selector: 'app-product-to-cart-dialog',
  templateUrl: './product-to-cart-dialog.component.html',
  styleUrls: ['./product-to-cart-dialog.component.scss']
})
export class ProductToCartDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public item: Cart) { }

  ngOnInit(): void {
  }

}
