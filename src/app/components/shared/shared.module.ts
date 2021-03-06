import {NgModule} from "@angular/core";
import {DecimalPipe} from "@angular/common";
import {ProductAsCardBaseComponent} from "./product-as-card-base/product-as-card-base.component";
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
import {ProductTypesModule} from "../product-types/product-types.module";

@NgModule({
  declarations: [
    ProductAsCardBaseComponent
  ],
  imports: [
    ProductTypesModule,
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
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    NgxPaginationModule
  ],
  providers: [PaginatePipe, DecimalPipe],
  exports: [
    ProductAsCardBaseComponent
  ],
  bootstrap: [ProductAsCardBaseComponent]
})

export class SharedModule {
}
