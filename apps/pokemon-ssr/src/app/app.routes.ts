import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'pokemons', loadComponent: () => import('./pokemons/pages/pokemons-page.component') },
  { path: 'about', loadComponent: () => import('./core/pages/about/about-page.component') },
  { path: 'contact', loadComponent: () => import('./core/pages/contact/contact-page.component') },
  { path: 'pricing', loadComponent: () => import('./core/pages/pricing/pricing-page.component') },
  { path: '**', redirectTo: 'about' },
];
