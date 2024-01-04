import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Playlist } from '@lib/data';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';
@Component({
  selector: 'app-playlist-item-card',
  standalone: true,
  imports: [RouterLink, CardPlayButtonComponent],
  templateUrl: './playlist-item-card.component.html',
  styleUrl: './playlist-item-card.component.scss'
})
export class PlaylistItemCardComponent implements OnInit {
  @Input() playlist: Playlist = {} as Playlist;
  @Input() href: string = '';
  artistsString = '';

  ngOnInit(): void {
    this.generateArtistsString();
  }

  generateArtistsString() {
    this.artistsString = this.playlist?.artists?.join(', ');
  }
}
