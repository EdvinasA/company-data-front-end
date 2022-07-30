import {NgModule} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";
import {MdePopoverModule} from "@material-extended/mde";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";

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
import {CategoriesComponent} from './components/categories/categories.component';
import {ProfileModule} from "./components/profile/profile.module";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPopoverComponent,
    LoginUserMenuComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CartPopoverComponent,
    CategoriesComponent
  ],
  imports: [
    ProductsListModule,
    CartModule,
    ProfileModule,
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
    MdePopoverModule,
    MatMenuModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
  ],
  providers: [PaginatePipe, DecimalPipe, AuthenticationGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
