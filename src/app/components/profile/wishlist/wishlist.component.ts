import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {WishlistService} from "../../../services/wishlist.service";
import {WishlistProfiles} from "../../../models/wishlist";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  wishlistProfiles!: WishlistProfiles[] | null;
  subscription!: Subscription;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.subscription = this.wishlistService.getWishlist("860eb71b-310e-4463-a9ed-7c224dea7eec");
    this.wishlistService.wishlistSubject.subscribe(data => {
      this.wishlistProfiles = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
