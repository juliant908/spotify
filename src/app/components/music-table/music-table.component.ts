import { Component, Input } from '@angular/core';
import { TimeComponent } from '@icons/time.component';
import { type Song, allPlaylists, songs } from '@lib/data';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerComponent } from '../player/player.component';
import { GET } from 'src/api/get-info-playlist.json';

@Component({
  selector: 'app-music-table',
  standalone: true,
  imports: [TimeComponent],
  providers: [PlayerComponent],
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.scss'
})
export class MusicTableComponent {
  @Input() songs: Song[] = [];
  @Input() playlistId = '';

  constructor(public playerService: PlayerService, public playerComponent: PlayerComponent) {
  }

  setSong(songId: number): void {
    const song = songs.find(song => song.id === songId);
    const src = `assets/music/${this.playlistId}/0${songId}.mp3`
    this.playerComponent.audio.src = src;
    this.playerComponent.audio.play();
    this.playerService.setIsPlaying(true);
    if (song?.albumId === Number(this.playlistId)) {
      this.playerService.setCurrentMusic({
        ...this.playerService.currentMusic(),
        song: songs[songId - 1]
      });
    } else {
      GET({ params: this.playlistId, request: '' })
        .then(data => data.json())
        .then(res => {
          this.playerService.setCurrentMusic({
            playlist: res.playlist,
            songs: res.songs,
            song: res.songs[songId - 1]
          });
        });
    }

  }


}
