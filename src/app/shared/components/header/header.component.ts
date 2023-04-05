import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = true;

  items!: MenuItem[];

  ngOnInit(){
    this.items = [
      {
          label: 'Мои объявления'
      },
      {
          label: 'Настройки'
      }
  ];
  }
}


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    ButtonModule,
    MenuModule,
    NgIf,
  ],
})
export class HeaderComponentModule{

}
