import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WishlistService} from "../../../../services/wishlist.service";
import {FormControl, Validators} from "@angular/forms";
import {ConverterService} from "../../../../services/converter.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-create-wishlist-dialog',
  templateUrl: './create-wishlist-dialog.component.html',
  styleUrls: ['./create-wishlist-dialog.component.scss']
})
export class CreateWishlistDialogComponent implements OnInit {

  name = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<CreateWishlistDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User | null,
              private wishlistService: WishlistService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  onClickCreateAndClose() {
    this.wishlistService.createWishlist(this.user?.id,
      this.converterService.convertToWishlistBody(this.name));
    this.dialogRef.close();
  }

  onClickClose() {
    this.dialogRef.close();
  }

}
