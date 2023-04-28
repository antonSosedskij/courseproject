import { Component, Input, NgModule } from '@angular/core';
import { AdvertShortInfoDto } from 'src/app/core/interfaces/advert-short-info';

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
    
  ],
})
export class AdvertCardModule{

}


