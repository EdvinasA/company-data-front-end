import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ProductsListModule } from '../products-list/products-list.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { OrderDetailsComponent } from './profile-order-history/order-details/order-details.component';
import { OrderListComponent } from './profile-order-history/order-list/order-list.component';
import { ProfileOrderHistoryComponent } from './profile-order-history/profile-order-history.component';
import { ProfileComponent } from './profile.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ViewedItemsComponent } from './viewed-items/viewed-items.component';
import { CreateWishlistDialogComponent } from './wishlist/create-wishlist-dialog/create-wishlist-dialog.component';
import { WishlistDetailsComponent } from './wishlist/wishlist-details/wishlist-details.component';
import { WishlistListComponent } from './wishlist/wishlist-list/wishlist-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

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
    WishlistDetailsComponent,
    WishlistListComponent,
    OrderDetailsComponent,
    OrderListComponent,
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
    MatSlideToggleModule,
    RouterModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  providers: [DecimalPipe],
  exports: [ProfileMenuComponent],
  bootstrap: [ProfileComponent],
})
export class ProfileModule {}
