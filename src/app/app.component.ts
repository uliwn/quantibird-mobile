import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { User } from '../models/user.model';
import { HomePage } from '../pages/home/home';
import { LoginLightPage } from '../pages/login/login-light-page';

import { Global } from '../providers/global';

export interface PageInterface {
  title: string;
  pageName: string;
  component?: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginLightPage;
  name: string = null;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', component: HomePage, index: 0, icon: 'ios-home' },
    // { title: 'Profile', pageName: '',  component: '', icon: 'md-person' },
    // { title: 'Setting', pageName: '',  component: '', icon: 'ios-settings' },
    { title: 'Logout', pageName: 'LoginLightPage',  component: LoginLightPage, icon: 'ios-power' },
  ];

  constructor(public platform: Platform,
    public global: Global,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private ref: ChangeDetectorRef,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuOpened() {
    if (!this.name) {
      this.storage.get('user').then((user: User) => {
        if (user) {
          if (user.firstname) {
            this.name = user.firstname + ' ' + user.lastname;
          } else if (user.username) {
            this.name = user.username;
          }
          this.ref.detectChanges();
        }
      });
    }
  }

  openPage(page: PageInterface) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if (page.pageName) {
      if (page.title === 'Logout') {
        this.name = null;
        this.storage.set('token', undefined);
      }
      this.nav.setRoot(page.component);
    }
  }
}
