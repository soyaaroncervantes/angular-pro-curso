import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NamedAPIResourceModel } from '../../models/utility.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex gap-4 border rounded-xl overflow-auto',
  },
})
export class PokemonCardComponent {
  isLoading = input.required();
  pokemon = input.required<NamedAPIResourceModel>();

  readonly pokemonImageUrl = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon().id}.png`);
}
