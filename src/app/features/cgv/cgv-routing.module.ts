import { NgModule } from '@angular/core';
import { CgvComponent } from './cgv.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CgvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CgvRoutingModule {}
