import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCardComponent } from '../card/pokemon-card.component';
import type { NamedAPIResourceModel } from '../../models/utility.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonCardComponent],
  host: {
    class: 'flex flex-col gap-8',
  },
})
export class PokemonListComponent {
  pokemonList = input.required<NamedAPIResourceModel[]>();
  isLoading = input(true);
}
