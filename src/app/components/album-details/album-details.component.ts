import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Playlist } from '@lib/data';
import { MusicTableComponent } from '../music-table/music-table.component';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [MusicTableComponent, CardPlayButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent{
  @Input() playlist: Playlist = {} as Playlist;
  @Input() playlistSongs: any;
  @Input() artistsString = '';

  constructor(public playerService: PlayerService) {}
}
