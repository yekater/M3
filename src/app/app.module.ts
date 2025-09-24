import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // ⬅️ вот это

import { AppComponent } from './app.component';
import { SongSliderComponent } from './song-slider/song-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SongSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule   // ⬅️ добавляем
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
