import {Injectable} from "@angular/core";

@Injectable()
export abstract class CrudService {
  protected itemList: Array<any>;

  constructor() {
    this.populateList();
  }

  abstract populateList(): void;

  getAll(): Array<any> {
    return this.itemList;
  }

  getItem(id): any {
    for (var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id === parseInt(id)) {
        return this.itemList[i];
      }
    }
    return null;
  }

  remove(item): void {
    this.itemList.splice(this.itemList.indexOf(item), 1);
  }
}
