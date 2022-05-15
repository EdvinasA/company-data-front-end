import {NgModule} from "@angular/core";
import {AppComponent} from "../../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CompanyDataListComponent} from "./company-data-list/company-data-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    CompanyDataListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    CompanyDataListComponent
  ],
  bootstrap: [AppComponent]
})

export class CompanyDataModule { }
