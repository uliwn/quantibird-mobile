import {Component, OnInit} from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import { SurveyDetailPage } from '../survey-detail/survey-detail';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  surveys: Survey[] = [];
  isLoading: boolean = false;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private surveyService: SurveyService) {

  }

  ngOnInit() {
    this.getSurveys(null);
  }

  doRefresh(refresher) {
    this.getSurveys(refresher);
  }

  goToSurvey(survey) {
    this.navCtrl.push(SurveyDetailPage, { survey });
  }

  getSurveys(refresher) {
    this.isLoading = true;

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.surveyService.getSurveys().subscribe(
      data => {
        this.surveys = data.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
      },
      error => {
        console.log(error);
        this.presentToast(JSON.stringify(error));
        loading.dismiss();
      },
      () => {
        loading.dismiss();
        if (refresher) {
          refresher.complete();
        }
      },
      )
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 5000
    });
    toast.present();
  }

}
