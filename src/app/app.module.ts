import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MenuModule } from './features/menu/menu.module';
import { CgvModule } from './features/cgv/cgv.module';
import { CguModule } from './features/cgu/cgu.module';
import { NotFoundModule } from './features/not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
