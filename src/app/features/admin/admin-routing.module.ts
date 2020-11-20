import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Route[] = [{ path: '', component: AdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
