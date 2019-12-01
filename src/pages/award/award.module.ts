import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwardPage } from './award';

@NgModule({
  declarations: [
    AwardPage,
  ],
  imports: [
    IonicPageModule.forChild(AwardPage),
  ],
})
export class AwardPageModule {}
