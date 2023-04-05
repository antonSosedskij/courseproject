import { Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

}


@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    ButtonModule,
    InputTextModule
  ],
})
export class SearchComponentModule{

}