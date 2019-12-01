import {Injectable} from "@angular/core";
import {topics} from "./mock-topics";

@Injectable()
export class TopicService {
  private topics: any;

  constructor() {
    this.topics = topics;
  }

  getAll() {
    return this.topics;
  }

  getItem(id) {
    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].id === parseInt(id)) {
        return this.topics[i];
      }
    }
    return null;
  }

  remove(item) {
    this.topics.splice(this.topics.indexOf(item), 1);
  }
}
