import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'about', loadComponent: () => import('./pages/about/about-page.component') },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact-page.component') },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing-page.component') },
  { path: '**', redirectTo: 'about' },
];
