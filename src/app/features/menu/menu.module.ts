import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [SharedModule, MenuRoutingModule],
})
export class MenuModule {}
