import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../../../models/user';
import { WishlistItem, WishlistProfiles } from '../../../../models/wishlist';
import { UserService } from '../../../../services/user.service';
import { WishlistService } from '../../../../services/wishlist.service';
import { CreateWishlistDialogComponent } from '../create-wishlist-dialog/create-wishlist-dialog.component';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss'],
})
export class WishlistListComponent implements OnInit {
  public wishlistProfiles: WishlistProfiles[] = [];
  public user!: User | null;
  public isLoading: boolean = true;

  constructor(
    private wishlistService: WishlistService,
    private userService: UserService,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
      if (this.user?.id != undefined) {
        this.wishlistService.getWishlist(this.user?.id);
      }
    });
    this.wishlistService.currentProfilesList
      .asObservable()
      .subscribe((data) => {
        this.wishlistProfiles = data;
        this.isLoading = false;
      });
  }

  items(items: WishlistItem[]) {
    if (items.length > 5) {
      return items.slice(0, 5);
    }
    return items;
  }

  openDialog() {
    this.dialog.open(CreateWishlistDialogComponent, {
      data: this.user,
    });
  }
}
