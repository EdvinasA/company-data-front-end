import {Component, OnDestroy, OnInit} from '@angular/core';
import {WishlistItem, WishlistProfiles} from "../../../../models/wishlist";
import {Subscription} from "rxjs";
import {WishlistService} from "../../../../services/wishlist.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CreateWishlistDialogComponent} from "../create-wishlist-dialog/create-wishlist-dialog.component";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {

  wishlistProfiles: WishlistProfiles[] = [];
  user!: User | null;
  isLoading: boolean = true;

  constructor(private wishlistService: WishlistService,
              private userService: UserService,
              public dialog: MatDialog,
              public router: Router) { }

  ngOnInit(): void {
    this.wishlistService.currentProfilesList.asObservable().subscribe(data => {
      this.wishlistProfiles = data;
      this.isLoading = false;
    });
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

  items(items: WishlistItem[]) {
    if (items.length > 5) {
      return items.slice(0, 5)
    }
    return items;
  }

  openDialog() {
    this.dialog.open(CreateWishlistDialogComponent, {
      data: this.user
    });
  }

}
