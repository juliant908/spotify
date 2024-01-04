import { Component, Input, signal } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerComponent } from '../player/player.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-song-control',
  standalone: true,
  imports: [MatSliderModule, FormsModule, PlayerComponent],
  templateUrl: './song-control.component.html',
  styleUrl: './song-control.component.scss'
})
export class SongControlComponent {
  @Input() audio: HTMLAudioElement = {} as HTMLAudioElement;
  currentTime = signal(0);
  time: any;
  songPart: any;
  constructor(public playerService: PlayerService, public playerComponent: PlayerComponent) {
    this.audio = playerService.audio;
    setTimeout(() => {
      this.setCurrentTime()
    },1000)
  }


  formatTime(time?: number): string{
    if(time == null) return '0:00'
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  formatDuration(duration?: string): number{
    if(duration == null) return 0;
    const [minutes, seconds] = duration.split(':');
    const time = Number(minutes) * 60 + Number(seconds);
    return time
  }
  setCurrentTime(): any{
    this.audio?.addEventListener('timeupdate', this.handleTimeUpdate);
    return () => {
      this.audio?.removeEventListener('timeupdate', this.handleTimeUpdate);
    }
  }

  handleTimeUpdate(): void{
    // this.currentTime.update((time: any) => time = this.audio?.currentTime)
    this.time = this.audio?.currentTime;
  }

  songPartChange(part: number) {
    const newPart = part;
    this.playerComponent.audio.currentTime = newPart;
  }
}
