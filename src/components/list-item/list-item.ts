import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicService } from '../../services/topics-service';
import { AddTopicPage } from '../../pages/add-topic/add-topic';

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {
  @Input() line: number;
  @Input() title: string;
  @Input() novo: any;
  topicList: Array<any>;

  constructor(public nav: NavController, public topicService: TopicService) {
    this.topicList = topicService.getAll();
    if(this.novo){
      this.topicList.push({
        id: 9,
        author: "",
        imgSrc: "",
        title: this.novo.title,
        date: "",
        line: 3
      });
    }
    console.log(this.topicList);
  }

  criarTopico(){
    this.nav.push(AddTopicPage);
  }
}
