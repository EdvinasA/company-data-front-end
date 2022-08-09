import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import {MdePopoverModule} from "@material-extended/mde";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {PaginatePipe} from "ngx-pagination";

import {CartDeliveryComponent} from "./cart-delivery/cart-delivery.component";
import {CartComponent} from "./cart.component";
import { CheckoutComponent } from './checkout/checkout.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    CartDeliveryComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MdePopoverModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CheckoutComponent
  ],
  providers: [PaginatePipe, DecimalPipe]
})

export class CartModule {
}
