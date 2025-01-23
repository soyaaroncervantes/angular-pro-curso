import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardComponent } from '../card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonCardComponent],
  host: {
    class: 'flex flex-col gap-8',
  },
})
export class PokemonListComponent {}
