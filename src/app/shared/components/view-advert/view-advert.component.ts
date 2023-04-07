import { Component, NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleryModule } from '../gallery/gallery.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-view-advert',
  templateUrl: './view-advert.component.html',
  styleUrls: ['./view-advert.component.scss']
})
export class ViewAdvertComponent {
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

