import { Component } from '@angular/core';
import { playlists } from '@lib/data';
import { PlaylistItemCardComponent } from '../playlist-item-card/playlist-item-card.component';
import { GreetingComponent } from '../greeting/greeting.component';
import { AlbumsService } from 'src/app/services/albums.service';
import { GET } from 'src/api/get-info-playlist.json';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [PlaylistItemCardComponent, GreetingComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  playlists = playlists;

  constructor(public albumsService: AlbumsService, public playerService: PlayerService) {
  }

  setAlbumAndSongs(playlist: any) {
    this.albumsService.setAlbum(playlist);
    GET({ params: playlist.id, request: '' })
      .then(data => data.json())
      .then(res => {
        this.playerService.setCurrentMusic({
          playlist: res.playlist,
          songs: res.songs,
          song: this.playerService.currentMusic()?.song || res.songs[0]
        })
      }
      )
  }
}
