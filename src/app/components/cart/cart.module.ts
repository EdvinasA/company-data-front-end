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
import {CheckoutComponent} from './checkout/checkout.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CartCheckoutInformationComponent} from './cart-checkout-information/cart-checkout-information.component';
import {CartListComponent} from './cart-list/cart-list.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {SharedModule} from "../shared/shared.module";
import { DeliveryToHomeComponent } from './cart-checkout-information/shipping-options/delivery-to-home/delivery-to-home.component';
import { WithdrawalAtClientCenterComponent } from './cart-checkout-information/shipping-options/withdrawal-at-client-center/withdrawal-at-client-center.component';

@NgModule({
  declarations: [
    CartDeliveryComponent,
    CartComponent,
    CheckoutComponent,
    CartCheckoutInformationComponent,
    CartListComponent,
    DeliveryToHomeComponent,
    WithdrawalAtClientCenterComponent
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
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [
    CheckoutComponent
  ],
  providers: [PaginatePipe, DecimalPipe]
})

export class CartModule {
}
