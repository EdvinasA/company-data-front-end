import { Component, OnInit } from '@angular/core';
import {Laptop} from "../../../models/laptop";
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  laptop!: Laptop;

  constructor(private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.productService.getLaptopById(param).subscribe(laptop => {
        this.laptop = laptop;
      })
    }
  }

}
