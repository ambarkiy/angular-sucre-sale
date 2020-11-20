import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/domain/guards/authorization.guard';
import { Role } from 'src/domain/models/user';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  {
    path: 'menu',
    loadChildren: () =>
      import('./features/menu/menu.module').then((m) => m.MenuModule),
  },

  {
    path: 'cgu',
    loadChildren: () =>
      import('./features/cgu/cgu.module').then((m) => m.CguModule),
  },
  {
    path: 'cgv',
    loadChildren: () =>
      import('./features/cgv/cgv.module').then((m) => m.CgvModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthorizationGuard],
    data: {
      role: Role.ADMIN,
    },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
