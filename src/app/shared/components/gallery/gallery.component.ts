import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { AdvertInfoDto } from 'src/app/core/interfaces/advert-info';
import { AdvertShortInfoDto } from 'src/app/core/interfaces/advert-short-info';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() advert!: AdvertInfoDto
  images = [
    {
      imageUrl: 'https://placehold.co/600x400',
      thumbnailImgUrl: 'https://placehold.co/600x400'
    },
    {
      imageUrl: 'https://placehold.co/900x600',
      thumbnailImgUrl: 'https://placehold.co/600x400'
    }
  ]

  constructor() {}
}

@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [
    GalleriaModule,
    FormsModule
  ],
})
export class GalleryModule{

}

