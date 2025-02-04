import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgHeroiconsModule, T_OUTLINE_ICONS } from '@dimaslz/ng-heroicons';

type Route = {
  path: string;
  label: string;
  icon: T_OUTLINE_ICONS;
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgHeroiconsModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  host: {
    class: 'pb-4 pt-3 md:pt-0 sticky bottom-0 md:top-0',
  },
})
export class NavbarComponent {
  protected readonly routes: Route[] = [
    { path: 'pokemons', label: 'Pokemons', icon: 'puzzle-piece' },
    { path: 'about', label: 'About', icon: 'building-storefront' },
    { path: 'contact', label: 'Contact', icon: 'chat-bubble-left-ellipsis' },
    { path: 'pricing', label: 'Pricing', icon: 'currency-dollar' },
  ];
}
