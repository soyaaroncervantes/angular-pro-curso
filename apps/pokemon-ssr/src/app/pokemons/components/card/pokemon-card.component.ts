import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  item = input.required<NamedAPIResourceModel>();
}
