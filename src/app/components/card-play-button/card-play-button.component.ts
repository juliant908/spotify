import { Component, Input } from '@angular/core';
import { PlayComponent } from '@icons/play.component';
import { PauseComponent } from '@icons/pause.component';
import { PlayerService } from 'src/app/services/player.service.js';
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
  constructor(public playerService: PlayerService, public playerComponent: PlayerComponent) {
    this.audio = playerComponent.audio as HTMLAudioElement;
  }

  handleClick(): void {
    if(this.isPlayingPlaylist()){
      this.playerService.setIsPlaying(false);
      this.audio.pause();
      return;
    }

    GET({params: this.id,request: ''})
      .then(data => data.json())
      .then(res => {
        this.playerService.setCurrentMusic({
          playlist: res.playlist,
          songs: res.songs,
          song: res.songs[0]
        })
        const currentMusic = this.playerService.currentMusic();
        this.audio.src = (currentMusic) ? `assets/music/${currentMusic?.playlist?.id}/0${currentMusic?.song?.id}.mp3` : '';
        if (this.isPlayingPlaylist()){
          this.audio.pause();
          this.playerService.setIsPlaying(false);
        } else{
          this.audio.play();
          this.audio.volume = this.playerService.volume();
          console.log(this.audio.duration)
          console.log(this.audio)

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
