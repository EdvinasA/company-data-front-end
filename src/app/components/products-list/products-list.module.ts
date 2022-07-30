import {NgModule} from "@angular/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {DecimalPipe} from "@angular/common";

import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";

import {ProductsListItemsComponent} from "./products-list-items/products-list-items.component";
import {ProductsListComponent} from "./products-list.component";
import {ProductToCartDialogComponent} from "./product-to-cart-dialog/product-to-cart-dialog.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {SharedModule} from "../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    ProductsListItemsComponent,
    ProductsListComponent,
    ProductToCartDialogComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MatButtonToggleModule,
    NgxPaginationModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  providers: [PaginatePipe, DecimalPipe]
})

export class ProductsListModule {
}
