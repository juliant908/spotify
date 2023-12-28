import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent
  },
  {
    path: 'playlist/:id',
    component: PageLayoutComponent,
    pathMatch: 'full'
  }
];
