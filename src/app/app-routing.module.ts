import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust path as needed
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GenericComponent } from './generic/generic.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: GenericComponent },
  { path: 'manage', component: ManageAccountComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
