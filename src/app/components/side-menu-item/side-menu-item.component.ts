import { Component, Input } from '@angular/core';
import { HomeComponent } from '@icons/home.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '@icons/search.component';
import { LibraryComponent } from '@icons/library.component';
@Component({
  selector: 'app-side-menu-item',
  standalone: true,
  imports: [HomeComponent, SearchComponent, LibraryComponent, RouterLink],
  templateUrl: './side-menu-item.component.html',
  styleUrl: './side-menu-item.component.scss',
})
export class SideMenuItemComponent {
  @Input() icon: string = '';
  @Input() href: string = '';
  @Input() slot: string = '';
}
