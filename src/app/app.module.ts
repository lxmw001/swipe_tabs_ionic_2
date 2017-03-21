import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {BrowserModule} from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { MainPage } from '../pages/main/main';
import { VideosPage } from '../pages/videos/videos';
import { AboutPage } from '../pages/about/about';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBl6qbZL8AZOJILAY2d5upkHfrU7Gw6aGk",
  authDomain: "inmaculada-25e28.firebaseapp.com",
  databaseURL: "https://inmaculada-25e28.firebaseio.com",
  storageBucket: "inmaculada-25e28.appspot.com",
  messagingSenderId: "788348824224"
};

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
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
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
