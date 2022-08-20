import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MdePopoverModule } from '@material-extended/mde';
import { PaginatePipe } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { CartCheckoutAcceptFormComponent } from './cart-checkout-information/cart-checkout-accept-form/cart-checkout-accept-form.component';
import { CartCheckoutInformationComponent } from './cart-checkout-information/cart-checkout-information.component';
import { OrderInformationDisplayComponent } from './cart-checkout-information/order-information-display/order-information-display.component';
import { BankComponent } from './cart-checkout-information/payment-options/bank/bank.component';
import { PayThreeComponent } from './cart-checkout-information/payment-options/pay-three/pay-three.component';
import { PayToCourierComponent } from './cart-checkout-information/payment-options/pay-to-courier/pay-to-courier.component';
import { PaymentCardKlixComponent } from './cart-checkout-information/payment-options/payment-card-klix/payment-card-klix.component';
import { DeliveryToHomeComponent } from './cart-checkout-information/shipping-options/delivery-to-home/delivery-to-home.component';
import { WithdrawalAtClientCenterComponent } from './cart-checkout-information/shipping-options/withdrawal-at-client-center/withdrawal-at-client-center.component';
import { WithdrawalFromLocationComponent } from './cart-checkout-information/shipping-options/withdrawal-from-location/withdrawal-from-location.component';
import { CartDeliveryComponent } from './cart-delivery/cart-delivery.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    CartDeliveryComponent,
    CartComponent,
    CheckoutComponent,
    CartCheckoutInformationComponent,
    CartListComponent,
    DeliveryToHomeComponent,
    WithdrawalAtClientCenterComponent,
    WithdrawalFromLocationComponent,
    CartCheckoutAcceptFormComponent,
    BankComponent,
    PaymentCardKlixComponent,
    PayThreeComponent,
    PayToCourierComponent,
    OrderInformationDisplayComponent,
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
    MatStepperModule,
    SharedModule,
  ],
  exports: [CheckoutComponent],
  providers: [PaginatePipe, DecimalPipe],
})
export class CartModule {}
