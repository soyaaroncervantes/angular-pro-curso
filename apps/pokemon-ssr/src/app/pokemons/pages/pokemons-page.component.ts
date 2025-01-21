import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonListComponent } from '@apps/pokemon-ssr/src/app/pokemons/components/list/pokemon-list.component';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonListComponent],
})
export default class PokemonsPageComponent {}
