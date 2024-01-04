import { Component, Input } from '@angular/core';
import { TimeComponent } from '@icons/time.component';
import { type Song } from '@lib/data';

@Component({
  selector: 'app-music-table',
  standalone: true,
  imports: [TimeComponent],
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.scss'
})
export class MusicTableComponent {
  @Input() songs: Song[] = [];

}
