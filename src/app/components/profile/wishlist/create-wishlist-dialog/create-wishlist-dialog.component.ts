import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../models/user';
import { ConverterService } from '../../../../services/converter.service';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-create-wishlist-dialog',
  templateUrl: './create-wishlist-dialog.component.html',
  styleUrls: ['./create-wishlist-dialog.component.scss'],
})
export class CreateWishlistDialogComponent implements OnInit {
  public name = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CreateWishlistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User | null,
    private wishlistService: WishlistService,
    private converterService: ConverterService
  ) {}

  ngOnInit(): void {}

  onClickCreateAndClose() {
    this.wishlistService.createWishlist(
      this.user?.id,
      this.converterService.convertToWishlistBody(this.name)
    );
    this.dialogRef.close();
  }

  onClickClose() {
    this.dialogRef.close();
  }
}
