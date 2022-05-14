import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyDataComponent} from "./components/company-data/company-data.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: '', component: CompanyDataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
