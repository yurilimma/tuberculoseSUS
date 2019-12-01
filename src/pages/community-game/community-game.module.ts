import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityGamePage } from './community-game';

@NgModule({
  declarations: [
    CommunityGamePage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityGamePage),
  ],
})
export class CommunityGamePageModule {}
