import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlayComponent } from '@icons/play.component';
import { PauseComponent } from '@icons/pause.component';
import { PlayerService } from 'src/app/services/player.service';
import { CurrentSongComponent } from '../current-song/current-song.component';
import { SliderComponent } from '../slider/slider.component';
import { SongControlComponent } from '../song-control/song-control.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [PlayComponent, PauseComponent, CurrentSongComponent, SliderComponent, SongControlComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  iconSwitch: boolean = false;
  audio: HTMLAudioElement = {} as HTMLAudioElement;
  constructor(public playerService: PlayerService) {
    this.audio = inject(DOCUMENT).querySelector('audio') as HTMLAudioElement;
  }

  handleClick(): void {
    if (this.playerService.isPlaying()) {
      this.audio.pause();
    } else {
      this.audio.play();
      this.audio.volume = this.playerService.volume();
    }
    this.setIsPlaying();
  }

  setIsPlaying(): void {
    this.playerService.setIsPlaying(!this.playerService.isPlaying());
  }
}
