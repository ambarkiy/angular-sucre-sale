import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CguComponent } from './features/cgu/cgu.component';
import { CgvComponent } from './features/cgv/cgv.component';
import { MenuComponent } from './features/menu/menu.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes = [
  { pathMatch: 'full', path: '', redirectTo: 'menu' },
  { path: 'menu', component: MenuComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'cgv', component: CgvComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
