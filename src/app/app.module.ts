import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {MenuService} from "../services/menu-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {GodfatherPage} from "../pages/godfather/godfather";



import {ProgressBarModule} from "angular-progress-bar"
import { ComunityPage } from "../pages/comunity/comunity";
import { DashboardButtonComponent } from "../components/dashboard-button/dashboard-button";
import { CommunityGamePage } from "../pages/community-game/community-game";
import { CommunityWarnPage } from "../pages/community-warn/community-warn";
import { CommunityCalendarPage } from "../pages/community-calendar/community-calendar";
import { CommunityNetPage } from "../pages/community-net/community-net";
import { ListItemComponent } from "../components/list-item/list-item";
import { TopicService } from "../services/topics-service";
import { TubercususFooterComponent } from "../components/tubercusus-footer/tubercusus-footer";
import { GameService } from "../services/game-service";

import { TooltipsModule, TooltipController } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import{DailyFeelingPage} from "../pages/daily-feeling/daily-feeling";


// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ComunityPage,
    DashboardButtonComponent,
    CommunityGamePage,
    CommunityWarnPage,
    CommunityCalendarPage,
    CommunityNetPage,
    ListItemComponent,
    TubercususFooterComponent,
    GodfatherPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ProgressBarModule,
    TooltipsModule.forRoot(),
    BrowserAnimationsModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ComunityPage,
    DashboardButtonComponent,
    CommunityGamePage,
    CommunityWarnPage,
    CommunityCalendarPage,
    CommunityNetPage,
    ListItemComponent,
    TubercususFooterComponent,
    GodfatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    WeatherProvider,
    TooltipController,
    MenuService,
    WeatherProvider,
    TopicService,
    GameService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule {
}
