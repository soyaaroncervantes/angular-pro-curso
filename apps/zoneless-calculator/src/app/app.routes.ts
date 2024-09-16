import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'calculator', loadComponent: () => import('@pages/calculator-page.component')},
  { path: '**', redirectTo: 'calculator' },
];
