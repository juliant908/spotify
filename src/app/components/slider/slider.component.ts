import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { PlayerComponent } from '../player/player.component';
import { PlayerService } from 'src/app/services/player.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit{
  value$: number = 100;
  constructor(public playerComponent: PlayerComponent, public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.setVolume(this.value$);
    (this.playerComponent.audio) ? this.playerComponent.audio.volume = this.value$ : '';
  }
  volumeChange(volume: number){
    const newVolume = volume;
    const volumeValue =  newVolume / 100;
    this.playerComponent.audio.volume = volumeValue;
    this.playerService.setVolume(volumeValue);
  }
}
