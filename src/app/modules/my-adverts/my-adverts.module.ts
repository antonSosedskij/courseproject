import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdvertsComponent } from './pages/my-adverts/my-adverts.component';
import { MyAdvertViewComponent } from './pages/my-advert-view/my-advert-view.component';



@NgModule({
  declarations: [
    MyAdvertsComponent,
    MyAdvertViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyAdvertsModule { }
