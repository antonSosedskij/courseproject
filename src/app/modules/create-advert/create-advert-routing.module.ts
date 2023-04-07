import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdvertComponent } from './pages/create-advert/create-advert.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: CreateAdvertComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAdvertRoutingModule {
    
 }
