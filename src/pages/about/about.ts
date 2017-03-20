import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'about-page',
  templateUrl:'about.html'
})
export class AboutPage {
  title:string;

  constructor(){
    this.title="Hello World";
  }

  click(){
    alert('You clicked me !');
  }

}