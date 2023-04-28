import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { SignInComponent } from '../../modals/sign-in/sign-in.component';
import { SignUpComponent } from '../../modals/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ref!: DynamicDialogRef;
  isLoggedIn: boolean = true;

  items!: MenuItem[];

  constructor(public dialogService: DialogService) {}

  ngOnInit(){
    this.items = [
      {
          label: 'Мои объявления',
          routerLink: '/my-adverts'

      },
      {
          label: 'Настройки',
          routerLink: '/settings'
      }
  ];
  }

  showSignIn() {
    this.ref = this.dialogService.open(SignInComponent, { 
      header: 'Авторизация',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
    console.log(this.ref);
  }

  showSignUp(){
    this.ref = this.dialogService.open(SignUpComponent, { 
      header: 'Регистрация',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
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
  providers: [DialogService]
})
export class HeaderComponentModule{

}
