import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLightPage } from './register-light-page';

import { RegisterLightModule } from '../../components/register/register-light/register-light.module';

@NgModule({
  declarations: [
    RegisterLightPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterLightPage),
    RegisterLightModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterLightPageModule {}
