import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjust path as needed
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AccordionDirectiveComponent } from './accordion-directive/accordion-directive.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirectiveComponent,
    NavbarComponent,
    HomeComponent // Declare your components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Import your routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
