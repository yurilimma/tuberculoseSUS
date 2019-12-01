import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyFeelingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-feeling',
  templateUrl: 'daily-feeling.html',
})
export class DailyFeelingPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyFeelingPage');
  }

  daily(){
    this.nav.setRoot(DailyFeelingPage);
  }
}
