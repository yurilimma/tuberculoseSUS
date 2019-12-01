import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GodfatherPage } from './godfather';

@NgModule({
  declarations: [
    GodfatherPage,
  ],
  imports: [
    IonicPageModule.forChild(GodfatherPage),
  ],
})
export class GodfatherPageModule {}
