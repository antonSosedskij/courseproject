import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertsRecComponent } from './pages/adverts-rec/adverts-rec.component';
import { AdvertRecViewComponent } from './pages/advert-rec-view/advert-rec-view.component';

const routes: Routes = [
    {
      path: '',
      component: AdvertsRecComponent,
    },
    {
      path: 'view/:id',
      component: AdvertRecViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
