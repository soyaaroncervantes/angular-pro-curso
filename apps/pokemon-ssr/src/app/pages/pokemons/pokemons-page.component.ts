import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent {}
