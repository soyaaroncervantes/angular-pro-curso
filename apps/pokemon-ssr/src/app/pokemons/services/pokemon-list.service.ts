import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { mapper } from '../../core/mappings/mapper';
import { PokemonListApiService } from './api/pokemon-list-api.service';
import { PokemonPaginationFilterModel } from '../models/filter.model';
import { PokemonNamedAPIResourceListModel } from '../models/list.model';
import { PokemonNamedAPIResourceListDto } from '../dto/list.dto';
import { PokemonPaginationFilterDto } from '../dto/filters.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private readonly pokemonListApi = inject(PokemonListApiService);

  getNamedList$(
    path: string,
    filter?: PokemonPaginationFilterModel
  ): Observable<PokemonNamedAPIResourceListModel> {
    const dto = mapper.map(filter, PokemonPaginationFilterModel, PokemonPaginationFilterDto);
    return this.pokemonListApi
      .getList$<PokemonNamedAPIResourceListDto, PokemonPaginationFilterDto>(path, dto)
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
