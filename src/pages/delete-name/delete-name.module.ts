import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteNamePage } from './delete-name';

@NgModule({
  declarations: [
    DeleteNamePage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteNamePage),
  ],
  exports: [
    DeleteNamePage
  ]
})
export class DeleteNamePageModule {}
