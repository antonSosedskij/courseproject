import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdvertsComponent } from './pages/my-adverts/my-adverts.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: MyAdvertsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdvertsRoutingModule { }
