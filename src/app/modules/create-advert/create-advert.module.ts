import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdvertComponent } from './pages/create-advert/create-advert.component';
import { CreateAdvertRoutingModule } from './create-advert-routing.module';



@NgModule({
  declarations: [
    CreateAdvertComponent
  ],
  imports: [
    CommonModule,
    CreateAdvertRoutingModule
  ]
})
export class CreateAdvertModule { }
