import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AccordionDirectiveComponent } from './accordion-directive/accordion-directive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GenericComponent } from './generic/generic.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './carousal/carousal.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EndPointInterceptor } from './interceptor/end-point.interceptor';
import { CommonModule } from '@angular/common';  
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirectiveComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CarousalComponent,
    LoginComponent,
    GenericComponent,
    CompareComponent,
    AccountComponent,
    ManageAccountComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EndPointInterceptor,
      multi: true
    }
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
