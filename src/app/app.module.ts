import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {
  PaginatePipe,
} from "ngx-pagination";
import {MdePopoverModule} from "@material-extended/mde";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {DecimalPipe} from "@angular/common";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginPopoverComponent} from './components/login/login-popover/login-popover.component';
import {LoginUserMenuComponent} from './components/login/login-user-menu/login-user-menu.component';
import {ProductsListModule} from "./components/products-list/products-list.module";
import {CartModule} from "./components/cart/cart.module";
import {CartPopoverComponent} from "./components/cart/cart-popover/cart-popover.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginPopoverComponent,
    LoginUserMenuComponent,
    CartPopoverComponent
  ],
  imports: [
    ProductsListModule,
    CartModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
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
    MdePopoverModule
  ],
  providers: [PaginatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})

export class AppModule {
}
