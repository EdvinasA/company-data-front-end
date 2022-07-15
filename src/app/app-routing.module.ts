import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductDetailsComponent} from "./components/products-list/product-details/product-details.component";
import {ProfileDisplayComponent} from "./components/profile/profile-display/profile-display.component";
import {ProfileOrderHistoryComponent} from "./components/profile/profile-order-history/profile-order-history.component";
import {WishlistComponent} from "./components/profile/wishlist/wishlist.component";
import {SubscriptionsComponent} from "./components/profile/subscriptions/subscriptions.component";
import {ViewedItemsComponent} from "./components/profile/viewed-items/viewed-items.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileDisplayComponent},
  {path: 'orders', component: ProfileOrderHistoryComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'viewed-items', component: ViewedItemsComponent},
  {path: 'subscriptions', component: SubscriptionsComponent},
  {
    path: '', component: ProductsListComponent
  },
  { path: ':id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
