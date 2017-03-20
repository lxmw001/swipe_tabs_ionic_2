import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'main-page',
  templateUrl:'main.html'
})
export class MainPage {
  title:string;

  constructor(){
    this.title="Hello World";
  }

  click(){
    alert('You clicked me !');
  }

}