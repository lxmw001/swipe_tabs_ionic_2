import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {BrowserModule} from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { MainPage } from '../pages/main/main';
import { VideosPage } from '../pages/videos/videos';
import { AboutPage } from '../pages/about/about';


@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    MainPage,
    VideosPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
    MainPage,
    VideosPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
