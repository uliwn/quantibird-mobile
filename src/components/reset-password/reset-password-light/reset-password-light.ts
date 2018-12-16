import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'reset-password-light',
    templateUrl: 'reset-password-light.html'
})
export class ResetPasswordLight {
    @Input() data: any;
    @Input() events: any;

    private email: string;
    private isEmailValid: boolean;
    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor() { 
        this.isEmailValid = true;
    }

    onEvent = (event: string): void => {
        if (event == "onResetPassword" && !this.validate()) {
            return;
        }
        if (this.events[event]) {
            this.events[event]({
                'email': this.email
            });
        }
    }

    validate():boolean {
        this.isEmailValid = this.regex.test(this.email);
        return this.isEmailValid;
    }
}
