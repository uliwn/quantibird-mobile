import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user.model';

import { LoginService } from '../../services/login.service';
import { ToastService } from '../../services/toast.service'
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'login-light-page',
  templateUrl: 'login-light-page.html',
  providers: [
    LoginService, ToastService
  ]
})
export class LoginLightPage {
  /*  Necessary data and events
    ================================*/
  data : {};
  events: {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: LoginService,
    private toastCtrl: ToastService,
    private storage: Storage,
  ) {
    this.events =  {
      "onLogin" : this.onLogin,
      "onRegister" : this.onRegister,
      "onResetPassword" : this.onResetPassword
    };

    this.storage.get('token').then((token) => {
      console.log('token', token);
      if (token) {
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  onLogin = (params): void => {
    console.log('params:', params);
    this.service.login(params).subscribe(
        res => {
            console.log('res login', res);
            this.storage.set('user', res.user);
            this.storage.set('token', res.token);

            this.toastCtrl.presentToast('Hello ' + res.user.firstname);
            this.navCtrl.setRoot(HomePage);
        },
        res => this.toastCtrl.presentToast('Login unsuccessful!')
    );
  };

  /*  Open RegisterLightPage
 	==================================*/
  onRegister = (params): void => {
    this.navCtrl.push("RegisterLightPage");
  };

  /*  Open ResetPasswordLightPage
  =================================*/
  onResetPassword = (params): void => {
    this.navCtrl.push("ResetPasswordLightPage");
  };

}
