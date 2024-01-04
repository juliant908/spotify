import { Component } from '@angular/core';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { SideMenuCardComponent } from '../side-menu-card/side-menu-card.component';
import { playlists } from '@lib/data';
import { AlbumsService } from 'src/app/services/albums.service';
import { PlayerService } from 'src/app/services/player.service';
import { GET } from 'src/api/get-info-playlist.json';
@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [SideMenuItemComponent, SideMenuCardComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss',
})
export class AsideMenuComponent {
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
