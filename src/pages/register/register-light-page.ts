import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';

import { RegisterService } from '../../services/register.service';
import { ToastService } from '../../services/toast.service'

@IonicPage()
@Component({
  selector: 'register-light-page',
  templateUrl: 'register-light-page.html',
  providers: [
    RegisterService, ToastService
  ]
})
export class RegisterLightPage {
  /*  Necessary data and events
    ================================*/
  data : {};
  events : {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: RegisterService,
    private toastCtrl: ToastService,
    private storage: Storage,
  ) {
    this.events = {
      "onLogin" : this.onLogin,
      "onRegister": this.onRegister,
      "onTermsConditions" : this.onTermsConditions,
      "onPrivacyPolicy" : this.onPrivacyPolicy
    };
  }

  onLogin = (params):any => {
      this.navCtrl.push("LoginLightPage");
  };

  onRegister = (params):any => {
      console.log('params', params);

      const user: User = {};
      user.role = 'user';
      user.firstname = params.firstName;
      user.lastname = params.lastName;
      user.email = params.email;
      user.password = params.password;

      this.service.register(user).subscribe(
          res => {
              console.log('res register', res);
              this.storage.set('user', res);
              this.toastCtrl.presentToast('Sign Up successful, ' + res.firstname);
              this.onLogin(res);
          },
          res => this.toastCtrl.presentToast('error: ' + res),
      );
  };


  /*  Todo override this function with your logic
  =================================================*/
  onTermsConditions = (params):any => {
      this.toastCtrl.presentToast('Terms Conditions');
  };
  /*  Todo override this function with your logic
  =================================================*/
  onPrivacyPolicy = (params):any => {
      this.toastCtrl.presentToast('Privacy Policy');
  };
}
