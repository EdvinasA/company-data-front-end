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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductTypesModule} from "../product-types/product-types.module";
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { OptionsOnSideDisplayComponent } from './options-on-side-display/options-on-side-display.component';
import {MatRadioModule} from "@angular/material/radio";
import { DisplayUserInformationComponent } from './display-user-information/display-user-information.component';

@NgModule({
  declarations: [
    ProductAsCardBaseComponent,
    ProgressSpinnerComponent,
    OptionsOnSideDisplayComponent,
    DisplayUserInformationComponent
  ],
  imports: [
    ProductTypesModule,
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
    MatRadioModule
  ],
  providers: [PaginatePipe, DecimalPipe],
  exports: [
    ProductAsCardBaseComponent,
    ProgressSpinnerComponent,
    OptionsOnSideDisplayComponent,
    DisplayUserInformationComponent
  ],
  bootstrap: [ProductAsCardBaseComponent]
})

export class SharedModule {
}
