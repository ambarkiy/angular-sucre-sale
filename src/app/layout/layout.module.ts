import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent,
    ContactPhoneComponent,
  ],
  imports: [SharedModule],
  exports: [TopNavigationComponent, FooterComponent, ContactPhoneComponent],
})
export class LayoutModule {}
