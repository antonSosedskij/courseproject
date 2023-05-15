import { Component, NgModule } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-phone-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.scss']
})
export class PhoneDialogComponent {

}

@NgModule({
  declarations: [PhoneDialogComponent],
  exports: [PhoneDialogComponent],
  imports: [
    DynamicDialogModule,
  ],
}
)
export class PhoneDialogModule {

}