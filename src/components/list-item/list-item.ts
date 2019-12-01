import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicService } from '../../services/topics-service';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {

  topicList: Array<any>;

  constructor(public nav: NavController, public topicService: TopicService) {
    this.topicList = topicService.getAll();
    console.log(this.topicList);
  }
}
