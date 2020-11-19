import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { CguComponent } from './features/cgu/cgu.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { MenuModule } from './features/menu/menu.module';
import { CgvModule } from './features/cgv/cgv.module';
import { CguModule } from './features/cgu/cgu.module';
import { NotFoundModule } from './features/not-found/not-found.module';
import { CgvComponent } from './features/cgv/cgv.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MenuModule,
    CguModule,
    CgvModule,
    NotFoundModule,
    RouterModule.forRoot([
      { pathMatch: 'full', path: '', redirectTo: 'menu' },
      { path: 'menu', component: MenuComponent },
      { path: 'cgu', component: CguComponent },
      { path: 'cgv', component: CgvComponent },
      { path: '*', component: NotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
