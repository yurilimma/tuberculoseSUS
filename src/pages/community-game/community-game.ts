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

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameService: GameService) {
    this.questionList = gameService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameficationPage');
  }
}
