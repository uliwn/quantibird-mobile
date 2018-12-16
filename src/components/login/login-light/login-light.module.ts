import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLight } from './login-light';

@NgModule({
    declarations: [
        LoginLight,
    ],
    imports: [
        IonicPageModule.forChild(LoginLight),
    ],
    exports: [
        LoginLight
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginLightModule { }
