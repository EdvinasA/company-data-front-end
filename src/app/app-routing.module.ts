import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyDataComponent} from "./components/company-data/company-data.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: CompanyDataComponent, canActivate: [AuthenticationGuard]},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
