import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input, LOCALE_ID, NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { AdvertShortInfoDto } from 'src/app/core/interfaces/advert-short-info';
import { DateTimePipe } from 'src/app/core/pipes/date-time.pipe';
import { ImagePipe } from 'src/app/core/pipes/image.pipe';

import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu)

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent {

  @Input() advert!: AdvertShortInfoDto;

}


@NgModule({
  declarations: [AdvertCardComponent],
  exports: [AdvertCardComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    DateTimePipe,
    ImagePipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' }
  ]
})
export class AdvertCardModule{

}


