import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesComponent } from './categories.component';
import { SubCategoriesListComponent } from './sub-categories-list/sub-categories-list.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    SubCategoriesListComponent,
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
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CategoriesComponent,
    CategoriesListComponent
  ]
})
// @ts-ignore
export class CategoriesModule {}
