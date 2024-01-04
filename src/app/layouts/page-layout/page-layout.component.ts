import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistItemCardComponent } from 'src/app/components/playlist-item-card/playlist-item-card.component';
import { allPlaylists, songs, type Playlist } from '@lib/data';
import { AlbumsService } from 'src/app/services/albums.service';
import { AlbumDetailsComponent } from 'src/app/components/album-details/album-details.component';
@Component({
  selector: 'app-page-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlaylistItemCardComponent, AlbumDetailsComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent implements OnInit{
  playlist: Playlist = {} as Playlist;
  id: string | null = '';
  playlistSongs: any;
  artistsString = '';
  constructor(private route: ActivatedRoute, public albumsService: AlbumsService ) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.playlist = allPlaylists.find(playlist => playlist.id === this.id) || {} as Playlist;
    this.playlistSongs = songs.filter(song => song.albumId === this.playlist.albumId)
    this.albumsService.setAlbum(this.playlist);
    this.generateArtistsString();
  }

  generateArtistsString(): void {
    if(this.playlist.artists){
      this.artistsString = this.playlist?.artists?.join(', ');
    }
  }
}
