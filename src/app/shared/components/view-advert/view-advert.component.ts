import { Component, Input, NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleryModule } from '../gallery/gallery.component';
import { ButtonModule } from 'primeng/button';
import { AdvertInfoDto } from 'src/app/core/interfaces/advert-info';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PhoneDialogComponent } from '../../modals/phone-dialog/phone-dialog.component';

@Component({
  selector: 'app-view-advert',
  templateUrl: './view-advert.component.html',
  styleUrls: ['./view-advert.component.scss']
})
export class ViewAdvertComponent {

  @Input() advert! : AdvertInfoDto;

  ref!: DynamicDialogRef;

  breadcrumbItems = [{
    label: 'Севастополь',
  },
  {
    label: 'Хобби и отдых'
  },
  {
    label: 'Музыкальные инструменты'
  },
]

  constructor(public dialogService: DialogService, ) {

  }

  showPhone(){
    this.ref = this.dialogService.open(PhoneDialogComponent, {
      header: 'Телефон автора',
      width: '40%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}


@NgModule({
  declarations: [ViewAdvertComponent],
  exports: [ViewAdvertComponent],
  imports: [
    BreadcrumbModule,
    ButtonModule,
    GalleryModule,
  ],
})
export class ViewAdvertModule{
}

