import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityNetPage } from '../community-net/community-net';

/**
 * Generated class for the AddTopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-topic',
  templateUrl: 'add-topic.html',
})
export class AddTopicPage {
  private title: string;
  private description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTopicPage');
  }

  public handleTitle(event: any){
    console.log(event);
    this.title = event;
  }

  public handleDescricao(event: any){
    console.log(event);
    this.description = event;
  }

  public sendForm(){
    this.navCtrl.push(CommunityNetPage, {
      newTopic: {
        title: this.title,
        description: this.description
      }
    });
  }
}
