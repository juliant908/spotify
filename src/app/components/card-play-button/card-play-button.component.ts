import { Component, Input, signal } from '@angular/core';
import { PlayComponent } from '@icons/play.component';
import { PauseComponent } from '@icons/pause.component';
import { PlayerService } from 'src/app/services/player.service';
import { GET } from 'src/api/get-info-playlist.json';
import { PlayerComponent } from '../player/player.component';
@Component({
  selector: 'app-card-play-button',
  standalone: true,
  imports: [PlayComponent, PauseComponent, PlayerComponent],
  providers: [PlayerComponent],
  templateUrl: './card-play-button.component.html',
  styleUrl: './card-play-button.component.scss'
})
export class CardPlayButtonComponent  {
  @Input() id = '';
  audio: HTMLAudioElement = {} as HTMLAudioElement;
  currentMusic = signal(this.playerService.currentMusic());
  constructor(public playerService: PlayerService, public playerComponent: PlayerComponent) {
    this.audio = playerComponent.audio as HTMLAudioElement;
  }

  handleClick(): void {
    if(this.isPlayingPlaylist()){
      this.playerService.setIsPlaying(false);
      this.audio.pause();
      return;
    }
    const previousSong = this.playerService.currentMusic()?.song;
    const previousPlaylist = this.playerService.currentMusic()?.playlist;
    GET({params: this.id,request: ''})
      .then(data => data.json())
      .then(res => {
        this.playerService.setCurrentMusic({
          playlist: res.playlist,
          songs: res.songs,
          song: res.songs[0]
        })
        const {song, playlist} = this.playerService.currentMusic();
        if(song){
          if(previousSong?.id === song?.id && previousPlaylist?.id === playlist?.id) {
            this.playerService.setIsPlaying(true);
            this.audio.play();
            return;
          }
          const src = `assets/music/${playlist?.id}/0${song?.id}.mp3`
          this.audio.src = src;
          this.audio.play();
          this.playerService.setIsPlaying(true);
        }
      });

  };

  isPlayingPlaylist(): boolean {
    if(this.playerService.isPlaying() && (this.playerService.currentMusic()?.playlist?.id === this.id)) {
      return true;
    }else {
      return false;
    }
  }
}
