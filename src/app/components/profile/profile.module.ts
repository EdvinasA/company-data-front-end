import {NgModule} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {ProfileMenuComponent} from './profile-menu/profile-menu.component';
import {ProfileComponent} from "./profile.component";
import {ProfileDisplayComponent} from './profile-display/profile-display.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ProfileOrderHistoryComponent } from './profile-order-history/profile-order-history.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileMenuComponent,
    ProfileDisplayComponent,
    ProfileOrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ],
  providers: [DecimalPipe],
  exports: [
    ProfileMenuComponent
  ],
  bootstrap: [ProfileComponent]
})

export class ProfileModule {
}
