import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCheckoutInformationComponent } from './components/cart/cart-checkout-information/cart-checkout-information.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutCreditCartComponent } from './components/cart/checkout/checkout-credit-cart/checkout-credit-cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesListComponent } from './components/categories/sub-categories-list/sub-categories-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-list/product-details/product-details.component';
import { ProductsListItemsComponent } from './components/products-list/products-list-items/products-list-items.component';
import { ProfileDisplayComponent } from './components/profile/profile-display/profile-display.component';
import { OrderDetailsComponent } from './components/profile/profile-order-history/order-details/order-details.component';
import { OrderListComponent } from './components/profile/profile-order-history/order-list/order-list.component';
import { ProfileOrderHistoryComponent } from './components/profile/profile-order-history/profile-order-history.component';
import { SubscriptionsComponent } from './components/profile/subscriptions/subscriptions.component';
import { ViewedItemsComponent } from './components/profile/viewed-items/viewed-items.component';
import { WishlistDetailsComponent } from './components/profile/wishlist/wishlist-details/wishlist-details.component';
import { WishlistListComponent } from './components/profile/wishlist/wishlist-list/wishlist-list.component';
import { WishlistComponent } from './components/profile/wishlist/wishlist.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: '', component: CartListComponent },
      { path: 'shipping', component: CartCheckoutInformationComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [{ path: '', component: CheckoutCreditCartComponent }],
  },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  {
    path: 'viewed-items',
    component: ViewedItemsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile',
    component: ProfileDisplayComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'orders',
    component: ProfileOrderHistoryComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: OrderListComponent },
      { path: ':id', component: OrderDetailsComponent },
    ],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', component: WishlistListComponent },
      { path: ':id/:wishlistProfileName', component: WishlistDetailsComponent },
    ],
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'category',
    component: CategoriesComponent,
    children: [
      {
        path: ':category',
        data: {
          breadcrumb: 'category',
        },
        component: SubCategoriesListComponent,
      },
      {
        path: ':category/:subCategory',
        component: ProductsListItemsComponent,
      },
      {
        path: ':category/:subCategory/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
