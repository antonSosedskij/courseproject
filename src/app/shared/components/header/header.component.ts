import { NgIf } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { SignInComponent } from '../../modals/sign-in/sign-in.component';
import { SignUpComponent } from '../../modals/sign-up/sign-up.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ref!: DynamicDialogRef;

  items: MenuItem[] = [
    {
        label: 'Мои объявления',
        routerLink: '/my-adverts'

    },
    {
        label: 'Настройки',
        routerLink: '/settings'
    },
    {
      label: 'Выйти',
      command: this.exit
    },
];

  constructor(
    public dialogService: DialogService, 
    public auth: AuthService, 
    private router: Router
    ) {}

  ngOnInit(){
    
  }

  showSignIn() {
    this.ref = this.dialogService.open(SignInComponent, { 
      header: 'Авторизация',
      width: '40%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  showSignUp(){
    this.ref = this.dialogService.open(SignUpComponent, { 
      header: 'Регистрация',
      width: '40%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  exit(){
    localStorage.removeItem('token');
    window.location.href = '';
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

