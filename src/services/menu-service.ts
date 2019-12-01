import {Injectable} from "@angular/core";
import {MENU} from "./mock/mock-menu";
import { CrudService } from "./base/crudservice";

@Injectable()
export class MenuService extends CrudService {

  populateList(): void {
    this.itemList = MENU;
  }

  constructor() {
    super();
  }

  getAll() {
    return this.itemList.filter((v) => {
      return v.line == 1;
    });
  }

  getTripsTwoAll() {
    return this.itemList.filter((v) => {
      return v.line == 2;
    });
  }

  getTripsThreeAll() {
    return this.itemList.filter((v) => {
      return v.line == 3;
    });
  }
}
