import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameService } from '../../services/game-service';

/**
 * Generated class for the CommunityGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community-game',
  templateUrl: 'community-game.html',
})
export class CommunityGamePage {
  public questionList: Array<any>;
  public correctQuestion: Array<boolean>;
  public incorrectQuestion: Array<boolean>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
    this.questionList = gameService.getAll();
    this.correctQuestion = [];
    this.incorrectQuestion = [];
    this.questionList.forEach(element => {
      this.correctQuestion.push(false);
      this.incorrectQuestion.push(false);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameficationPage');
  }

  onClickTrue(questionConfirmation: boolean, i: number){
    this.correctQuestion[i] = questionConfirmation[i] == true;
    this.incorrectQuestion[i] = !this.correctQuestion[i];
  }

  onClickFalse(questionConfirmation: boolean, i: number){
    this.incorrectQuestion[i] = questionConfirmation[i] == false;
    this.correctQuestion[i] = !this.incorrectQuestion[i];
  }
}
