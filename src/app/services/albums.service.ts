import { Injectable, signal } from '@angular/core';
import { type Playlist } from '@lib/data';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  album = signal({} as Playlist);

  setAlbum(albumSelected: any): void {
    this.album.update(album => album = albumSelected);
  }
}
