import {Component, OnInit} from '@angular/core';
import { YoutubeVideoPlayer } from 'ionic-native';
import { Http, Response }    from '@angular/http';

@Component({
  selector: 'videos-page',
  templateUrl:'videos.html'
})
export class VideosPage implements OnInit{
  title:string;

  constructor(private http: Http){
    this.title="Hello World";
  }

  ngOnInit() {
    this.getVideoData();
  }

  playVideo(videoId) {
    YoutubeVideoPlayer.openVideo(videoId);
  }

  click(){
    alert('You clicked me !');
  }

  getVideoData() {
    let urlData = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dm115js151U&key=AIzaSyDdkjJYsTFNtSWL8slZNqqblu78DzNx-jM';
    this.http.get(urlData)
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          // this.foods = data
          console.log(data);
        },
        err => console.error(err),
        () => console.log('done')
      );
  }
}