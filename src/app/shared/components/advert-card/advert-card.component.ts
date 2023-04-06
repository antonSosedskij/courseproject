import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent {
  // @Input() advert: Advert
}


@NgModule({
  declarations: [AdvertCardComponent],
  exports: [AdvertCardComponent],
  imports: [
    
  ],
})
export class AdvertCardModule{

}


