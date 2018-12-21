import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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
    private loadingCtrl: LoadingController,
  ) {
    this.events = {
      "onLogin" : this.onLogin,
      "onRegister": this.onRegister,
      "onTermsConditions" : this.onTermsConditions,
      "onPrivacyPolicy" : this.onPrivacyPolicy
    };
  }

  onLogin = (params):any => {
      this.navCtrl.setRoot("LoginLightPage");
  };

  onRegister = (params):any => {
      console.log('params', params);

      const user: User = {};
      user.role = 'user';
      user.firstname = params.firstName;
      user.lastname = params.lastName;
      user.email = params.email;
      user.password = params.password;

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();

      this.service.register(user).subscribe(
          res => {
              console.log('res register', res);
              this.storage.set('user', res);
              this.toastCtrl.presentToast('sign-up successful, ' + res.firstname);
              this.onLogin(res);
              loading.dismiss();
          },
          res => {
            loading.dismiss();
            this.toastCtrl.presentToast('error: ' + res);
          },
      );
  };

  onTermsConditions = (params):any => {
      this.toastCtrl.presentToast('Terms Conditions');
  };

  onPrivacyPolicy = (params):any => {
      this.toastCtrl.presentToast('Privacy Policy');
  };
  
}
