import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentModule } from './shared/components/header/header.component';
import { SearchComponentModule, SearchComponent } from './shared/components/search/search.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponentModule,
    SearchComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
