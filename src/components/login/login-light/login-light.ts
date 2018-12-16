import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage } from 'ionic-angular';
import { User } from '../../../models/user.model';

@IonicPage()
@Component({
  selector: 'login-light',
  templateUrl: 'login-light.html',
})
export class LoginLight {
  @Input() data: any;
  @Input() events: any;

  public email: string;
  public password: string;

  public isEmailValid: boolean;
  public isPasswordValid: boolean;
  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private storage: Storage) {
    this.isEmailValid = true;
    this.isPasswordValid = true;

    this.storage.get('user').then((user: User) => {
      if (user) {
        this.email = user.email;
      }
    });
  }

  onEvent = (event: string): void => {
    if (event == "onLogin" && !this.validate()) {
      return;
    }
    if (this.events[event]) {
      this.events[event]({
        'email': this.email,
        'password': this.password,
      });
    }
  };

  validate(): boolean {
    this.isEmailValid = true;
    this.isPasswordValid = true;

    this.isEmailValid = this.regex.test(this.email);


    if (!this.password || this.password.length == 0) {
      this.isPasswordValid = false;
    }

    return this.isPasswordValid && this.isEmailValid;
  }
}
