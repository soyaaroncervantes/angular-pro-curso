import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '@apps/pokemon-ssr/src/app/pokemons/components/card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonCardComponent],
})
export class PokemonListComponent {}
