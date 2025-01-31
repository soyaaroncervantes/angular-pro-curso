import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationByOffsetFactory } from '../services/factories/pagination-by-offset.factory';
import { PokemonListService } from '../services/pokemon-list.service';
import { PokemonListComponent } from '../components/list/pokemon-list.component';
import { PaginationFilterModel } from '../models/filter.model';
import type { Nullable } from '../../core/utils/types.utils';
import type { PaginationByOffset } from '../../core/pagination/pagination-abstract-factory';
import type { NamedAPIResourceModel } from '../models/utility.model';
import type { PokemonNamedAPIResourceListModel } from '../models/list.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonListComponent],
  host: {
    class: 'flex flex-col gap-8',
  },
})
export default class PokemonsPageComponent
  implements
    OnInit,
    PaginationByOffset<NamedAPIResourceModel, PaginationFilterModel>
{
  list$ = new BehaviorSubject<Nullable<PokemonNamedAPIResourceListModel>>(null);
  request$ = new BehaviorSubject<Nullable<PaginationFilterModel>>(null);
  protected paginator: Nullable<
    PaginationByOffsetFactory<NamedAPIResourceModel, PaginationFilterModel>
  > = null;
  private readonly pokemonService = inject(PokemonListService);
  private activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe((x) => this.request$.next(new PaginationFilterModel(x))
    );

    this.paginator = new PaginationByOffsetFactory(this.destroyRef, this, (p) =>
      this.pokemonService.getNamedList$('/pokemon', p)
    );

    this.paginator.nextPage();
  }
}
