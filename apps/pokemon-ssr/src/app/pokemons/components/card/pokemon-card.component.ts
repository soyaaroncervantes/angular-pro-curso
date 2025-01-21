import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex gap-2 border border-teal-300 rounded-xl p-2',
  }
})
export class PokemonCardComponent {}
