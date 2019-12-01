import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityCalendarPage } from './community-calendar';

@NgModule({
  declarations: [
    CommunityCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityCalendarPage),
  ],
})
export class CommunityCalendarPageModule {}
