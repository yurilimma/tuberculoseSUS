import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyFeelingPage } from './daily-feeling';

@NgModule({
  declarations: [
    DailyFeelingPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyFeelingPage),
  ],
})
export class DailyFeelingPageModule {}
