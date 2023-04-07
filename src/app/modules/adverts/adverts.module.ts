import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsRecComponent } from './pages/adverts-rec/adverts-rec.component';
import { AdvertRecViewComponent } from './pages/advert-rec-view/advert-rec-view.component';
import { AdvertCardModule } from 'src/app/shared/components/advert-card/advert-card.component';
import { AdvertsRoutingModule } from './adverts-routing.module';
import {ViewAdvertModule } from 'src/app/shared/components/view-advert/view-advert.component';



@NgModule({
  declarations: [
    AdvertsRecComponent,
    AdvertRecViewComponent
  ],
  imports: [
    CommonModule,
    AdvertCardModule,
    AdvertsRoutingModule,
    ViewAdvertModule
  ]
})
export class AdvertsModule { }
