import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {WishlistService} from "../../../../services/wishlist.service";

@Component({
  selector: 'app-create-wishlist-dialog',
  templateUrl: './create-wishlist-dialog.component.html',
  styleUrls: ['./create-wishlist-dialog.component.scss']
})
export class CreateWishlistDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateWishlistDialogComponent>,
              private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.dialogRef.close();
  }

}
