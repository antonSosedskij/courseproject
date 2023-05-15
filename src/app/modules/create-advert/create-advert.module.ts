import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdvertComponent } from './pages/create-advert/create-advert.component';
import { CreateAdvertRoutingModule } from './create-advert-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    CreateAdvertComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    CreateAdvertRoutingModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class CreateAdvertModule { }
