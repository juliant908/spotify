import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Playlist } from '@lib/data';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent{
  @Input() playlist: Playlist = {} as Playlist;
  @Input() playlistSongs: any;
  @Input() artistsString = '';
}
