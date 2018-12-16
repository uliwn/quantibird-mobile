import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordLight } from './reset-password-light';

@NgModule({
    declarations: [
        ResetPasswordLight,
    ],
    imports: [
        IonicPageModule.forChild(ResetPasswordLight),
    ],
    exports: [
        ResetPasswordLight
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ResetPasswordLightModule { }
