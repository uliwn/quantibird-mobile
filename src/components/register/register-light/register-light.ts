import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'register-light',
    templateUrl: 'register-light.html'
})
export class RegisterLight {
    @Input() data: any;
    @Input() events: any;

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    private isFirstNameValid: boolean;
    private isLastNameValid: boolean;
    private isEmailValid: boolean;
    private isPasswordValid: boolean;

    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor() { 
        this.isFirstNameValid = true;
        this.isLastNameValid = true;
        this.isEmailValid = true;
        this.isPasswordValid = true;
    }

    onEvent = (event: string): void => {
        if (event == "onRegister" && !this.validate()) {
            return ;
        }
        if (this.events[event]) {
            this.events[event]({
                "firstName" : this.firstName,
                "lastName" : this.lastName,
                "email" : this.email,
                "password": this.password,
            });
        }
    };

    validate():boolean {
        this.isFirstNameValid = true;
        this.isLastNameValid = true;
        this.isEmailValid = true;
        this.isPasswordValid = true;

        if (!this.firstName ||this.firstName.length == 0) {
            this.isFirstNameValid = false;
        }

        if (!this.lastName || this.lastName.length == 0) {
            this.isLastNameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);
        
        return this.isLastNameValid && this.isFirstNameValid && this.isEmailValid && this.isPasswordValid;
    }
}
