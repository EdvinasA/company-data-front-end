import {Component, OnDestroy, OnInit} from '@angular/core';
import {WishlistItem, WishlistProfiles} from "../../../../models/wishlist";
import {Subscription} from "rxjs";
import {WishlistService} from "../../../../services/wishlist.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CreateWishlistDialogComponent} from "../create-wishlist-dialog/create-wishlist-dialog.component";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {
  wishlistProfiles: WishlistProfiles[] = [];

  constructor(private wishlistService: WishlistService,
              public dialog: MatDialog,
              public router: Router) { }

  ngOnInit(): void {
    this.wishlistService.currentProfilesList.subscribe(data => {
      this.wishlistProfiles = data;
    });
  }

  items(items: WishlistItem[]) {
    if (items.length > 5) {
      return items.slice(0, 5)
    }
    return items;
  }

  openDialog() {
    this.dialog.open(CreateWishlistDialogComponent);
  }

}