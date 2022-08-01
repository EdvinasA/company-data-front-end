import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import {MdePopoverModule} from "@material-extended/mde";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {PaginatePipe} from "ngx-pagination";

import {CartDeliveryComponent} from "./cart-delivery/cart-delivery.component";
import {CartTotalComponent} from "./cart-total/cart-total.component";
import {CartComponent} from "./cart.component";
import { CheckoutComponent } from './checkout/checkout.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    CartDeliveryComponent,
    CartTotalComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MdePopoverModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CheckoutComponent
  ],
  providers: [PaginatePipe, DecimalPipe]
})

export class CartModule {
}
