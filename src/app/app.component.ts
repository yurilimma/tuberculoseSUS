import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TripsPage } from "../pages/trips/trips";

import { LoginPage } from "../pages/login/login";
import { ComunityPage } from "../pages/comunity/comunity";
import { AwardPage } from "../pages/award/award";

import {DailyFeelingPage} from "../pages/daily-feeling/daily-feeling";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: TripsPage, icon: 'home'},
      {title: 'Daily', component: TripsPage, icon: 'sunny'},
      {title: 'Padrinho', component: TripsPage, icon: 'sunny'},
      {title: 'Comunidade', component: ComunityPage, icon: 'people'},
      {title: 'Prêmio', component: AwardPage, icon: 'trophy'},
      {title: 'Agendamento', component: TripsPage, icon: 'calendar'},
      {title: 'Clínica', component: TripsPage, icon: 'medkit'},
      {title: 'Profissional', component: TripsPage, icon: 'body'},
      {title: 'Carteira Digital', component: TripsPage, icon: 'paper'},
      {title: 'Daily', component: DailyFeelingPage, icon: 'calendar'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
