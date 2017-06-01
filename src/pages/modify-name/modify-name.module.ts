import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyNamePage } from './modify-name';

@NgModule({
  declarations: [
    ModifyNamePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyNamePage),
  ],
  exports: [
    ModifyNamePage
  ]
})
export class ModifyNamePageModule {}
