import { Injectable, signal } from '@angular/core';
import { type Playlist } from '@lib/data';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  album = signal({} as Playlist);

  emitPlaylist(event: any): void {
    this.album.update(album => album = event);
  }
}
