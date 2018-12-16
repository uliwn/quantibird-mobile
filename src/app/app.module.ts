import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginLightModule } from '../components/login/login-light/login-light.module';
import { RegisterLightModule } from '../components/register/register-light/register-light.module';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginLightPageModule } from '../pages/login/login-light-page.module';
import { RegisterLightPageModule } from '../pages/register/register-light-page.module';
import { SurveyDetailPage } from '../pages/survey-detail/survey-detail';
import { Global } from '../providers/global';
import { LoadingService } from '../services/loading-service';
import { SurveyResultService } from "../services/survey-result.service";
import { SurveyService } from '../services/survey.service';
import { ToastService } from '../services/toast.service';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SurveyDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginLightModule,
    LoginLightPageModule,
    RegisterLightModule,
    RegisterLightPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SurveyDetailPage
  ],
  providers: [
    Global,
    StatusBar,
    SplashScreen,
    SurveyService,
    SurveyResultService,
    ToastService,
    LoadingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
