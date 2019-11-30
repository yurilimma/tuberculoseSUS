import {Injectable} from "@angular/core";
import {TRIPS, TRIPSTWO} from "./mock-trips";

@Injectable()
export class TripService {
  private trips: any;
  private tripsTwo: any;


  constructor() {
    this.trips = TRIPS;
    this.tripsTwo = TRIPSTWO;

  }

  getAll() {
    return this.trips;
  }
  getTripsTwoAll() {
    return this.tripsTwo;
  }

  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        return this.trips[i];
      }
    }
    return null;
  }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }
}
