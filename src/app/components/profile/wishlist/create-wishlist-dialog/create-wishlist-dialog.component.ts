import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {WishlistService} from "../../../../services/wishlist.service";
import {FormControl, Validators} from "@angular/forms";
import {ConverterService} from "../../../../services/converter.service";

@Component({
  selector: 'app-create-wishlist-dialog',
  templateUrl: './create-wishlist-dialog.component.html',
  styleUrls: ['./create-wishlist-dialog.component.scss']
})
export class CreateWishlistDialogComponent implements OnInit {

  name = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<CreateWishlistDialogComponent>,
              private wishlistService: WishlistService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  onClickCreateAndClose() {
    this.wishlistService.createWishlist("860eb71b-310e-4463-a9ed-7c224dea7eec",
      this.converterService.convertToWishlistBody(this.name));
    this.dialogRef.close();
  }

  onClickClose() {
    this.dialogRef.close();
  }

}
