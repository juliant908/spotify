import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Playlist } from '@lib/data';

@Component({
  selector: 'app-playlist-item-card',
  standalone: true,
  imports: [RouterLink],
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
