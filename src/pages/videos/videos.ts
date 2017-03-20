import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'videos-page',
  templateUrl:'videos.html'
})
export class VideosPage {
  title:string;

  constructor(){
    this.title="Hello World";
  }

  click(){
    alert('You clicked me !');
  }

}