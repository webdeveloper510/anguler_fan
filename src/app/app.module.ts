import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjust path as needed
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AccordionDirectiveComponent } from './accordion-directive/accordion-directive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GenericComponent } from './generic/generic.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './carousal/carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirectiveComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CarousalComponent,
    GenericComponent,
    CompareComponent,
    AccountComponent,
    ManageAccountComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
