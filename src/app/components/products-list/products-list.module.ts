import {NgModule} from "@angular/core";
import {ProductsListAsCardComponent} from "./products-list-as-card/products-list-as-card.component";
import {ProductsListItemsComponent} from "./products-list-items/products-list-items.component";
import {ProductsListComponent} from "./products-list.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {ProductToCartDialogComponent} from "./product-to-cart-dialog/product-to-cart-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {DecimalPipe} from "@angular/common";

@NgModule({
  declarations: [
    ProductsListAsCardComponent,
    ProductsListItemsComponent,
    ProductsListComponent,
    ProductToCartDialogComponent
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
    MatIconModule
  ],
  providers: [PaginatePipe, DecimalPipe],
})

export class ProductsListModule {
}
