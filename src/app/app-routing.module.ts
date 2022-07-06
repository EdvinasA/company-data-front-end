import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductDetailsComponent} from "./components/products-list/product-details/product-details.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: '', component: ProductsListComponent,
    children: [{ path: ':id', component: ProductDetailsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
