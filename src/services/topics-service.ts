import {Injectable} from "@angular/core";
import {topics} from "./mock/mock-topics";
import { CrudService } from "./base/crudservice";

@Injectable()
export class TopicService extends CrudService {
  populateList(): void {
    this.itemList = topics;
  }

  constructor() {
    super();
  } 
  
  public getByLine(line: number){
    return this.itemList.filter((i) => {
      return i.line == line;
    });
  }
}
