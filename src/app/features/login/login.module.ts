import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, ReactiveFormsModule, SharedModule, RouterModule],
})
export class LoginModule {}
