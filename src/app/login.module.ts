import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouteModule } from './login-route.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRouteModule,
    FormsModule,
  ],
  declarations: [
    MyProfileComponent,
    LoginComponent,
  ]
})
export class LoginModule {}