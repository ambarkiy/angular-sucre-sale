import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuRoutingModule {}
