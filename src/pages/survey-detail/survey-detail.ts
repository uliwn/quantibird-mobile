import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { Survey } from '../../models/survey.model';
import { SurveyResult } from '../../models/survey-result.model';
import { User } from '../../models/user.model';
import { SurveyResultService } from "../../services/survey-result.service";

@Component({
  selector: 'survey-detail',
  templateUrl: 'survey-detail.html'
})
export class SurveyDetailPage {
  @ViewChild(Slides) slides: Slides;

  survey: Survey;
  questions: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private storage: Storage,
              private surveyResultService: SurveyResultService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.survey = navParams.get('survey');
    this.questions = this.survey.questions;
  }

  onAnswer(q, answer) {
    for (let i = 0; i < q.answers.length; i++) {
      q.answers[i].selected = false;
    }
    answer.selected = true;

    this.slides.slideNext();
  }

  send() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.storage.get('user').then((user: User) => {
      const result = new SurveyResult();
      result.surveyId = this.survey._id;
      result.questions = this.survey.questions;
      result.userId = user._id;

      this.surveyResultService.addResult(result).subscribe(
        res => {
          console.log(res);
          this.presentToast('Danke für deine Stimme!')
        },
        error => {
          console.log(error);
          this.presentToast(JSON.stringify(error));
        },
        () => {
          loading.dismiss();
          this.navCtrl.goToRoot({});
        }
      );
    });
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 5000
    });
    toast.present();
  }

}
