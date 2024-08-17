import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'landing', component: GenericComponent },
    { path: 'manage', component: ManageAccountComponent },
];
