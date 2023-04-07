import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    {
      itemImageSrc: "https://picsum.photos/900/600",
      thumbnailImageSrc: "https://picsum.photos/900/600"
    },
    {
      itemImageSrc: "https://picsum.photos/600/400",
      thumbnailImageSrc: "https://picsum.photos/600/400"
    },
    {
      itemImageSrc: "https://picsum.photos/900/600",
      thumbnailImageSrc: "https://picsum.photos/200/150"
    },
    {
      itemImageSrc: "https://picsum.photos/900/600",
      thumbnailImageSrc: "https://picsum.photos/200/150"
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

