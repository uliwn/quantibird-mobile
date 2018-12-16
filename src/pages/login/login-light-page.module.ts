import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLightPage } from './login-light-page';

import { LoginLightModule } from '../../components/login/login-light/login-light.module';

@NgModule({
  declarations: [
    LoginLightPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginLightPage),
    LoginLightModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginLightPageModule {}
