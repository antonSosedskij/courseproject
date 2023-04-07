import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdvertsComponent } from './pages/my-adverts/my-adverts.component';
import { MyAdvertViewComponent } from './pages/my-advert-view/my-advert-view.component';
import { MyAdvertsRoutingModule } from './my-adverts-routing.module';
import { ViewAdvertModule } from 'src/app/shared/components/view-advert/view-advert.component';



@NgModule({
  declarations: [
    MyAdvertsComponent,
    MyAdvertViewComponent
  ],
  imports: [
    CommonModule,
    MyAdvertsRoutingModule,
    ViewAdvertModule
  ]
})
export class MyAdvertsModule { }
