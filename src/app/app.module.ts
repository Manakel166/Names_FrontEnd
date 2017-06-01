import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNamePage } from '../pages/add-name/add-name';
import { DeleteNamePage } from '../pages/delete-name/delete-name';
import { ModifyNamePage } from '../pages/modify-name/modify-name';

import { FileChooser } from '@ionic-native/file-chooser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Rest } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNamePage,
    DeleteNamePage,
    ModifyNamePage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNamePage,
    DeleteNamePage,
    ModifyNamePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Rest
  ]
})
export class AppModule {}
