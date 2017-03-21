import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { YoutubeVideoPlayer } from 'ionic-native';

@Component({
  selector: 'videos-page',
  templateUrl:'videos.html'
})
export class VideosPage implements OnInit{
  title:string;

  constructor(){
    this.title="Hello World";
  }

  ngOnInit() {
  }

  playVideo(videoId) {
    YoutubeVideoPlayer.openVideo(videoId);
  }

  click(){
    alert('You clicked me !');
  }


}