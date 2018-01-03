import {Component, OnInit} from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import { SurveyDetailPage } from '../survey-detail/survey-detail';

@Component({
  selector: 'page-home',
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
    this.getSurveys();
  }


  goToSurvey(survey) {
    this.navCtrl.push(SurveyDetailPage, { survey });
  }

  getSurveys() {
    this.isLoading = true;

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.surveyService.getSurveys().subscribe(
      data => {
        this.surveys = data;
      },
      error => {
        console.log(error);
        this.presentToast(JSON.stringify(error));
        loading.dismiss();
      },
      () => loading.dismiss()
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
