import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '@lib/data';

@Component({
  selector: 'app-side-menu-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-menu-card.component.html',
  styleUrl: './side-menu-card.component.scss'
})
export class SideMenuCardComponent implements OnInit {
  @Input() playlist: Playlist = {} as Playlist;
  @Input() href: string = '';
  artistsString = '';

  ngOnInit(): void {
    this.generateArtistsString();
  }

  generateArtistsString() {
    this.artistsString = this.playlist?.artists?.join(', ');
  }
}
