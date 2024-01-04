import { Component } from '@angular/core';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { SideMenuCardComponent } from '../side-menu-card/side-menu-card.component';
import { playlists } from '@lib/data';
import { AlbumsService } from 'src/app/services/albums.service';
@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [SideMenuItemComponent, SideMenuCardComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss',
})
export class AsideMenuComponent {
  playlists = playlists;

  constructor(public albumsService: AlbumsService) {

  }
}
