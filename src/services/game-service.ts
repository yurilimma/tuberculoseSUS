import {Injectable} from "@angular/core";
import { CrudService } from "./base/crudservice";
import { miths } from "./mock/mock-game";

@Injectable()
export class GameService extends CrudService {

  populateList(): void {
    this.itemList = miths;
  }

  constructor() {
    super();
  }  
}
