import { DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MdePopoverModule } from '@material-extended/mde';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartCheckoutHeaderComponent } from './components/cart-checkout-header/cart-checkout-header.component';
import { CartPopoverComponent } from './components/cart/cart-popover/cart-popover.component';
import { CartModule } from './components/cart/cart.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPopoverComponent } from './components/login/login-popover/login-popover.component';
import { LoginUserMenuComponent } from './components/login/login-user-menu/login-user-menu.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsListModule } from './components/products-list/products-list.module';
import { ProfileModule } from './components/profile/profile.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { SubCategoriesListComponent } from './components/categories/sub-categories-list/sub-categories-list.component';

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
    CategoriesComponent,
    CartCheckoutHeaderComponent,
    CategoriesListComponent,
    SubCategoriesListComponent,
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
    MatProgressSpinnerModule,
  ],
  providers: [PaginatePipe, DecimalPipe, AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
