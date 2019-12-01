import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ComunityPage } from './comunity';

@NgModule({
  declarations: [
    ComunityPage,
  ],
  imports: [
    IonicPageModule.forChild(ComunityPage),
    IonicModule
  ],
})
export class ComunityPageModule {}
