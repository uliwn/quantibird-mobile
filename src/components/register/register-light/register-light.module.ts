import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLight } from './register-light';

@NgModule({
    declarations: [
        RegisterLight,
    ],
    imports: [
        IonicPageModule.forChild(RegisterLight),
    ],
    exports: [
        RegisterLight
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterLightModule { }
