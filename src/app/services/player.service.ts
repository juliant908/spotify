import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { type Playlist, type Song } from '@lib/data';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  isPlaying = signal(false);
  currentMusic = signal({ playlist: {} as Playlist, song: {} as Song, songs: [] as Song[] });
  volume = signal(0)
  doc = inject(DOCUMENT);
  audio = this.doc.createElement('audio') as HTMLAudioElement;
  currentSong = signal({} as Song);

  setIsPlaying(playing: boolean): void {
    this.isPlaying.update((isPlaying: boolean) => isPlaying = playing);
  }

  setCurrentMusic(selectedMusic: any): void {
    this.currentMusic.update((music: any) => music = selectedMusic);
    console.log(selectedMusic.song);
    this.currentSong.update((song: any) => song = selectedMusic.song)
  }

  setVolume(volume: number): void {
    this.volume.update((currentVolume: number) => currentVolume = volume);
  }
}
