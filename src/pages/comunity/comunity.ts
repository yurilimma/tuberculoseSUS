import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityNetPage } from '../community-net/community-net';
import { CommunityCalendarPage } from '../community-calendar/community-calendar';
import { CommunityWarnPage } from '../community-warn/community-warn';
import { CommunityGamePage } from '../community-game/community-game';

/**
 * Generated class for the ComunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunity',
  templateUrl: 'comunity.html',
})
export class ComunityPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunityPage');
  }

  goToForum(){
    this.nav.push(CommunityNetPage);
  }

  goToCalendar(){
    this.nav.push(CommunityCalendarPage);
  }

  goToWarnings(){
    this.nav.push(CommunityWarnPage);
  }

  goToGamefication(){
    this.nav.push(CommunityGamePage);
  }
}
