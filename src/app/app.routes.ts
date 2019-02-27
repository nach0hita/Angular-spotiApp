import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const ROUTES_URL: Routes = [
  { path : 'home',   component: HomeComponent },
  { path : 'search', component: SearchComponent },
  { path : 'artists/:id', component: ArtistaComponent },
  { path : '*', pathMatch: 'full', redirectTo: 'home' },
  { path : '**', pathMatch: 'full', redirectTo: 'home'}
];

export const ROUTES = RouterModule.forRoot( ROUTES_URL );
