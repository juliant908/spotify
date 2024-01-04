import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-current-song',
  standalone: true,
  imports: [NgClass],
  templateUrl: './current-song.component.html',
  styleUrl: './current-song.component.scss'
})
export class CurrentSongComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() artists: string[] = [];
}
