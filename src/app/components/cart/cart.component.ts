import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    this.quantity -= 1;
  }

  handleNegativeValue(event: any) {
    console.log(event.target.value);
    let number = Number(event.target.value);
    if (isNaN(number)) {
      this.quantity = 1;
    }
  }

}
