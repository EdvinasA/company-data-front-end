import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { DeliveryInformationFormComponent } from './delivery-information-form/delivery-information-form.component';
import { DisplayUserInformationComponent } from './display-user-information/display-user-information.component';
import { OptionsOnSideDisplayComponent } from './options-on-side-display/options-on-side-display.component';
import { ProductAsCardBaseComponent } from './product-as-card-base/product-as-card-base.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    ProductAsCardBaseComponent,
    ProgressSpinnerComponent,
    OptionsOnSideDisplayComponent,
    DisplayUserInformationComponent,
    DeliveryInformationFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
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
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
  providers: [PaginatePipe, DecimalPipe],
  exports: [
    ProductAsCardBaseComponent,
    ProgressSpinnerComponent,
    OptionsOnSideDisplayComponent,
    DisplayUserInformationComponent,
    DeliveryInformationFormComponent,
  ],
  bootstrap: [ProductAsCardBaseComponent],
})
export class SharedModule {}
