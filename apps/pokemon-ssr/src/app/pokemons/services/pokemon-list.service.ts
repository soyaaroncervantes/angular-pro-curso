import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonListApiService } from './api/pokemon-list-api.service';
import { mapper } from '../../core/mappings/mapper';
import { FilterListModel } from '../models/filter.model';
import { PokemonNamedAPIResourceListModel } from '../models/list.model';
import { PokemonNamedAPIResourceListDto } from '../dto/list.dto';
import { FilterListDto } from '../dto/filters.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private readonly pokemonListApi = inject(PokemonListApiService);

  getNamedList$(
    path: string,
    filter?: FilterListModel
  ): Observable<PokemonNamedAPIResourceListModel> {
    const dto = mapper.map(filter, FilterListModel, FilterListDto);
    return this.pokemonListApi
      .getList$<PokemonNamedAPIResourceListDto>(path, dto)
      .pipe(
        map((x) =>
          mapper.map(
            x.body,
            PokemonNamedAPIResourceListDto,
            PokemonNamedAPIResourceListModel
          )
        )
      );
  }
}
