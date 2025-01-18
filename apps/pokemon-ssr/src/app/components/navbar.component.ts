import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgHeroiconsModule, T_OUTLINE_ICONS } from '@dimaslz/ng-heroicons';

type Route = {
  path: string;
  label: string;
  icon: T_OUTLINE_ICONS;
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgHeroiconsModule],
  templateUrl: './navbar.component.html',
  host: {
    class: 'pb-4 pt-3 bg-gray-500 text-white',
  },
})
export class NavbarComponent {
  protected readonly routes: Route[] = [
    { path: 'about', label: 'about', icon: 'building-storefront' },
    { path: 'contact', label: 'contact', icon: 'chat-bubble-left-ellipsis' },
    { path: 'pricing', label: 'pricing', icon: 'currency-dollar' },
  ];
}
