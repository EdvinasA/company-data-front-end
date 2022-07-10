import {NgModule} from "@angular/core";
import {DecimalPipe} from "@angular/common";
import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductLaptopComponent} from "./product-laptop/product-laptop.component";

@NgModule({
  declarations: [
    ProductLaptopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MatButtonToggleModule,
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
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    NgxPaginationModule
  ],
  exports: [
    ProductLaptopComponent
  ],
  providers: [PaginatePipe, DecimalPipe]
})

export class ProductTypesModule {
}
