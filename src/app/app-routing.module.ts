import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/adverts/adverts.module').then(
      m => m.AdvertsModule
    ),
  },
  {
    path: 'create-advert',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    loadChildren: () => import('./modules/create-advert/create-advert.module').then(
      m => m.CreateAdvertModule
    ),
  },
  {
    path: 'my-adverts',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/my-adverts/my-adverts.module').then(
      m => m.MyAdvertsModule
    ),
  },
  {
    path: 'settings',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/settings/settings.module').then(
      m => m.SettingsModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
