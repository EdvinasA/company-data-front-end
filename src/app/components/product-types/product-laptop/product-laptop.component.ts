import {Component, Input, OnInit} from '@angular/core';
import {ProductAsCardBaseComponent} from "../../shared/product-as-card-base/product-as-card-base.component";
import {Laptop} from "../../../models/laptop";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-laptop',
  templateUrl: './product-laptop.component.html',
  styleUrls: ['./product-laptop.component.scss']
})
export class ProductLaptopComponent extends ProductAsCardBaseComponent<Laptop> implements OnInit {

  // Pass input as ID, find in the list of items the needed one and display the rest of the information
  @Input() item!: Laptop;

  constructor(public cartService: CartService,
              public dialog: MatDialog,
              public router: Router) {
    super(dialog, router, cartService);
  }

  ngOnInit(): void {
  }

}
