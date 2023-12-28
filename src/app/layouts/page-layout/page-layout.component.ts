import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistItemCardComponent } from 'src/app/components/playlist-item-card/playlist-item-card.component';
import { allPlaylists, songs, type Playlist } from '@lib/data';
@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [PlaylistItemCardComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent implements OnInit{
  playlist: Playlist = {} as Playlist;
  id: string | null = '';
  playlistSongs: any;
  artistsString = '';
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.playlist = allPlaylists.find(playlist => playlist.id === this.id) || {} as Playlist;
    this.playlistSongs = songs.filter(song => song.albumId === this.playlist.albumId)
    this.generateArtistsString();
  }

  generateArtistsString() {
    this.artistsString = this.playlist?.artists?.join(', ');
  }
}
