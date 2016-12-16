import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
