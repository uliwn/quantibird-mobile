import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Survey } from '../../models/survey.model';


@Component({
  selector: 'survey-detail',
  templateUrl: 'survey-detail.html'
})
export class SurveyDetailPage {
  @ViewChild(Slides) slides: Slides;

  survey: Survey;
  questions: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
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

}
