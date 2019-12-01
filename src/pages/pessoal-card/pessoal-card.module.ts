import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoalCardPage } from './pessoal-card';

@NgModule({
  declarations: [
    PessoalCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoalCardPage),
  ],
})
export class PessoalCardPageModule {}
