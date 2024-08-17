import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirectiveComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    GenericComponent,
    CompareComponent,
    ManageAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
