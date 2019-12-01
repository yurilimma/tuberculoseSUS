import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import { ComunityPage } from "../comunity/comunity";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  public tripsTwo: any;
  public tripsThree: any;

  constructor(public nav: NavController, public tripService: TripService, public popoverCtrl: PopoverController) {
    // set sample data
    this.trips = tripService.getAll();
    this.tripsTwo = tripService.getTripsTwoAll();
    this.tripsThree = tripService.getTripsThreeAll();
  }

  // view trip detail
  viewDetail(id) {
    if(id == 5){
      this.nav.push(ComunityPage);
    }
    else{
      this.nav.push(TripDetailPage, {id: id});
    }    
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
