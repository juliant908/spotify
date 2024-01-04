import { Component, Input} from '@angular/core';
import { Playlist } from '@lib/data';
import { MusicTableComponent } from '../music-table/music-table.component';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';
@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [MusicTableComponent, CardPlayButtonComponent],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent{
  @Input() playlist: Playlist = {} as Playlist;
  @Input() playlistSongs: any;
  @Input() artistsString = '';
}
