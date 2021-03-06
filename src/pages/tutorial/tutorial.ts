import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Storage } from '@ionic/storage';
import { MainPage } from '../main/main';
import { VideosPage } from '../videos/videos';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage implements OnInit {

  titles = ['Main', 'Videos', 'About'];
  title = this.titles[0];
  videos: FirebaseListObservable<any>;
  item: any;


  @ViewChild('mainPage', {read: ViewContainerRef}) mainPage: ViewContainerRef;
  @ViewChild('videosPage', {read: ViewContainerRef}) videosPage: ViewContainerRef;
  @ViewChild('aboutPage', {read: ViewContainerRef}) aboutPage: ViewContainerRef;
  @ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    private compFactoryResolver: ComponentFactoryResolver,
    public storage: Storage,
    public angularFire: AngularFire
  ) {
    this.videos = angularFire.database.list('videos');
    this.item = angularFire.database.object('/videos', { preserveSnapshot: true });
  }

  ngOnInit(){
    this.initPages();
    this.item.subscribe(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.val())
    });
  }

  initPages() {
    let compFactory = this.compFactoryResolver.resolveComponentFactory(MainPage);
    this.mainPage.createComponent(compFactory);

    compFactory = this.compFactoryResolver.resolveComponentFactory(VideosPage);
    this.videosPage.createComponent(compFactory);

    compFactory = this.compFactoryResolver.resolveComponentFactory(AboutPage);
    this.aboutPage.createComponent(compFactory);
  }

  onSlideChangeStart(slider: Slides) {
    this.title = this.titles[slider.realIndex];
  }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
