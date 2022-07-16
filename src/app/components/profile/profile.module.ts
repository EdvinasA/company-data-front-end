import {NgModule} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {ProfileMenuComponent} from './profile-menu/profile-menu.component';
import {ProfileComponent} from "./profile.component";
import {ProfileDisplayComponent} from './profile-display/profile-display.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ProfileOrderHistoryComponent } from './profile-order-history/profile-order-history.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewedItemsComponent } from './viewed-items/viewed-items.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import {ProductsListModule} from "../products-list/products-list.module";
import {SharedModule} from "../shared/shared.module";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { CreateWishlistDialogComponent } from './wishlist/create-wishlist-dialog/create-wishlist-dialog.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileMenuComponent,
    ProfileDisplayComponent,
    ProfileOrderHistoryComponent,
    WishlistComponent,
    ViewedItemsComponent,
    SubscriptionsComponent,
    CreateWishlistDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    ProductsListModule,
    SharedModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [DecimalPipe],
  exports: [
    ProfileMenuComponent
  ],
  bootstrap: [ProfileComponent]
})

export class ProfileModule {
}
