import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WishlistService} from "../../../services/wishlist.service";
import {WishlistItem, WishlistProfiles} from "../../../models/wishlist";
import {MatDialog} from "@angular/material/dialog";
import {CreateWishlistDialogComponent} from "./create-wishlist-dialog/create-wishlist-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  wishlistProfiles!: WishlistProfiles[] | null;
  subscription!: Subscription;

  constructor(private wishlistService: WishlistService,
              public dialog: MatDialog,
              public router: Router) { }

  ngOnInit(): void {
    this.subscription = this.wishlistService.getWishlist("860eb71b-310e-4463-a9ed-7c224dea7eec");
    this.wishlistService.wishlistSubject.subscribe(data => {
      this.wishlistProfiles = data;
    });
  }

  items(items: WishlistItem[]) {
    if (items.length > 5) {
      return items.slice(0, 5)
    }
    return items;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog() {
    this.dialog.open(CreateWishlistDialogComponent);
  }
}
