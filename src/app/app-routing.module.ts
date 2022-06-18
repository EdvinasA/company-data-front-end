import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyDataComponent} from "./components/company-data/company-data.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {CartComponent} from "./components/cart/cart.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ProductsListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
