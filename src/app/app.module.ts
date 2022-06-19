import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PopoverModule } from "ngx-smart-popover";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { CompanyDataModule } from "./components/company-data/company-data.module";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListItemsComponent } from './components/products-list/products-list-items/products-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDataComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductsListComponent,
    ProductsListItemsComponent
  ],
  imports: [
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
    CompanyDataModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonToggleModule,
    PopoverModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
