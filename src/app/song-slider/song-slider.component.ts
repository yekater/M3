import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-slider',
  templateUrl: './song-slider.component.html',
  styleUrls: ['./song-slider.component.css']
})
export class SongSliderComponent implements OnInit {

  songs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/songs.json').subscribe(data => {
      this.songs = data as any[];
    });
  }

}