import { Component } from '@angular/core';
import { AsideMenuComponent } from '../../components/aside-menu/aside-menu.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AsideMenuComponent, MainMenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
