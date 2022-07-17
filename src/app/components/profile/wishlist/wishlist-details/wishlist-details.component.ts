import { Component, OnInit } from '@angular/core';
import {WishlistItem} from "../../../../models/wishlist";
import {WishlistService} from "../../../../services/wishlist.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent implements OnInit {

  items: WishlistItem[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService
    .getWishlistItems('860eb71b-310e-4463-a9ed-7c224dea7eec', '27d41fea-9296-4555-a8a1-e0aace3432cb')
    .subscribe(data => {
      this.items = data;
    });
  }

}
