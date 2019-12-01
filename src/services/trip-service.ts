import {Injectable} from "@angular/core";
import {TRIPS, TRIPSTWO, TRIPSTHREE} from "./mock-trips";

@Injectable()
export class TripService {
  private trips: any;
  private tripsTwo: any;
  private tripsThree: any;

  constructor() {
    this.trips = TRIPS;
    this.tripsTwo = TRIPSTWO;
    this.tripsThree = TRIPSTHREE;

  }

  getAll() {
    return this.trips;
  }
  getTripsTwoAll() {
    return this.tripsTwo;
  }
  getTripsThreeAll() {
    return this.tripsThree;
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
