import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";




@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  public tripsTwo: any;


  constructor(public nav: NavController, public tripService: TripService, public popoverCtrl: PopoverController) {
    // set sample data
    this.trips = tripService.getAll();
    this.tripsTwo = tripService.getTripsTwoAll();

  }

  // redirect to page
  redirectToPage(page) {
    this.nav.push(page.component);
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
