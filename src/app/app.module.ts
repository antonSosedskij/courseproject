import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentModule } from './shared/components/header/header.component';
import { SearchComponentModule, SearchComponent } from './shared/components/search/search.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdvertCardModule } from './shared/components/advert-card/advert-card.component';
import { AdvertsModule } from './modules/adverts/adverts.module';
import { AdvertsRoutingModule } from './modules/adverts/adverts-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponentModule,
    SearchComponentModule,
    AdvertCardModule,
    AdvertsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
